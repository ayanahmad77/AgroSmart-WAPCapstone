import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Home, AlertCircle } from 'lucide-react'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
}

export default function NotFound() {
  return (
    <motion.div
      className="page-wrapper pt-28 pb-20 px-6 flex items-center justify-center"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4 }}
      style={{ minHeight: '80vh' }}
    >
      <div className="text-center max-w-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <AlertCircle size={64} style={{ color: 'rgba(74,222,128,0.4)', margin: '0 auto 24px' }} />
        </motion.div>

        <motion.h1
          className="font-display font-extrabold mb-3"
          style={{ fontSize: 'clamp(4rem, 10vw, 8rem)', color: '#f1f5f9', lineHeight: 1 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          4<span className="gradient-text">0</span>4
        </motion.h1>

        <motion.h2
          className="font-display font-bold text-xl mb-3"
          style={{ color: 'rgba(241,245,249,0.7)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Page Not Found
        </motion.h2>

        <motion.p
          className="font-body text-sm mb-8"
          style={{ color: 'rgba(226,232,240,0.45)', lineHeight: 1.7 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          The page you're looking for doesn't exist or has been moved.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Link
            to="/"
            className="glow-btn inline-flex items-center gap-2 px-8 py-4 rounded-full font-body font-semibold text-base"
            style={{ color: '#0d1f1a' }}
          >
            <Home size={18} />
            Back to Home
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}
