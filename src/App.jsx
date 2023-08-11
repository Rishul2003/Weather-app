import { useState } from 'react'
import './App.css'
import Card from './Components/Card'
import Input from './Components/Input'
import Button from './Components/Button'
import { useWeather } from './Context/Weather'
import { useEffect } from 'react'
function App() {
  const weather=useWeather();
  function handlesearch(){
    weather.fetchdata();
  } 
  useEffect(()=>{
    weather.fetchcurr();
  },[])
  // console.log(weather);
  return (
    <>  
    <h1 className='head'>WEATHER APP</h1>
    <div className='App'> 
      <Input placehold={"SEARCH HERE"}></Input>
      <Button onClick={handlesearch} value={"Search"} ></Button>
      <Card></Card>
      <Button value={"Refresh"}></Button>
    </div>
    </>
  )
}

export default App
