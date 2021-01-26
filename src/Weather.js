import React, { useState } from "react";
import "./Weather.css"
import axios from "axios";

export default function Weather(props) { 
    let [weather, setWeather] = useState({ready: false});
    function showTemperature(response) {
        setWeather({
            ready: true,
            temperature: Math.round(response.data.main.temp),
            city: response.data.name,
            wind: Math.round(response.data.wind.speed),
            humidity: Math.round(response.data.main.humidity),
            feelsLike: Math.round(response.data.main.feels_like), 
            description: response.data.weather[0].description,
            icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
        })
    }

    if (weather.ready) {
        return  (
            <div className="Weather">
                <form>
                    <div className="row">
                        <div className="col-9">
                    <input type="text" placeholder="Search for a city" className="form-control" autoFocus="on" />
                    </div>
                    <div className="col-3">
                    <input type="submit" value="Search" className="btn btn-primary w-100" />
                    </div>
                    </div>
                </form>
                <h1>{weather.city}</h1>
                <ul>
                    <li>
                        Monday, January 25th, 14:35
                    </li>
                    <li className="text-capitalize">
                        {weather.description}
                    </li>
                </ul>
                <div className="row">
                    <div className="col-6">
                        <img src={weather.icon} alt={weather.description} />
                        <h2>
                            <span className="temperature">
                                {weather.temperature}
                                </span>
                                <span className="unit">
                                    °C
                                    </span>
                        </h2>
                    </div>
                    <div className="col-6">
                        <ul>
                            <li>
                                 Feels like: {weather.feelsLike}°C
                            </li>
                            <li>
        Wind: {weather.wind}km/h
                            </li>
                            <li>
        Humidity: {weather.humidity}%
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    } else {
        const apiKey = "0eb6de8e155714745cc3ba77875938d2";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(showTemperature);
      return (
          <h1>Loading...</h1>
      ) 
    }
}