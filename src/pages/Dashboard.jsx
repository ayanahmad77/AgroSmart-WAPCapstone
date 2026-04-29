import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useWeather } from '../hooks/useWeather'
import { useSoilType } from '../hooks/useSoilType'
import { getCropSuggestions } from '../utils/getCropSuggestions'
import WeatherCard from '../components/WeatherCard'
import SoilSelector from '../components/SoilSelector'
import CropRecommendations from '../components/CropRecommendations'
import { Sprout, Loader } from 'lucide-react'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
}

export default function Dashboard() {
  const { weather, loading, error, fetchWeather: fetchWeatherRaw } = useWeather()
  const { detectedSoil, soilLoading, soilError, soilData, fetchSoilType } = useSoilType()
  const [manualSoil, setManualSoil] = useState(null)
  const [recommendations, setRecommendations] = useState([])
  const [hasSearched, setHasSearched] = useState(false)
  const [analyzing, setAnalyzing] = useState(false)

  // Use manual override if user picked one, otherwise use auto-detected
  const soilType = manualSoil ?? detectedSoil

  // Wrap fetchWeather to also reset manual soil selection
  const handleFetchWeather = (city) => {
    setManualSoil(null)
    fetchWeatherRaw(city)
  }

  // When weather loads with coordinates, auto-fetch soil type
  useEffect(() => {
    if (weather?.lat != null && weather?.lon != null) {
      fetchSoilType(weather.lat, weather.lon)
    }
  }, [weather?.lat, weather?.lon, fetchSoilType])

  const handleAnalyze = async () => {
    if (!weather || !soilType) return
    setAnalyzing(true)
    await new Promise(r => setTimeout(r, 600)) // small delay for effect
    const crops = getCropSuggestions(weather, soilType)
    setRecommendations(crops)
    setHasSearched(true)
    setAnalyzing(false)
  }

  const canAnalyze = weather && soilType && !loading && !soilLoading

  return (
    <motion.div
      className="page-wrapper pt-28 pb-20 px-6"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4 }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <motion.h1
            className="font-display font-extrabold mb-2"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#f1f5f9', letterSpacing: '-0.02em' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Crop <span className="gradient-text">Dashboard</span>
          </motion.h1>
          <motion.p
            className="font-body"
            style={{ color: 'rgba(226,232,240,0.5)', fontSize: '1.05rem' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Search your city — soil type is auto-detected from satellite data, then get smart crop recommendations.
          </motion.p>
        </div>

        {/* Layout: Left panel + Right panel */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Controls */}
          <div className="flex flex-col gap-6 lg:col-span-1">
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

            {/* Analyze Button */}
            <motion.button
              onClick={handleAnalyze}
              disabled={!canAnalyze || analyzing}
              className="w-full py-4 rounded-2xl font-display font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300"
              style={{
                background: canAnalyze
                  ? 'linear-gradient(135deg, #4ade80, #2dd4bf)'
                  : 'rgba(255,255,255,0.05)',
                color: canAnalyze ? '#0d1f1a' : 'rgba(226,232,240,0.3)',
                cursor: canAnalyze ? 'pointer' : 'not-allowed',
                boxShadow: canAnalyze ? '0 0 30px rgba(74,222,128,0.3)' : 'none',
              }}
              whileHover={canAnalyze ? { scale: 1.02, boxShadow: '0 0 50px rgba(74,222,128,0.5)' } : {}}
              whileTap={canAnalyze ? { scale: 0.98 } : {}}
            >
              {analyzing ? (
                <>
                  <Loader size={20} className="animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Sprout size={20} />
                  {!weather ? 'Search a city first' : !soilType ? (soilLoading ? 'Detecting soil...' : 'Select soil type') : 'Analyze Crops'}
                </>
              )}
            </motion.button>
          </div>

          {/* Right: Recommendations */}
          <div className="lg:col-span-2">
            <CropRecommendations
              crops={recommendations}
              hasSearched={hasSearched}
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}