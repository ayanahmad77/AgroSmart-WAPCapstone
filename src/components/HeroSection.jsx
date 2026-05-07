import { Link } from 'react-router-dom'
import { ArrowRight, Sprout, CloudSun, Leaf } from 'lucide-react'

const FloatingLeaf = ({ className, style }) => (
  <div className={`absolute pointer-events-none select-none ${className}`} style={style}>
    <Leaf size={32} style={{ color: 'rgba(74, 222, 128, 0.2)' }} />
  </div>
)

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <FloatingLeaf className="leaf-1 top-32 left-12" />
      <FloatingLeaf className="leaf-2 top-48 right-20" style={{ transform: 'rotate(45deg)' }} />
      <FloatingLeaf className="leaf-3 bottom-40 left-1/4" />
      <FloatingLeaf className="leaf-4 bottom-60 right-1/3" style={{ transform: 'rotate(-30deg)' }} />

      <div
        className="absolute pointer-events-none spin-slow"
        style={{
          width: '600px', height: '600px',
          border: '1px solid rgba(74,222,128,0.06)',
          borderRadius: '50%',
          top: '50%', left: '50%',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          width: '400px', height: '400px',
          border: '1px solid rgba(45,212,191,0.05)',
          borderRadius: '50%',
          top: '25%', left: '36%',
        }}
      />

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <div
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full glass-card"
          style={{ border: '1px solid rgba(74,222,128,0.2)' }}
        >
          <Sprout size={14} style={{ color: '#4ade80' }} />
          <span style={{ fontSize: '13px', color: '#4ade80', fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}>
            AI-Powered Crop Intelligence
          </span>
        </div>

        <div className="overflow-hidden mb-6">
          <h1
            className="font-display font-extrabold"
            style={{
              fontSize: "clamp(3rem, 8vw, 6rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: "#f1f5f9",
            }}
          >
            <span style={{ display: "inline-block", marginRight: "0.3em" }}>
              Grow
            </span>

            <span
              className="gradient-text"
              style={{ display: "inline-block", marginRight: "0.3em" }}
            >
              Smarter
            </span>

            <span style={{ display: "inline-block", marginRight: "0.3em" }}>
              Farm
            </span>

            <span
              className="gradient-text"
              style={{ display: "inline-block" }}
            >
              Better
            </span>
          </h1>
        </div>

        <p
          className="font-body mb-10 mx-auto"
          style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
            color: 'rgba(226,232,240,0.6)',
            maxWidth: '560px',
            lineHeight: 1.7,
          }}
        >
          Enter your location and soil type. Get real-time weather data and intelligent
          crop recommendations tailored to your field conditions.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            to="/dashboard"
            className="glow-btn pulse-glow flex items-center gap-2 px-8 py-4 rounded-full font-body font-semibold text-base"
            style={{ color: '#0d1f1a' }}
          >
            Analyze My Crops
            <ArrowRight size={18} />
          </Link>
          <Link
            to="/about"
            className="flex items-center gap-2 px-8 py-4 rounded-full font-body font-medium text-base glass-card transition-all duration-300 hover:border-green-400"
            style={{ color: 'rgba(226,232,240,0.8)', fontSize: '1rem' }}
          >
            Learn More
          </Link>
        </div>

        <div
          className="flex flex-wrap justify-center gap-12 mt-20 pt-12"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="flex flex-col items-center gap-1">
            <div style={{ color: "#4ade80" }}>
              <CloudSun size={20} />
            </div>

            <span
              className="font-display font-bold text-2xl"
              style={{ color: "#f1f5f9" }}
            >
              Live
            </span>

            <span
              className="font-body text-sm"
              style={{ color: "rgba(226,232,240,0.5)" }}
            >
              Weather Data
            </span>
          </div>

          <div className="flex flex-col items-center gap-1">
            <div style={{ color: "#4ade80" }}>
              <Leaf size={20} />
            </div>

            <span
              className="font-display font-bold text-2xl"
              style={{ color: "#f1f5f9" }}
            >
              20+
            </span>

            <span
              className="font-body text-sm"
              style={{ color: "rgba(226,232,240,0.5)" }}
            >
              Crop Types
            </span>
          </div>

          <div className="flex flex-col items-center gap-1">
            <div style={{ color: "#4ade80" }}>
              <Sprout size={20} />
            </div>

            <span
              className="font-display font-bold text-2xl"
              style={{ color: "#f1f5f9" }}
            >
              6
            </span>

            <span
              className="font-body text-sm"
              style={{ color: "rgba(226,232,240,0.5)" }}
            >
              Soil Profiles
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}