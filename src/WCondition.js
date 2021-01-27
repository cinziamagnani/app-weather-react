import React from "react";
import FormattedDate from "./FormattedDate";

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
                        <img src={props.info.icon} alt={props.info.description} />
                        <h2>
                            <span className="temperature">
                                {props.info.temperature}
                                </span>
                                <span className="unit">
                                    °C
                                    </span>
                        </h2>
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