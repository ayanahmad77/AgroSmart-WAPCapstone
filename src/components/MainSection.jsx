import { Link } from 'react-router-dom'
import { ArrowRight, Sprout, CloudSun, Leaf } from 'lucide-react'

function FloatingLeaf({ className, style }) {
  return (
    <div className={`floating-leaf ${className}`} style={style}>
      <Leaf size={32} />
    </div>
  )
}

export default function MainSection() {
  return (
    <section className="main-section">

      <FloatingLeaf className="leaf-1" style={{ top: '130px', left: '50px' }} />

      <FloatingLeaf
        className="leaf-2"
        style={{ top: '200px', right: '80px', transform: 'rotate(45deg)' }}
      />

      <FloatingLeaf
        className="leaf-3"
        style={{ bottom: '160px', left: '25%' }}
      />

      <FloatingLeaf
        className="leaf-4"
        style={{ bottom: '240px', right: '33%', transform: 'rotate(-30deg)' }}
      />

      <div className="main-circle-large spin-slow"></div>
      <div className="main-circle-small"></div>

      <div className="main-container">

        <div className="main-badge glass-card">
          <Sprout size={14} color="#4ade80" />

          <span className="main-badge-text">
            AI-Powered Crop Intelligence
          </span>
        </div>

        <h1 className="main-title">
          <span>Grow</span>
          <span className="gradient-text">Smarter</span>
          <span>Farm</span>
          <span className="gradient-text">Better</span>
        </h1>

        <p className="main-text">
          Enter your location and soil type. Get real-time weather data and
          intelligent crop recommendations tailored to your field conditions.
        </p>

        <div className="main-buttons">

          <Link
            to="/dashboard"
            className="main-btn main-btn-primary glow-btn pulse-glow"
          >
            Analyze My Crops
            <ArrowRight size={18} />
          </Link>

          <Link
            to="/about"
            className="main-btn main-btn-secondary glass-card"
          >
            Learn More
          </Link>
        </div>

        <div className="main-stats">

          <div className="main-stat">
            <div className="main-stat-icon">
              <CloudSun size={20} />
            </div>

            <span className="main-stat-value">Live</span>

            <span className="main-stat-label">
              Weather Data
            </span>
          </div>

          <div className="main-stat">
            <div className="main-stat-icon">
              <Leaf size={20} />
            </div>

            <span className="main-stat-value">20+</span>

            <span className="main-stat-label">
              Crop Types
            </span>
          </div>

          <div className="main-stat">
            <div className="main-stat-icon">
              <Sprout size={20} />
            </div>

            <span className="main-stat-value">6</span>

            <span className="main-stat-label">
              Soil Profiles
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}