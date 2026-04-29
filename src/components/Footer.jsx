import { Leaf } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer
      className="mt-20 py-10 px-6"
      style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #4ade80, #2dd4bf)' }}
          >
            <Leaf size={14} color="#0d1f1a" />
          </div>
          <span className="font-display font-bold text-base" style={{ color: '#e2e8f0' }}>
            AgroSmart
          </span>
        </div>
        <p className="font-body text-sm" style={{ color: 'rgba(226,232,240,0.35)' }}>
          Built with ❤️ as a capstone project — Helping farmers grow smarter.
        </p>
        <div className="flex gap-6">
          {['/', '/dashboard', '/about'].map((path, i) => (
            <Link
              key={path}
              to={path}
              className="font-body text-sm transition-colors duration-200 hover:text-green-400"
              style={{ color: 'rgba(226,232,240,0.4)' }}
            >
              {['Home', 'Dashboard', 'About'][i]}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}