import React from 'react';

function Theme(props) {
  const changeColor = (color) => {
    document.body.style.backgroundColor = color;
  }

  return (
    <div className={`px-1  rounded-full ${props.cmode === 'dark' ? 'bg-white' : 'bg-[#0c2864ef]'}`}>
      {props.cmode === 'dark' ? (
        <div className="m-1 rounded-full">
          <button className="mx-1 rounded-sm bg-[#6e121294] w-6 h-3" onClick={() => changeColor('#6e121294')}></button>
          <button className="mx-1 rounded-sm bg-[#0c4464ef] w-6 h-3" onClick={() => changeColor('#0c4464ef')}></button>
          <button className="mx-1 rounded-sm bg-[goldenrod] w-6 h-3" onClick={() => changeColor('#cec32eef')}></button>
          <button className="mx-1 rounded-sm bg-[#0c6458ef] w-6 h-3" onClick={() => changeColor('#0c6458ef')}></button>
          <button className="mx-1 rounded-sm bg-[#1b041a75]  w-6 h-3" onClick={() => changeColor('#1b041a75')}></button>
        </div>
      ) : (
        <div className="m-1 rounded-full">
          <button className="mx-1 rounded-sm bg-pink-300 w-6 h-3" onClick={() => changeColor('pink')}></button>
          <button className="mx-1 rounded-sm bg-blue-300 w-6 h-3" onClick={() => changeColor('lightBlue')}></button>
          <button className="mx-1 rounded-sm bg-yellow-300 w-6 h-3" onClick={() => changeColor('lightyellow')}></button>
          <button className="mx-1 rounded-sm bg-green-300 w-6 h-3" onClick={() => changeColor('#b4e0bbef')}></button>
          <button className="mx-1 rounded-sm bg-purple-300 w-6 h-3" onClick={() => changeColor('lavender')}></button>
        </div>
      )}
    </div>
  );
}

export default Theme;
