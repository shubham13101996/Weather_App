import React, { useEffect, useState } from 'react'
import "./style.css"

const WeatherCard = (
    {
        temp, humidity,weathermood,sunset,speed,name,pressure,country
    }
) => {

    const [weatherState,setWeatherState]=useState();
    // jab jab weathermood change hoga useEffect call hoga 
    // if weathermood is their use switch case to show the weather icon accordingly

    useEffect(()=>{
        if(weathermood){
            switch (weathermood) {
                case "Clouds": setWeatherState(" wi-cloudy")
                    
                    break;
                    case "Rain": setWeatherState("wi-rain")
                    
                    break;

                    case "Clear": setWeatherState("wi-day-sunny")
                    
                    break;

                    case "Fog": setWeatherState("wi-day-fog")
                    
                    break;

                    case "Smoke": setWeatherState("wi-smoke")
                    
                    break;

                    case "Mist": setWeatherState("wi-dust")
                    
                    break;

                    case "Haze": setWeatherState("wi-windy")
                    
                    break;
                

            
                default:setWeatherState("wi-day-sunny")
                    break;
            }
        }
    },[weathermood])


    // converting time feom sec to hour and minutes
    // first convert sec into millisec
    let sec=sunset;
    let time = new Date(sec * 1000);
    let timeStr = `${time.getHours()}:${time.getMinutes()}` 

  return (
    <>
 <article className="widget">
        <div className="weatherIcon">
          <i className={`wi ${weatherState}`}></i>
        </div>

        <div className="weatherInfo">
          <div className="temperature">
            <span>{temp}&deg;</span>
          </div>

          <div className="description">
            <div className="weatherCondition">{weathermood}</div>
            <div className="place">
              {name}, {country}
            </div>
          </div>
        </div>

        <div className="date"> {new Date().toLocaleString()} </div>

        {/* our 4column section  */}
        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
              <p className="extra-info-leftside">
                {timeStr} PM <br />
                Sunset
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"wi wi-humidity"}></i>
              </p>
              <p className="extra-info-leftside">
                {humidity}%<br />
                Humidity
              </p>
            </div>
          </div>

          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-rain"}></i>
              </p>
              <p className="extra-info-leftside">
                {pressure} <small className='small'>hPa</small> <br />
                Pressure
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"wi wi-strong-wind"}></i>
              </p>
              <p className="extra-info-leftside">
                {speed} <small className='small'>m/sec</small> <br />
                Speed
              </p>
            </div>
          </div>
        </div>
      </article>

    </>
  )
}

export default WeatherCard
