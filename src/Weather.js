import React from "react";
import "./Weather.css"

export default function Weather() {
    return (
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
            <h1>Amsterdam</h1>
            <ul>
                <li>
                    Monday, January 25th, 14:35
                </li>
                <li>
                    Sunny
                </li>
            </ul>
            <div className="row">
                <div className="col-6">
                    <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="Sunny" />
                    <h2>
                        <span className="temperature">
                            6
                            </span>
                            <span className="unit">
                                °C
                                </span>
                    </h2>
                </div>
                <div className="col-6">
                    <ul>
                        <li>
                            Feels like: 12°C
                        </li>
                        <li>
                            Wind: 2km/h
                        </li>
                        <li>
                            Humidity: 0%
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}