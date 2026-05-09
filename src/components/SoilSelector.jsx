import { Loader, Sparkles, AlertCircle } from 'lucide-react'

const soils = [
  {
    id: 'loamy',
    label: 'Loamy',
    emoji: '🟫',
    desc: 'Fertile & well-drained',
    color: '#a78bfa',
  },
  {
    id: 'clay',
    label: 'Clay',
    emoji: '🧱',
    desc: 'Heavy & water-retaining',
    color: '#f87171',
  },
  {
    id: 'sandy',
    label: 'Sandy',
    emoji: '🏜️',
    desc: 'Light & fast-draining',
    color: '#fbbf24',
  },
  {
    id: 'silty',
    label: 'Silty',
    emoji: '💧',
    desc: 'Smooth & moisture-rich',
    color: '#60a5fa',
  },
  {
    id: 'peaty',
    label: 'Peaty',
    emoji: '🌿',
    desc: 'Dark & organic-rich',
    color: '#4ade80',
  },
  {
    id: 'chalky',
    label: 'Chalky',
    emoji: '⬜',
    desc: 'Alkaline & stony',
    color: '#e2e8f0',
  },
]

const soilColorMap = {
  loamy: '167,139,250',
  clay: '248,113,113',
  sandy: '251,191,36',
  silty: '96,165,250',
  peaty: '74,222,128',
  chalky: '226,232,240',
}

export default function SoilSelector({ selected, onSelect, detectedSoil, soilLoading, soilError, soilData }) {
  return (
    <div className="soil-card glass-card">

      <h2 className="soil-title">
        🪨 Soil Type
      </h2>

      
      
      <div className="soil-grid">

        {soils.map((soil) => (
          <button
            key={soil.id}
            onClick={() => onSelect(soil.id)}
            className={`soil-option ${selected === soil.id ? 'soil-selected' : ''}`}
            style={{
              background: selected === soil.id
                ? `rgba(${soilColorMap[soil.id]}, 0.1)`
                : 'rgba(255,255,255,0.04)',

              borderColor: selected === soil.id
                ? soil.color
                : 'rgba(255,255,255,0.08)',
            }}
          >

            

            <div className="soil-emoji">
              {soil.emoji}
            </div>

            <div className="soil-name">
              {soil.label}
            </div>

            <div className="soil-desc">
              {soil.desc}
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}