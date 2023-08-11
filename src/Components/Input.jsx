import React from "react";
import { useWeather } from "../Context/Weather";
const Input =function({value,placehold,onChange}){
    const weather=useWeather();
    // console.log(weather);
    return(
        <input type="text" className="inp"
        value={weather.searchcity}
        placeholder={placehold}
        onChange={(e)=>{
            weather.setsearchcity(e.target.value);
        }}
        />

    );
}
export default Input