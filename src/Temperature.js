import React, { useState } from "react";

export default function Temperature(props) {
    const [unit, setUnit] = useState('celsius');
    function convertToFahrenheit(event) {
        event.preventDefault();
        setUnit('fahrenheit');
    }
    function convertToCelsius(event) {
        event.preventDefault();
        setUnit('celsius');
    }
    if (unit==='celsius') {
        return (
            <div className="Temperature">
            <h2>
                                                 <span className="temperature">
                                                  {props.celsius}
                                                </span>
                                                <span className="unit">
                                                °C |
                                                <a href='/' className='links' onClick={convertToFahrenheit}>
                                                °F
                                                </a>
                                                </span>
                                             </h2>
            </div>
                );
    } else {
        let fahrenheit = Math.round((props.celsius*9)/5 + 32);
        return (
            <div className="Temperature">
            <h2>
                                                 <span className="temperature">
                                                  {fahrenheit}
                                                </span>
                                                <span className="unit">
                                                <a href='/' className='links' onClick={convertToCelsius}>
                                                °C
                                                </a>
                                                | °F
                                                </span>
                                             </h2>
            </div>
        );
    }
    
}