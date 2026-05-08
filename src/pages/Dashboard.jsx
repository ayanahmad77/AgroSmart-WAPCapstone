import { useState, useEffect } from 'react'

import useWeather from '../hooks/useWeather'
import useSoilType from '../hooks/useSoilType'

import { getCropSuggestions } from '../utils/getCropSuggestions'

import WeatherCard from '../components/WeatherCard'
import SoilSelector from '../components/SoilSelector'
import CropRecommendations from '../components/CropRecommendations'

export default function Dashboard() {
  const { weather, loading, error, fetchWeather } = useWeather()

  const {
    detectedSoil,
    soilLoading,
    soilError,
    soilData,
    fetchSoilType,
  } = useSoilType()

  const [manualSoil, setManualSoil] = useState(null)
  const [recommendations, setRecommendations] = useState([])
  const [hasSearched, setHasSearched] = useState(false)

  const soilType = manualSoil || detectedSoil

  function handleFetchWeather(city) {
    setManualSoil(null)
    fetchWeather(city)
  }

  useEffect(() => {
    if (weather && weather.lat && weather.lon) {
      fetchSoilType(weather.lat, weather.lon)
    }
  }, [weather])

  function handleAnalyze() {
    if (!weather || !soilType) return

    const crops = getCropSuggestions(weather, soilType)

    setRecommendations(crops)
    setHasSearched(true)
  }

  const canAnalyze = weather && soilType && !loading && !soilLoading

  return (
    <div className="dashboard-page">

      <div className="dashboard-container">

        <h1 className="dashboard-title">
          Crop Dashboard
        </h1>

        <p className="dashboard-text">
          Enter your city to get crop suggestions
        </p>

        <div className="dashboard-grid">

          <div className="dashboard-left">

            <WeatherCard
              onFetch={handleFetchWeather}
              weather={weather}
              loading={loading}
              error={error}
            />

            <SoilSelector
              selected={soilType}
              onSelect={setManualSoil}
              detectedSoil={detectedSoil}
              soilLoading={soilLoading}
              soilError={soilError}
              soilData={soilData}
            />

            <button
              onClick={handleAnalyze}
              disabled={!canAnalyze}
              className={`dashboard-btn ${!canAnalyze ? 'dashboard-btn-disabled' : ''}`}
            >
              {!weather ? 'Search city first' : !soilType ? 'Select soil' : 'Analyze Crops'}
            </button>
          </div>

          <div>
            <CropRecommendations
              crops={recommendations}
              hasSearched={hasSearched}
            />
          </div>
        </div>
      </div>
    </div>
  )
}