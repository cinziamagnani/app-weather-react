import React, { useState } from "react";
import "./Weather.css"
import axios from "axios";
import WCondition from "./WCondition";
import WForecast from "./WForecast";

export default function Weather(props) { 
    const [weather, setWeather] = useState({ready: false});
    const [city, setCity] = useState(props.defaultCity);
    
    function showTemperature(response) {
        setWeather({
            ready: true,
            temperature: Math.round(response.data.main.temp),
            city: response.data.name,
            date: new Date(response.data.dt*1000),
            wind: Math.round(response.data.wind.speed),
            humidity: Math.round(response.data.main.humidity),
            feelsLike: Math.round(response.data.main.feels_like), 
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
            iconUrl: `http://openweathermap.org/img/wn/${weather.icon}@2x.png`
        })
    }

    function search(city) {
        const apiKey = "0eb6de8e155714745cc3ba77875938d2";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        axios.get(apiUrl).then(showTemperature);
    }
    function handleSubmit(event) {
        event.preventDefault();
        search(city);
    }

    function handleCity(event) {
        setCity(event.target.value);
    }
    if (weather.ready) {
        return  (
            <div className="Weather">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-9">
                    <input type="text" placeholder="Search for a city" className="form-control" autoFocus="on" onChange={handleCity}/>
                    </div>
                    <div className="col-3">
                    <input type="submit" value="Search" className="btn btn-primary w-100" />
                    </div>
                    </div>
                </form>
                <WCondition info={weather}/>
                <WForecast city={weather.city}/>
            </div>
        )
    } else {
    search(city);
      return (
          <h1>Loading...</h1>
      ) 
    }
}