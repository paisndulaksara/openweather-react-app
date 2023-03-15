import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Weather = ({ country }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=eccd3998ec66bf7578ed61ddc8c2621b&units=metric`
      );
      setWeatherData(response.data);
    };

    fetchWeatherData();
  }, [country]);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Current Weather in {country}</h2>
      <p>Temperature: {weatherData.main.temp} &deg;C</p>
      <p>Description: {weatherData.weather[0].description}</p>
      <p>Humidity: {weatherData.main.humidity}%</p>
      <p>Wind Speed: {weatherData.wind.speed} km/h</p>
    </div>
  );
};

export default Weather;
