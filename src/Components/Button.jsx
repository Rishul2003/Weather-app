import React from "react";
const Button=function({value,onClick}){
   return (
    <button className={value} onClick={onClick}>
        {value}
    </button>
   )
}
export default Button