// src/Editor.js
import React, { useState, useEffect } from 'react';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../editor.css';

const TextEditor = (props) => {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

  useEffect(() => {
    loadContent();
  }, []);

  const onEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
  };

    const wordCount = (editorState) => {
        const plainText = editorState.getCurrentContent().getPlainText('\u0001');
        return plainText.split(/\s+/).filter((word) => word.length > 0).length;
      };
      
      const characterCount = (editorState) => {
        const plainText = editorState.getCurrentContent().getPlainText('\u0001');
        return plainText.replace(/\s/g, '').length;
      };
      
      const sentenceCount = (editorState) => {
        const plainText = editorState.getCurrentContent().getPlainText('\u0001');
        const sentences = plainText.split(/[.!?]/).filter((sentence) => sentence.length > 0);
        return sentences.length;
      };
      
      const linesCount = (editorState) => {
        const plainText = editorState.getCurrentContent().getPlainText('\u0001');
        return plainText.split('\n').length;
      };
      
      const minutesToRead = (editorState) => {
        return wordCount(editorState) * 0.008;
      };

  const saveContent = () => {
    const content = editorState.getCurrentContent();
    localStorage.setItem('content', JSON.stringify(convertToRaw(content)));
    props.showAlert('Your Changes are Saved!!','Success')
  };

  const loadContent = () => {
    const savedData = localStorage.getItem('content');
    if (savedData) {
      setEditorState(EditorState.createWithContent(convertFromRaw(JSON.parse(savedData))));
    }
    props.showAlert('Loading..','Wait')
  };

  const uploadImageCallBack = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => resolve({ data: { link: e.target.result } });
      reader.onerror = (e) => reject(e);
      reader.readAsDataURL(file);
    });
  };

  return (
    <>
    <div className='h-full'>
      <Editor
        editorState={editorState}
        toolbarClassName={`toolbar-class `}
        wrapperClassName="wrapper-class"
        editorClassName={`editor-class shadow-xl bg-white border border-black p-1`}
        onEditorStateChange={onEditorStateChange}
        toolbar={{
          image: {
            urlEnabled: true,
            uploadEnabled: true,
            alignmentEnabled: true,
            uploadCallback: uploadImageCallBack,
            previewImage: true,
            inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
            alt: { present: false, mandatory: false },
            defaultSize: {
              height: 'auto',
              width: 'auto',
            },
          },
        }}
      />
      <div className="m-3 flex align-middle justify-center">
        <button className=" hover:bg-gray-900 text-gray-700 bg-white font-semibold hover:text-white py-1 px-3 border mx-4 border-gray-700 hover:border-transparent rounded" onClick={saveContent}>
          Save
        </button>
        <button className="bg-white hover:bg-gray-900 text-gray-700 font-semibold hover:text-white py-1 px-3 border border-gray-700 hover:border-transparent rounded" onClick={loadContent}>
          Load
        </button>

      </div>
    </div>
    <div className={`${props.cmode==='light'?'text-black':'text-white'} my-5`}>
    <h3 >Your Text Summary</h3>
    <hr className='border-black'/>
    <p>
      {wordCount(editorState)} Words | {characterCount(editorState)} Characters | {sentenceCount(editorState)} Sentences | {linesCount(editorState)} Lines
    </p>
    <p >
      {minutesToRead(editorState).toFixed(2)} Minutes to read
    </p>
  </div>
  </>
  );
};

export default TextEditor;
