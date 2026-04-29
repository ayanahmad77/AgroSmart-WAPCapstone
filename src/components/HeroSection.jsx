import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Sprout, CloudSun, Leaf } from 'lucide-react'

const FloatingLeaf = ({ className, style }) => (
  <div className={`absolute pointer-events-none select-none ${className}`} style={style}>
    <Leaf size={32} style={{ color: 'rgba(74, 222, 128, 0.2)' }} />
  </div>
)

const words = ["Grow", "Smarter.", "Farm", "Better."]

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Floating decorative leaves */}
      <FloatingLeaf className="leaf-1 top-32 left-12" />
      <FloatingLeaf className="leaf-2 top-48 right-20" style={{ transform: 'rotate(45deg)' }} />
      <FloatingLeaf className="leaf-3 bottom-40 left-1/4" />
      <FloatingLeaf className="leaf-4 bottom-60 right-1/3" style={{ transform: 'rotate(-30deg)' }} />

      {/* Big decorative circle */}
      <div
        className="absolute pointer-events-none spin-slow"
        style={{
          width: '600px', height: '600px',
          border: '1px solid rgba(74,222,128,0.06)',
          borderRadius: '50%',
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          width: '400px', height: '400px',
          border: '1px solid rgba(45,212,191,0.05)',
          borderRadius: '50%',
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full glass-card"
          style={{ border: '1px solid rgba(74,222,128,0.2)' }}
        >
          <Sprout size={14} style={{ color: '#4ade80' }} />
          <span style={{ fontSize: '13px', color: '#4ade80', fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}>
            AI-Powered Crop Intelligence
          </span>
        </motion.div>

        {/* Headline */}
        <div className="overflow-hidden mb-6">
          <motion.h1
            className="font-display font-extrabold"
            style={{
              fontSize: 'clamp(3rem, 8vw, 6rem)',
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              color: '#f1f5f9',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            {words.map((word, i) => (
              <motion.span
                key={i}
                className={i % 2 !== 0 ? 'gradient-text' : ''}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                style={{ display: 'inline-block', marginRight: i < words.length - 1 ? '0.3em' : 0 }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
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
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-wrap gap-4 justify-center"
        >
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
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-wrap justify-center gap-12 mt-20 pt-12"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          {[
            { icon: <CloudSun size={20} />, value: 'Live', label: 'Weather Data' },
            { icon: <Leaf size={20} />, value: '20+', label: 'Crop Types' },
            { icon: <Sprout size={20} />, value: '6', label: 'Soil Profiles' },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <div style={{ color: '#4ade80' }}>{stat.icon}</div>
              <span className="font-display font-bold text-2xl" style={{ color: '#f1f5f9' }}>{stat.value}</span>
              <span className="font-body text-sm" style={{ color: 'rgba(226,232,240,0.5)' }}>{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}