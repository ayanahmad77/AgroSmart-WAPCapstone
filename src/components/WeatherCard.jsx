import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Droplets, Wind, Eye, Gauge, MapPin, Loader } from 'lucide-react'

export default function WeatherCard({ onFetch, weather, loading, error }) {
  const [city, setCity] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onFetch(city)
  }

  const iconUrl = weather?.icon
    ? `https://openweathermap.org/img/wn/${weather.icon}@2x.png`
    : null

  return (
    <div className="glass-card rounded-2xl p-6" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
      <h2
        className="font-display font-bold text-xl mb-5"
        style={{ color: '#f1f5f9' }}
      >
        🌤 Weather Conditions
      </h2>


      <form onSubmit={handleSubmit} className="flex gap-3 mb-6">
        <div className="relative flex-1">
          <MapPin
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2"
            style={{ color: 'rgba(226,232,240,0.4)' }}
          />
          <input
            type="text"
            value={city}
            onChange={e => setCity(e.target.value)}
            placeholder="Enter city name..."
            className="w-full pl-9 pr-4 py-3 rounded-xl font-body text-sm outline-none transition-all duration-200 weather-input"
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#e2e8f0',
            }}
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-3 rounded-xl font-body font-semibold text-sm transition-all duration-200 flex items-center gap-2"
          style={{
            background: 'linear-gradient(135deg, #4ade80, #2dd4bf)',
            color: '#0d1f1a',
            opacity: loading ? 0.7 : 1,
          }}
        >
          {loading ? <Loader size={16} className="animate-spin" /> : <Search size={16} />}
          {loading ? '' : 'Search'}
        </button>
      </form>


      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mb-4 p-3 rounded-xl text-sm font-body"
            style={{ background: 'rgba(248,113,113,0.1)', border: '1px solid rgba(248,113,113,0.2)', color: '#f87171' }}
          >
            {error}
          </motion.div>
        )}
      </AnimatePresence>


      <AnimatePresence mode="wait">
        {weather && (
          <motion.div
            key={weather.city}
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >

            <div className="flex items-center justify-between mb-5 pb-5"
              style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <div>
                <p className="font-display font-bold text-3xl" style={{ color: '#f1f5f9' }}>
                  {weather.temp}°C
                </p>
                <p className="font-body text-sm mt-1" style={{ color: 'rgba(226,232,240,0.6)' }}>
                  Feels like {weather.feelsLike}°C
                </p>
                <p className="font-body font-medium text-base mt-1 capitalize" style={{ color: '#4ade80' }}>
                  {weather.condition}
                </p>
              </div>
              <div className="text-right">
                {iconUrl && <img src={iconUrl} alt={weather.condition} width={64} height={64} />}
                <p className="font-body font-semibold text-sm" style={{ color: '#e2e8f0' }}>
                  {weather.city}, {weather.country}
                </p>
              </div>
            </div>


            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: <Droplets size={15} />, label: 'Humidity', value: `${weather.humidity}%` },
                { icon: <Wind size={15} />, label: 'Wind Speed', value: `${weather.wind} m/s` },
                { icon: <Eye size={15} />, label: 'Visibility', value: `${weather.visibility} km` },
                { icon: <Gauge size={15} />, label: 'Pressure', value: `${weather.pressure} hPa` },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-xl"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <div style={{ color: '#4ade80' }}>{stat.icon}</div>
                  <div>
                    <p className="font-body text-xs" style={{ color: 'rgba(226,232,240,0.5)' }}>{stat.label}</p>
                    <p className="font-body font-semibold text-sm" style={{ color: '#e2e8f0' }}>{stat.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!weather && !loading && !error && (
        <div className="text-center py-8" style={{ color: 'rgba(226,232,240,0.3)' }}>
          <p className="font-body text-sm">Search for a city to see weather data</p>
        </div>
      )}
    </div>
  )
}