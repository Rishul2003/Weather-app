import { createContext, useContext, useState } from "react";
const Weathercontext=createContext(null);

import { getweatherloc } from "../api/index";
import {getweather} from '../api/index';
export  const useWeather=function(){
    return useContext(Weathercontext);
}
export const Weatherprovider =function({children}){
    const [data,setdata]=useState(null)
    const [searchcity,setsearchcity]=useState(null)




    const fetchdata=async function(){
        const response =await getweather(searchcity);
        setdata(response);
    }


    const fetchcurr=function(){
        navigator.geolocation.getCurrentPosition(postion=>{
            // console.log(postion); 
            getweatherloc(postion.coords.latitude,postion.coords.longitude).then((data)=>{
                setdata(data);
            });
        })
    }
    return <Weathercontext.Provider value={{searchcity,data,searchcity,fetchdata,setsearchcity,fetchcurr}} >{children}</Weathercontext.Provider>
} 