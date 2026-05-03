import { useState, useEffect } from "react";

import useWeather from "../hooks/useWeather";
import useSoilType from "../hooks/useSoilType";
import { getCropSuggestions } from "../utils/getCropSuggestions";

import WeatherCard from "../components/WeatherCard";
import SoilSelector from "../components/SoilSelector";
import CropRecommendations from "../components/CropRecommendations";

export default function Dashboard() {
  const { weather, loading, error, fetchWeather } = useWeather();
  const {
    detectedSoil,
    soilLoading,
    soilError,
    soilData,
    fetchSoilType,
  } = useSoilType();

  const [manualSoil, setManualSoil] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  let soilType = manualSoil ? manualSoil : detectedSoil;

  function handleFetchWeather(city) {
    setManualSoil(null);
    fetchWeather(city);
  }

  useEffect(() => {
    if (weather && weather.lat && weather.lon) {
      fetchSoilType(weather.lat, weather.lon);
    }
  }, [weather]);

  function handleAnalyze() {
    if (!weather || !soilType) return;

    const crops = getCropSuggestions(weather, soilType);
    setRecommendations(crops);
    setHasSearched(true);
  }

  let canAnalyze = weather && soilType && !loading && !soilLoading;

  return (
    <div className="pt-20 px-6">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-3xl font-bold mb-2">Crop Dashboard</h1>
        <p className="mb-6 text-gray-400">
          Enter your city to get crop suggestions
        </p>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="flex flex-col gap-4">
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
              className="bg-green-400 text-black py-2 rounded"
            >
              {!weather
                ? "Search city first"
                : !soilType
                ? "Select soil"
                : "Analyze Crops"}
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
  );
}