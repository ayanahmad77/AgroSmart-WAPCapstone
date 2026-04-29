import { motion } from 'framer-motion'
import HeroSection from '../components/HeroSection'
import { Leaf, CloudSun, BarChart3, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
}

const features = [
  {
    icon: <CloudSun size={28} />,
    color: '#60a5fa',
    title: 'Live Weather Data',
    desc: 'Fetches real-time temperature, humidity, and conditions from OpenWeatherMap for any city worldwide.',
  },
  {
    icon: <Leaf size={28} />,
    color: '#4ade80',
    title: 'Soil Analysis',
    desc: 'Select from 6 soil profiles — loamy, clay, sandy, silty, peaty, or chalky — for precise recommendations.',
  },
  {
    icon: <BarChart3 size={28} />,
    color: '#fbbf24',
    title: 'Smart Crop Matching',
    desc: 'Rule-based logic cross-references weather + soil to suggest the best crops with match confidence scores.',
  },
]

export default function Home() {
  return (
    <motion.div
      className="page-wrapper"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4 }}
    >
      <HeroSection />

      {/* Features Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="font-display font-bold mb-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#f1f5f9' }}
            >
              How It <span className="gradient-text">Works</span>
            </h2>
            <p className="font-body" style={{ color: 'rgba(226,232,240,0.5)', maxWidth: '480px', margin: '0 auto' }}>
              Three data points. Hundreds of combinations. One precise recommendation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={i}
                className="glass-card rounded-2xl p-7"
                style={{ border: '1px solid rgba(255,255,255,0.07)' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: `${f.color}18`, color: f.color }}
                >
                  {f.icon}
                </div>
                <h3 className="font-display font-bold text-lg mb-3" style={{ color: '#f1f5f9' }}>
                  {f.title}
                </h3>
                <p className="font-body text-sm" style={{ color: 'rgba(226,232,240,0.55)', lineHeight: 1.7 }}>
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              to="/dashboard"
              className="glow-btn inline-flex items-center gap-2 px-8 py-4 rounded-full font-body font-semibold text-base"
              style={{ color: '#0d1f1a' }}
            >
              Try the Dashboard <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}