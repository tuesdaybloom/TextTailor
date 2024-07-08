import React from "react";

function Alert(props) {
  return (
    <div className="h-8">
      {props.alert &&
        <div className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-2 flex align-middle " role="alert">
          <p className="font-bold">{props.alert.type} : </p>
          <p className="text-center text-base mx-1">{props.alert.msg}</p>
        </div>}
    </div>


  );
}

export default Alert;
