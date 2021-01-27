import React, { useState } from "react";

export default function Temperature(props) {
    const [temp, setTemp] = useState(props.celsius);
    const [unit, setUnit] = useState('celsius');
    function convertToFahrenheit(event) {
        event.preventDefault();
        setTemp(Math.round((props.celsius*9)/5 + 32));
        setUnit('fahrenheit');
    }
    function convertToCelsius(event) {
        event.preventDefault();
        setUnit('celsius');
        setTemp(props.celsius);
    }
    if (unit==='celsius') {
        return (
            <div className="Temperature">
            <h2>
                                                 <span className="temperature">
                                                  {temp}
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
        return (
            <div className="Temperature">
            <h2>
                                                 <span className="temperature">
                                                  {temp}
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