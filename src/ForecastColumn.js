import React from "react";
import "./WForecast.css";
import WeatherIcon from "./WeatherIcon";

export default function ForecastColumn(props) {
    function hours() {
        let date = new Date(props.data.dt * 1000);
        let hour = date.getHours();
        if (hour < 10) {
            hour = `0${hour}`;
        }
        return `${hour}`
    }
    return (
        <div className='col-2 singleF'>
                <h3>{hours()}:00</h3>
                <WeatherIcon code={props.data.weather[0].icon} 
                alt={props.data.weather[0].description}/>
           <p>
               <strong>
                   {Math.round(props.data.main.temp_max)}°
                   </strong>
                    {Math.round(props.data.main.temp_min)}°
                    </p>
                </div>
    )
    }