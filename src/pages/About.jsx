import { motion } from 'framer-motion'
import { Leaf, Code2, Globe, Database } from 'lucide-react'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
}

const techStack = [
  { icon: <Code2 size={20} />, name: 'React.js + Vite', desc: 'Fast component-based UI', color: '#60a5fa' },
  { icon: <Globe size={20} />, name: 'OpenWeatherMap API', desc: 'Real-time weather data', color: '#4ade80' },
  { icon: <Database size={20} />, name: 'Framer Motion', desc: 'Smooth animations', color: '#a78bfa' },
  { icon: <Leaf size={20} />, name: 'Tailwind CSS', desc: 'Utility-first styling', color: '#fbbf24' },
]

export default function About() {
  return (
    <motion.div
      className="page-wrapper pt-28 pb-20 px-6"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4 }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1
            className="font-display font-extrabold mb-4"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#f1f5f9', letterSpacing: '-0.02em' }}
          >
            About <span className="gradient-text">AgroSmart</span>
          </h1>
          <p className="font-body text-lg" style={{ color: 'rgba(226,232,240,0.6)', lineHeight: 1.7 }}>
            A capstone project built to help farmers make smarter decisions using
            environmental data and intelligent crop matching algorithms.
          </p>
        </motion.div>

        {/* Mission card */}
        <motion.div
          className="glass-card rounded-2xl p-8 mb-8"
          style={{ border: '1px solid rgba(74,222,128,0.15)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="font-display font-bold text-2xl mb-4" style={{ color: '#f1f5f9' }}>
            🎯 Project Objective
          </h2>
          <p className="font-body" style={{ color: 'rgba(226,232,240,0.65)', lineHeight: 1.8 }}>
            AgroSmart was built to provide smallholder and amateur farmers with a digital tool
            that removes the guesswork from crop selection. By combining real-time weather data
            with soil characteristics, the platform generates context-aware recommendations,
            helping reduce crop failure risk and improve seasonal productivity.
          </p>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="font-display font-bold text-2xl mb-5" style={{ color: '#f1f5f9' }}>
            ⚙️ Tech Stack
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {techStack.map((tech, i) => (
              <motion.div
                key={i}
                className="glass-card flex items-center gap-4 p-5 rounded-2xl"
                style={{ border: '1px solid rgba(255,255,255,0.07)' }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                whileHover={{ y: -3 }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${tech.color}18`, color: tech.color }}
                >
                  {tech.icon}
                </div>
                <div>
                  <div className="font-display font-bold text-base" style={{ color: '#f1f5f9' }}>{tech.name}</div>
                  <div className="font-body text-sm" style={{ color: 'rgba(226,232,240,0.5)' }}>{tech.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}