import { Link } from 'react-router-dom'
import { Home, AlertCircle } from 'lucide-react'

export default function NotFound() {
  return (
    <div
      className="page-wrapper pt-28 pb-20 px-6 flex items-center justify-center"
      style={{ minHeight: '80vh' }}
    >
      <div className="text-center max-w-md">
        <div>
          <AlertCircle size={64} style={{ color: 'rgba(74,222,128,0.4)', margin: '0 auto 24px' }} />
        </div>

        <h1
          className="font-display font-extrabold mb-3"
          style={{ fontSize: 'clamp(4rem, 10vw, 8rem)', color: '#f1f5f9', lineHeight: 1 }}
        >
          4<span className="gradient-text">0</span>4
        </h1>

        <h2
          className="font-display font-bold text-xl mb-3"
          style={{ color: 'rgba(241,245,249,0.7)' }}
        >
          Page Not Found
        </h2>

        <p
          className="font-body text-sm mb-8"
          style={{ color: 'rgba(226,232,240,0.45)', lineHeight: 1.7 }}
        >
          The page you're looking for doesn't exist or has been moved.
        </p>

        <div>
          <Link
            to="/"
            className="glow-btn inline-flex items-center gap-2 px-8 py-4 rounded-full font-body font-semibold text-base"
            style={{ color: '#0d1f1a' }}
          >
            <Home size={18} />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
