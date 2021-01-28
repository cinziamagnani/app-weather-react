import React, { useState } from "react";
import "./WForecast.css";
import axios from "axios";
import ForecastColumn from "./ForecastColumn";

export default function WForecast(props) {
    const [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    function showForecast(response) {
        setForecast(response.data);
        setLoaded(true);
    }
    if(loaded && props.city === forecast.city.name) {
        return (
            <div className="WForecast">
                <div className="row">
                    {forecast.list.slice(0, 6).map(function (forecastItem) {
                        return <ForecastColumn data={forecastItem} />;
                    })}
                </div>
            </div>
        )
    } else {
        const apiKey = "0eb6de8e155714745cc3ba77875938d2";
    let apiUrl =`https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showForecast);
    return (
        <h2>Loading...</h2>
    )
    }
}