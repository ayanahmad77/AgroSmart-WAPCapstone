import { Leaf } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-logo">
          <div className="footer-logo-box">
            <Leaf size={14} color="#0d1f1a" />
          </div>

          <span className="footer-logo-text">
            AgroSmart
          </span>
        </div>

        <div className="footer-links">

          <Link to="/" className="footer-link">
            Home
          </Link>

          <Link to="/dashboard" className="footer-link">
            Dashboard
          </Link>

          <Link to="/about" className="footer-link">
            About
          </Link>
        </div>
      </div>
    </footer>
  )
}