import React from 'react'
import { Card, Feed } from 'semantic-ui-react'
import moment from 'moment';
import { MdDehaze, MdWbSunny } from "react-icons/md";
import { CiCloudDrizzle } from "react-icons/ci";
import { FiCloudLightning } from "react-icons/fi";
import { FaCloudRain, FaRegSnowflake } from "react-icons/fa";
import { RiMistFill } from "react-icons/ri";
import { BsCloudsFill } from "react-icons/bs";



export default function WeatherCard(
  {temperature, city, sunrise, sunset, humidity, icon}){
    let weatherIcons = null;

    if(icon === "Haze"){
      weatherIcons = <MdDehaze />
    }
    else if (icon === 'Thunderstorm') {
      weatherIcons = <FiCloudLightning />
    }
    else if (icon === 'Drizzle') {
      weatherIcons = <CiCloudDrizzle />
    }
    else if (icon === 'Rain') {
      weatherIcons = <FaCloudRain />
    }
    else if (icon === 'Snow') {
      weatherIcons = <FaRegSnowflake />
    }
    else if (icon === 'Mist') {
      weatherIcons = <RiMistFill />
    }
    else if (icon === 'Clear') {
      weatherIcons = <MdWbSunny />
    }
    else if (icon === 'Clouds') {
      weatherIcons = <BsCloudsFill />
    }

  return (
  <Card>
    <Card.Content className="weather-card">
      <Card.Header className="weather-card-child">{city}</Card.Header>
      <div className="icon-container"> 

      <MdWbSunny />
      
      </div>
    </Card.Content>
    <Card.Content>
      <Feed>
        <Feed.Event>
          <Feed.Content>
          <h5 className='weather-card-child'> 
          {moment().format('MMMM Do, h:mm a')} 
          </h5>
          
          <div className='weather-card'>
            <div className='weather-card-child'>
              {Math.floor(temperature)} ℃
            
            </div>
            <div className="weather-card-child">
              {humidity} %
            </div>
          </div>

          <div className='weather-card'>
            <div className='weather-card-child'>

              {new Date(sunrise * 1000).toLocaleTimeString('en-IN')}
            
            </div>
            <div className='weather-card-child'>
            {new Date(sunset * 1000).toLocaleTimeString('en-IN')}
            </div>
          </div>
          </Feed.Content>
        </Feed.Event>

      </Feed>
    </Card.Content>
  </Card>
  )};

// export default WeatherCard;