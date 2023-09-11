import './App.css';
import CurrentWeather from './components/organisms/CurrentWeather';
import Search from './components/organisms/Search.js'
import { weatherApiKey, WEATHER_API_URL } from './api';
import { useState } from 'react';
import Forecast from './components/organisms/Forecast';

function App() {

  const [currentWeather, setCurrentWeather] = useState(null) 
  const [forecast, setForecast] = useState(null)

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${weatherApiKey}&units=imperial`)

    const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${weatherApiKey}&units=imperial`)

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json(); 
        const forecastResponse = await response[1].json(); 

        setCurrentWeather({ city: searchData.label , ...weatherResponse})
        setForecast({ city: searchData.label, ...forecastResponse})

      })
      .catch((err) => console.log(err))
  }

  console.log(currentWeather)

  const isSunny = currentWeather?.weather[0].main === 'Clear'


  return (
    <div 
      className={`container 
        ${isSunny ? 'sunny' : ''}
      
      `}
      >
      <Search onSearchChange={handleOnSearchChange} />
      { currentWeather && <CurrentWeather data={currentWeather} />}
      { forecast && <Forecast data={forecast} />}
    </div>
  );
}

export default App;
