import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import WeatherCard from './components/WeatherCard';


// const URL = `https://api.openweathermap.org/data/2.5/weather/`
const API_KEY = `25027f6e63d9d3f9388224dd78dcd360`

function App() {

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [city, setCity] = useState('');
  const [temperature, setTemperature] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [sunrise, setSunrise] = useState(null);
  const [sunset, setSunset] = useState();
  const [icon, setIcon] = useState('');
  
  function refreshHandler(){
    window.location.reload()
  }

  useEffect(() => {

    navigator.geolocation.getCurrentPosition(function(position) {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);

    });

    axios.get(`https://api.openweathermap.org/data/2.5/weather/?lat=${latitude}&lon=${longitude}&units=metric&APPID=${API_KEY}`)
    .then((weatherData)=> {
      console.log(weatherData.data);
      setTemperature(weatherData.data.main.temp);
      setSunset(weatherData.data.sys.sunset);  
      setSunrise(weatherData.data.sys.sunrise);
      setHumidity(weatherData.data.main.humidity);
      setCity(weatherData.data.name);
      setIcon(weatherData.data.weather[0].main);


    }).catch(err=> console.log(err))
  }, [latitude, longitude])
  return (
    <div className='main'>
      <Header/>
     {
      temperature? (
       <div>
       <WeatherCard temperature={temperature}
        humidity={humidity}
        sunrise={sunrise}
        sunset={sunset}
        city={city}
        icon={icon}
      />
      <div className="ref-button"><button onClick={refreshHandler} >Refresh</button></div>
       </div>
      

      ) : 'Loading...'
      
}
    </div>
  );
}

export default App;
