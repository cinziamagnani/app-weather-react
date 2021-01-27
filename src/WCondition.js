import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";

export default function WCondition(props) {
    return (
        <div className="WCondition">
            <h1>{props.info.city}</h1>
                <ul>
                    <li>
                        <FormattedDate date={props.info.date} />
                    </li>
                    <li className="text-capitalize">
                        {props.info.description}
                    </li>
                </ul>
                <div className="row">
                    <div className="col-6">
                         <div className="clearfix">
                             <div className="float-left">
                                <WeatherIcon code={props.info.icon} alt={props.info.description} />
                             </div>
                         <div className="float-left">
                             <Temperature celsius={props.info.temperature} />
                        </div>
                    </div>
                </div>
                    <div className="col-6">
                        <ul>
                            <li>
                                 Feels like: {props.info.feelsLike}°C
                            </li>
                            <li>
        Wind: {props.info.wind}km/h
                            </li>
                            <li>
        Humidity: {props.info.humidity}%
                            </li>
                        </ul>
                    </div>
                </div>
        </div>
    );
}