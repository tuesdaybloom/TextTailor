
import { useState } from 'react';
import './App.css';
import TextEditor from './components/TextEditor';
import Navbar from './components/Navbar';
import Alert from './components/Alert';


function App() {
  const [mode, setMode] = useState('light');
  const [Tmode, setTMode] = useState('dark');
  const [able, setAble] = useState('Enable');
  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500)
  }
  const changeMode = () => {

    if (mode === 'light') {
      setMode('dark')
      setAble('Disable')
      setTMode('light')
      document.body.style.backgroundColor = '#08502ca8'
      showAlert("Dark mode is Enabled", "Success")
    }
    else {
      setMode('light')
      setAble('Enable')
      setTMode('Dark')
      document.body.style.backgroundColor = '#f3caa8'
      showAlert("Light mode is Enabled", "Success")
    }
  }
  return (
    <>
      
      <Navbar title="TextTailor" mode={mode} changeMode={changeMode} able={able} />
      <Alert alert={alert}/>
      <div className="container-none md:mx-28 mx-4 md:my-4 my-2">
      <h1 className={`md:mb-7 mb-3 text-center font-semibold text-3xl ${mode==='light'?'text-black':'text-white'}`}>Edit your Text Here</h1>
     <TextEditor mode={Tmode} cmode={mode} showAlert={showAlert}/>
  
    </div>
    </>
  );
}

export default App;
