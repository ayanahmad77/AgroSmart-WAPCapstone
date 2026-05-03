import { useState } from "react";
import axios from "axios";

function useWeather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchWeather(city) {
    if (city === "") {
      setError("Please enter a city name");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather",
        {
          params: {
            q: city,
            appid: import.meta.env.VITE_WEATHER_API_KEY,
            units: "metric",
          },
        }
      );

      const data = response.data;

      const weatherData = {
        city: data.name,
        country: data.sys.country,
        temp: Math.round(data.main.temp),
        feelsLike: Math.round(data.main.feels_like),
        humidity: data.main.humidity,
        wind: data.wind.speed,
        condition: data.weather[0].description,
        icon: data.weather[0].icon,
        pressure: data.main.pressure,
        visibility: (data.visibility / 1000).toFixed(1),
        lat: data.coord.lat,
        lon: data.coord.lon,
      };

      setWeather(weatherData);
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setError("City not found");
      } else if (err.response && err.response.status === 401) {
        setError("Invalid API key");
      } else {
        setError("Something went wrong");
      }

      setWeather(null);
    }

    setLoading(false);
  }

  return { weather, loading, error, fetchWeather };
}

export default useWeather;