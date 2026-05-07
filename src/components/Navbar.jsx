import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Leaf, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])


  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? 'rgba(13, 31, 26, 0.92)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : 'none',
        boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.3)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
            style={{ background: 'linear-gradient(135deg, #4ade80, #2dd4bf)' }}
          >
            <Leaf size={18} color="#0d1f1a" strokeWidth={2.5} />
          </div>
          <span
            className="font-display font-bold text-xl"
            style={{ color: '#e2e8f0', letterSpacing: '-0.02em' }}
          >
            Agro<span className="gradient-text">Smart</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="relative font-body text-sm font-medium transition-colors duration-200"
            style={{
              color:
                location.pathname === "/"
                  ? "#4ade80"
                  : "rgba(226,232,240,0.7)",
            }}
          >
            Home

            {location.pathname === "/" && (
              <span
                className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                style={{
                  background: "linear-gradient(90deg, #4ade80, #2dd4bf)",
                }}
              />
            )}
          </Link>

          <Link
            to="/dashboard"
            className="relative font-body text-sm font-medium transition-colors duration-200"
            style={{
              color:
                location.pathname === "/dashboard"
                  ? "#4ade80"
                  : "rgba(226,232,240,0.7)",
            }}
          >
            Dashboard

            {location.pathname === "/dashboard" && (
              <span
                className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                style={{
                  background: "linear-gradient(90deg, #4ade80, #2dd4bf)",
                }}
              />
            )}
          </Link>

          <Link
            to="/about"
            className="relative font-body text-sm font-medium transition-colors duration-200"
            style={{
              color:
                location.pathname === "/about"
                  ? "#4ade80"
                  : "rgba(226,232,240,0.7)",
            }}
          >
            About

            {location.pathname === "/about" && (
              <span
                className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                style={{
                  background: "linear-gradient(90deg, #4ade80, #2dd4bf)",
                }}
              />
            )}
          </Link>

          <Link
            to="/dashboard"
            className="glow-btn px-5 py-2 rounded-full text-sm font-semibold font-body"
            style={{ color: "#0d1f1a" }}
          >
            Get Started
          </Link>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6 flex flex-col gap-4"
          style={{
            background: "rgba(13,31,26,0.97)",
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <Link
            to="/"
            className="text-sm font-medium py-2"
            style={{
              color:
                location.pathname === "/"
                  ? "#4ade80"
                  : "rgba(226,232,240,0.7)",
            }}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>

          <Link
            to="/dashboard"
            className="text-sm font-medium py-2"
            style={{
              color:
                location.pathname === "/dashboard"
                  ? "#4ade80"
                  : "rgba(226,232,240,0.7)",
            }}
            onClick={() => setMenuOpen(false)}
          >
            Dashboard
          </Link>

          <Link
            to="/about"
            className="text-sm font-medium py-2"
            style={{
              color:
                location.pathname === "/about"
                  ? "#4ade80"
                  : "rgba(226,232,240,0.7)",
            }}
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
        </div>
      )}
    </nav>
  )
}