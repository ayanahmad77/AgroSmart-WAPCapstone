import { AnimatePresence } from 'framer-motion'
import CropCard from './CropCard'
import { Sprout, AlertCircle } from 'lucide-react'

export default function CropRecommendations({ crops, hasSearched }) {
  if (!hasSearched) {
    return (
      <div
        className="glass-card rounded-2xl p-10 flex flex-col items-center justify-center text-center"
        style={{ border: '1px solid rgba(255,255,255,0.08)', minHeight: '300px' }}
      >
        <Sprout size={48} style={{ color: 'rgba(74,222,128,0.3)', marginBottom: '16px' }} />
        <h3 className="font-display font-bold text-xl mb-2" style={{ color: 'rgba(241,245,249,0.5)' }}>
          Ready to Analyze
        </h3>
        <p className="font-body text-sm" style={{ color: 'rgba(226,232,240,0.3)', maxWidth: '260px' }}>
          Search a city, select your soil type, then click Analyze to see crop recommendations.
        </p>
      </div>
    )
  }

  if (crops.length === 0) {
    return (
      <div
        className="glass-card rounded-2xl p-10 flex flex-col items-center justify-center text-center"
        style={{ border: '1px solid rgba(248,113,113,0.15)', minHeight: '300px' }}
      >
        <AlertCircle size={40} style={{ color: '#f87171', marginBottom: '16px' }} />
        <h3 className="font-display font-bold text-xl mb-2" style={{ color: '#f87171' }}>
          No Matches Found
        </h3>
        <p className="font-body text-sm" style={{ color: 'rgba(226,232,240,0.4)', maxWidth: '280px' }}>
          The current weather and soil conditions don't match our crop database. Try a different soil type or check a nearby city.
        </p>
      </div>
    )
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <h2 className="font-display font-bold text-xl" style={{ color: '#f1f5f9' }}>
          🌱 Recommended Crops
        </h2>
        <span
          className="font-body text-xs px-3 py-1 rounded-full"
          style={{ background: 'rgba(74,222,128,0.1)', border: '1px solid rgba(74,222,128,0.2)', color: '#4ade80' }}
        >
          {crops.length} crops found
        </span>
      </div>
      <AnimatePresence>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {crops.map((crop, i) => (
            <CropCard key={crop.name} crop={crop} index={i} />
          ))}
        </div>
      </AnimatePresence>
    </div>
  )
}