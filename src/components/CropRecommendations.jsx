import CropCard from './CropCard'
import { Sprout, AlertCircle } from 'lucide-react'

export default function CropRecommendations({ crops, hasSearched }) {
  if (!hasSearched) {
    return (
      <div className="recommend-box glass-card">

        <Sprout size={48} className="recommend-empty-icon" />

        <h3 className="recommend-empty-title">
          Ready to Analyze
        </h3>

        <p className="recommend-empty-text">
          Search a city, select your soil type, then click
          Analyze to see crop recommendations.
        </p>
      </div>
    )
  }

  if (crops.length === 0) {
    return (
      <div className="recommend-box recommend-error glass-card">

        <AlertCircle size={40} className="recommend-error-icon" />

        <h3 className="recommend-error-title">
          No Matches Found
        </h3>

        <p className="recommend-error-text">
          The current weather and soil conditions don't match
          our crop database. Try a different soil type or
          check a nearby city.
        </p>
      </div>
    )
  }

  return (
    <div>

      <div className="recommend-top">

        <h2 className="recommend-title">
          🌱 Recommended Crops
        </h2>

        <span className="recommend-count">
          {crops.length} crops found
        </span>
      </div>

      <div className="recommend-grid">

        {crops.map((crop) => (
          <CropCard key={crop.name} crop={crop} />
        ))}
      </div>
    </div>
  )
}