
// 61f9363a7a5ef6486935b00cd2dbc009
// https://api.openweathermap.org/data/2.5/weather?q=${faridabad}&units=metric&appid=61f9363a7a5ef6486935b00cd2dbc009


import React,{useState,useEffect} from 'react'
import WeatherCard from './WeatherCard';
import "./style.css"

const WeatherApp = () => {
 const [searchValue,setSearchValue] = useState("faridabad");
const [tempInfo,setTempInfo] =useState({});

  const getWeatherInfo = async ()=>{
   try {
    
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=61f9363a7a5ef6486935b00cd2dbc009
    `
   const res = await fetch (url);
   const  data = await res.json();
console.log(data);
   const { temp,pressure,humidity} = data.main;
   const {speed} = data.wind;
const {main : weathermood} = data.weather[0];
const {name} = data;
const {country,sunset} = data.sys;

const weatherInfo = {
    temp, humidity,weathermood,sunset,speed,name,pressure,country
}
     setTempInfo(weatherInfo);
   } catch (error) {
    console.log(error)
   }
  }



useEffect(()=>{
    getWeatherInfo();
    setSearchValue("")
},[])

  return (
    <>
       <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="search..."
            autoFocus
            id="search"
            className="searchTerm"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />

          <button
            className="searchButton"
            type="button"
            onClick={getWeatherInfo}>
            Search
          </button>
        </div>
      </div>

      {/* our WeatherCard  */}
      <WeatherCard {...tempInfo} />
    </>

  )
}

export default WeatherApp
