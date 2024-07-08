import React, { useState } from "react";
import PropTypes from "prop-types";
import Theme from "./Theme";
import '../editor.css';

export default function Navbar(props) {
    const [isChecked, setIsChecked] = useState(false);

    const toggleSwitch = () => {
        setIsChecked(!isChecked);
    };

    const menuToggle=()=>{
        document.getElementById('mobile-menu').classList.toggle('hidden')
    }
    return (

        <nav className={`container-none ${props.mode === 'light' ? 'bg-gray-50' : 'bg-slate-800'} sticky ${props.mode === 'light' ? 'text-slate-800' : 'text-gray-50'} p-2`}>
            <div className="container-none flex flex-row justify-between md:mx-7 mx-3 py-2">
                <p className="md:font-semibold md:text-3xl">{props.title}</p>
                <div className="md:flex hidden flex-row my-2 md:my-0 ">
                    <Theme cmode={props.mode} />
                    <div className="flex items-center my-1 md:my-0 ">
                        <input
                            type="checkbox"
                            id="toggleSwitch"
                            className="sr-only toggle-checkbox m-2"
                            checked={isChecked}
                            onChange={toggleSwitch}
                            onClick={props.changeMode}
                        />
                        <label
                            htmlFor="toggleSwitch"
                            className={`toggle-label ${isChecked ? 'bg-blue-600' : 'bg-gray-400'} mx-4`}
                        >
                            <span className="toggle-button" />

                        </label><p>{props.mode==='light'?'Enable':'Disable'} Dark Mode</p>
                    </div>
                </div>
                <div className="md:hidden flex ">
                    <button onClick={menuToggle} className={`${props.mode === 'light' ? 'text-slate-800' : 'text-gray-50'}focus:outline-none`}>
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4h96M4 12h16m-7 6h9"></path>
                        </svg>
                    </button>
                </div>
               
            </div>
            <div id="mobile-menu" className="md:hidden  mx-3 my-2 flex flex-shrink position-absolute z-10 flex-row justify-center ">
                <Theme cmode={props.mode} />
                <div  className="flex  items-center my-1 md:my-0 ">
                    <input
                        type="checkbox"
                        id="toggleSwitch"
                        className="sr-only toggle-checkbox m-2"
                        checked={isChecked}
                        onChange={toggleSwitch}
                        onClick={props.changeMode}
                    />
                    <label
                        htmlFor="toggleSwitch"
                        className={`toggle-label ${isChecked ? 'bg-blue-600' : 'bg-gray-400'} md:mx-4 mx-2`}
                    >
                        <span className="toggle-button" />

                    </label>
                    <p className="text-md sm:text-lg">{props.mode==='light'?'Enable':'Disable'} Dark Mode</p>
                </div>
            </div>
        </nav>
    );
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
};

