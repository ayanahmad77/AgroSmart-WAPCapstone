import { Calendar, CheckCircle2 } from 'lucide-react'

export default function CropCard({ crop }) {
  const matchScore = crop._score || 0

  const scoreLabel = matchScore === 4
    ? 'Perfect Match'
    : matchScore === 3
    ? 'Good Match'
    : 'Possible'

  const scoreColor = matchScore === 4
    ? '#4ade80'
    : matchScore === 3
    ? '#fbbf24'
    : '#60a5fa'

  return (
    <div className="crop-box crop-card glass-card">

      <div className="crop-top">

        <div className="crop-emoji">
          {crop.emoji}
        </div>

        <span
          className="crop-badge"
          style={{
            background: `${scoreColor}18`,
            borderColor: `${scoreColor}40`,
            color: scoreColor,
          }}
        >
          <CheckCircle2 size={11} />
          {scoreLabel}
        </span>
      </div>

      <h3 className="crop-title">
        {crop.name}
      </h3>

      <p className="crop-text">
        {crop.description}
      </p>

      <div className="crop-season">

        <Calendar size={13} style={{ color: crop.color || '#4ade80' }} />

        <span className="crop-season-text">
          {crop.season}
        </span>
      </div>

      <div
        className="crop-line"
        style={{
          background: `linear-gradient(90deg,${crop.color || '#4ade80'}60,transparent)`
        }}
      ></div>
    </div>
  )
}