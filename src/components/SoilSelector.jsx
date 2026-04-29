import { motion } from 'framer-motion'
import { Loader, Sparkles, AlertCircle } from 'lucide-react'

const soils = [
  { id: 'loamy', label: 'Loamy', emoji: '🟫', desc: 'Fertile & well-drained', color: '#a78bfa' },
  { id: 'clay', label: 'Clay', emoji: '🧱', desc: 'Heavy & water-retaining', color: '#f87171' },
  { id: 'sandy', label: 'Sandy', emoji: '🏜️', desc: 'Light & fast-draining', color: '#fbbf24' },
  { id: 'silty', label: 'Silty', emoji: '💧', desc: 'Smooth & moisture-rich', color: '#60a5fa' },
  { id: 'peaty', label: 'Peaty', emoji: '🌿', desc: 'Dark & organic-rich', color: '#4ade80' },
  { id: 'chalky', label: 'Chalky', emoji: '⬜', desc: 'Alkaline & stony', color: '#e2e8f0' },
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
    <div className="glass-card rounded-2xl p-6" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
      <h2 className="font-display font-bold text-xl mb-2" style={{ color: '#f1f5f9' }}>
        🪨 Soil Type
      </h2>

      {/* Auto-detection status */}
      {soilLoading && (
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 mb-4 p-3 rounded-xl"
          style={{ background: 'rgba(74,222,128,0.08)', border: '1px solid rgba(74,222,128,0.15)' }}
        >
          <Loader size={14} className="animate-spin" style={{ color: '#4ade80' }} />
          <span className="font-body text-xs" style={{ color: '#4ade80' }}>
            Detecting soil type from location...
          </span>
        </motion.div>
      )}

      {detectedSoil && !soilLoading && (
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 p-3 rounded-xl"
          style={{ background: 'rgba(74,222,128,0.08)', border: '1px solid rgba(74,222,128,0.15)' }}
        >
          <div className="flex items-center gap-2 mb-1">
            <Sparkles size={13} style={{ color: '#4ade80' }} />
            <span className="font-body text-xs font-semibold" style={{ color: '#4ade80' }}>
              Auto-detected: {soils.find(s => s.id === detectedSoil)?.label || detectedSoil}
            </span>
          </div>
          {soilData && (
            <div className="flex flex-wrap gap-x-3 gap-y-0.5 mt-1">
              {soilData.clay != null && (
                <span className="font-body text-xs" style={{ color: 'rgba(226,232,240,0.45)' }}>
                  Clay: {soilData.clay}%
                </span>
              )}
              {soilData.sand != null && (
                <span className="font-body text-xs" style={{ color: 'rgba(226,232,240,0.45)' }}>
                  Sand: {soilData.sand}%
                </span>
              )}
              {soilData.silt != null && (
                <span className="font-body text-xs" style={{ color: 'rgba(226,232,240,0.45)' }}>
                  Silt: {soilData.silt}%
                </span>
              )}
              {soilData.ph != null && (
                <span className="font-body text-xs" style={{ color: 'rgba(226,232,240,0.45)' }}>
                  pH: {soilData.ph}
                </span>
              )}
            </div>
          )}
          <p className="font-body text-xs mt-1.5" style={{ color: 'rgba(226,232,240,0.3)' }}>
            You can override by selecting a different soil below.
          </p>
        </motion.div>
      )}

      {soilError && !soilLoading && (
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-start gap-2 mb-4 p-3 rounded-xl"
          style={{ background: 'rgba(251,191,36,0.08)', border: '1px solid rgba(251,191,36,0.15)' }}
        >
          <AlertCircle size={14} className="flex-shrink-0 mt-0.5" style={{ color: '#fbbf24' }} />
          <span className="font-body text-xs" style={{ color: '#fbbf24' }}>
            {soilError}
          </span>
        </motion.div>
      )}

      <div className="grid grid-cols-2 gap-3">
        {soils.map((soil, i) => (
          <motion.button
            key={soil.id}
            onClick={() => onSelect(soil.id)}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06, duration: 0.4 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className={`p-4 rounded-xl text-left transition-all duration-200 relative ${selected === soil.id ? 'soil-selected' : ''}`}
            style={{
              background: selected === soil.id
                ? `rgba(${soilColorMap[soil.id]}, 0.1)`
                : 'rgba(255,255,255,0.04)',
              border: `1px solid ${selected === soil.id ? soil.color : 'rgba(255,255,255,0.08)'}`,
              cursor: 'pointer',
            }}
          >
            {/* Auto-detected badge */}
            {detectedSoil === soil.id && (
              <span
                className="absolute -top-2 -right-2 text-xs font-body font-semibold px-2 py-0.5 rounded-full flex items-center gap-1"
                style={{
                  background: 'linear-gradient(135deg, #4ade80, #2dd4bf)',
                  color: '#0d1f1a',
                  fontSize: '10px',
                }}
              >
                <Sparkles size={9} />
                Auto
              </span>
            )}
            <div className="text-2xl mb-1">{soil.emoji}</div>
            <div className="font-display font-semibold text-sm" style={{ color: '#f1f5f9' }}>{soil.label}</div>
            <div className="font-body text-xs mt-0.5" style={{ color: 'rgba(226,232,240,0.5)' }}>{soil.desc}</div>
          </motion.button>
        ))}
      </div>
    </div>
  )
}