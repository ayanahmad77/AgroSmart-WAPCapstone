import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Leaf, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const location = useLocation()

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">

        <Link to="/" className="navbar-logo">
          <div className="navbar-logo-box">
            <Leaf size={18} color="#0d1f1a" strokeWidth={2.5} />
          </div>

          <span className="navbar-logo-text">
            Agro<span className="gradient-text">Smart</span>
          </span>
        </Link>


        <div className="navbar-links">

          <Link
            to="/"
            className={`navbar-link ${location.pathname === '/' ? 'navbar-active' : ''}`}
          >
            Home

            {location.pathname === '/' && (
              <span className="navbar-line"></span>
            )}
          </Link>

          <Link
            to="/dashboard"
            className={`navbar-link ${location.pathname === '/dashboard' ? 'navbar-active' : ''}`}
          >
            Dashboard

            {location.pathname === '/dashboard' && (
              <span className="navbar-line"></span>
            )}
          </Link>

          <Link
            to="/about"
            className={`navbar-link ${location.pathname === '/about' ? 'navbar-active' : ''}`}
          >
            About

            {location.pathname === '/about' && (
              <span className="navbar-line"></span>
            )}
          </Link>

          <Link to="/dashboard" className="navbar-btn glow-btn">
            Get Started
          </Link>
        </div>

        {/* Mobile Button */}

        <button
          className="navbar-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="mobile-menu">

          <Link
            to="/"
            className={`mobile-link ${location.pathname === '/' ? 'mobile-active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>

          <Link
            to="/dashboard"
            className={`mobile-link ${location.pathname === '/dashboard' ? 'mobile-active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            Dashboard
          </Link>

          <Link
            to="/about"
            className={`mobile-link ${location.pathname === '/about' ? 'mobile-active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
        </div>
      )}
    </nav>
  )
}