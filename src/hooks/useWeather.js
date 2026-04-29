import { useState } from 'react'
import axios from 'axios'

export function useWeather() {
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchWeather = async (city) => {
    if (!city.trim()) {
      setError('Please enter a city name.')
      return
    }
    setLoading(true)
    setError(null)
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather`,
        {
          params: {
            q: city,
            appid: import.meta.env.VITE_WEATHER_API_KEY,
            units: 'metric',
          }
        }
      )
      const data = res.data
      setWeather({
        city: data.name || 'Unknown',
        country: data.sys?.country || '',
        temp: Math.round(data.main?.temp ?? 0),
        feelsLike: Math.round(data.main?.feels_like ?? 0),
        humidity: data.main?.humidity ?? 0,
        wind: data.wind?.speed ?? 0,
        condition: data.weather?.[0]?.description || 'N/A',
        icon: data.weather?.[0]?.icon || null,
        pressure: data.main?.pressure ?? 0,
        visibility: data.visibility != null ? (data.visibility / 1000).toFixed(1) : 'N/A',
        lat: data.coord?.lat ?? null,
        lon: data.coord?.lon ?? null,
      })
    } catch (err) {
      if (err.response?.status === 404) {
        setError('City not found. Please check the spelling and try again.')
      } else if (err.response?.status === 401) {
        setError('Invalid API key. Please check your .env file.')
      } else if (!navigator.onLine) {
        setError('No internet connection. Please check your network.')
      } else {
        setError('Failed to fetch weather. Please try again later.')
      }
      setWeather(null)
    } finally {
      setLoading(false)
    }
  }

  return { weather, loading, error, fetchWeather }
}