import React from "react"
import { useWeather } from "../Context/Weather";
const Card=function(){
    const weather=useWeather();
    return (

        <div className="Card">
            <img src={weather?.data?.current?.condition?.icon} alt="no city" />
            <h2>{<>{weather?.data?.current?.temp_c} C </>} <span>{weather?.data?.current?.condition?.text}</span></h2>
            <h4>{weather?.data?.location?.region}    {weather?.data?.location?.country}</h4>
        </div>
    )
};

export default Card;