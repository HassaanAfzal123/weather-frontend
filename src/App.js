import React, { useState, useEffect } from 'react';
import './App.css';

const cities = ['new-york', 'london', 'paris', 'tokyo'];

function App() {
  const [weather, setWeather] = useState(null);
  const [selectedCity, setSelectedCity] = useState('new-york');

  useEffect(() => {
    fetch(`https://weather-backend-nffx.onrender.com/${selectedCity}`)
      .then(res => res.json())
      .then(data => setWeather(data));
  }, [selectedCity]);

  return (
    <div className="App">
      <h1>🌦️ Weather Widget</h1>

      <div className="buttons">
        {cities.map(city => (
          <button
            key={city}
            onClick={() => setSelectedCity(city)}
            className={selectedCity === city ? 'active' : ''}
          >
            {city.replace('-', ' ').toUpperCase()}
          </button>
        ))}
      </div>

      {weather ? (
        <div className="card">
          <h2>{weather.city}</h2>
          <p>{weather.icon} {weather.condition}</p>
          <h3>{weather.temperature}</h3>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
