import { useState } from 'react'
import { Search, Droplets, Wind, Eye, Gauge, MapPin, Loader } from 'lucide-react'

export default function WeatherCard({ onFetch, weather, loading, error }) {
  const [city, setCity] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onFetch(city)
  }

  const iconUrl = weather?.icon ? `https://openweathermap.org/img/wn/${weather.icon}@2x.png` : null

  return (
    <div className="weather-card glass-card">

      <h2 className="weather-title">
        🌤 Weather Conditions
      </h2>

      <form onSubmit={handleSubmit} className="weather-form">

        <div className="weather-input-box">
          <MapPin size={16} className="weather-input-icon" />

          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name..."
            className="weather-input"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`weather-btn ${loading ? 'weather-btn-loading' : ''}`}
        >
          {loading ? <Loader size={16} className="animate-spin" /> : <Search size={16} />}

          {!loading && 'Search'}
        </button>
      </form>

      {error && (
        <div className="weather-error">
          {error}
        </div>
      )}

      {weather && (
        <div>

          <div className="weather-main">

            <div>
              <p className="weather-temp">
                {weather.temp}°C
              </p>

              <p className="weather-feels">
                Feels like {weather.feelsLike}°C
              </p>

              <p className="weather-condition">
                {weather.condition}
              </p>
            </div>

            <div className="weather-location">

              {iconUrl && (
                <img
                  src={iconUrl}
                  alt={weather.condition}
                  width={64}
                  height={64}
                />
              )}

              <p className="weather-city">
                {weather.city}, {weather.country}
              </p>
            </div>
          </div>

          <div className="weather-stats">

            <div className="weather-stat">

              <div className="weather-stat-icon">
                <Droplets size={15} />
              </div>

              <div>
                <p className="weather-stat-label">
                  Humidity
                </p>

                <p className="weather-stat-value">
                  {weather.humidity}%
                </p>
              </div>
            </div>

            <div className="weather-stat">

              <div className="weather-stat-icon">
                <Wind size={15} />
              </div>

              <div>
                <p className="weather-stat-label">
                  Wind Speed
                </p>

                <p className="weather-stat-value">
                  {weather.wind} m/s
                </p>
              </div>
            </div>

            <div className="weather-stat">

              <div className="weather-stat-icon">
                <Eye size={15} />
              </div>

              <div>
                <p className="weather-stat-label">
                  Visibility
                </p>

                <p className="weather-stat-value">
                  {weather.visibility} km
                </p>
              </div>
            </div>

            <div className="weather-stat">

              <div className="weather-stat-icon">
                <Gauge size={15} />
              </div>

              <div>
                <p className="weather-stat-label">
                  Pressure
                </p>

                <p className="weather-stat-value">
                  {weather.pressure} hPa
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {!weather && !loading && !error && (
        <div className="weather-empty">
          <p>Search for a city to see weather data</p>
        </div>
      )}
    </div>
  )
}