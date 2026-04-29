import { motion } from 'framer-motion'
import { Calendar, CheckCircle2 } from 'lucide-react'

export default function CropCard({ crop, index }) {
  const matchScore = crop._score || 0
  const scoreLabel = matchScore === 4 ? 'Perfect Match' : matchScore === 3 ? 'Good Match' : 'Possible'
  const scoreColor = matchScore === 4 ? '#4ade80' : matchScore === 3 ? '#fbbf24' : '#60a5fa'

  return (
    <motion.div
      className="crop-card glass-card rounded-2xl p-5 flex flex-col gap-3"
      style={{ border: '1px solid rgba(255,255,255,0.08)' }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="text-4xl">{crop.emoji}</div>
        <span
          className="text-xs font-body font-semibold px-3 py-1 rounded-full flex items-center gap-1"
          style={{
            background: `${scoreColor}18`,
            border: `1px solid ${scoreColor}40`,
            color: scoreColor,
          }}
        >
          <CheckCircle2 size={11} />
          {scoreLabel}
        </span>
      </div>

      {/* Name */}
      <h3 className="font-display font-bold text-lg" style={{ color: '#f1f5f9' }}>
        {crop.name}
      </h3>

      {/* Description */}
      <p className="font-body text-sm" style={{ color: 'rgba(226,232,240,0.6)', lineHeight: 1.6 }}>
        {crop.description}
      </p>

      {/* Season */}
      <div
        className="flex items-center gap-2 pt-3 mt-auto"
        style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
      >
        <Calendar size={13} style={{ color: crop.color || '#4ade80' }} />
        <span className="font-body text-xs" style={{ color: 'rgba(226,232,240,0.5)' }}>
          {crop.season}
        </span>
      </div>

      {/* Bottom accent bar */}
      <div
        className="h-0.5 rounded-full -mx-5 -mb-5 mt-1"
        style={{ background: `linear-gradient(90deg, ${crop.color || '#4ade80'}60, transparent)` }}
      />
    </motion.div>
  )
}