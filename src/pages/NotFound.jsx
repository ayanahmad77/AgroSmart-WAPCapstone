import { Link } from 'react-router-dom'
import { Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="notfound-page">

      <div className="notfound-box">

        <h1 className="notfound-title">
          4<span className="gradient-text">0</span>4
        </h1>

        <h2 className="notfound-heading">
          Page Not Found
        </h2>

        <p className="notfound-text">
          The page you are looking for does not exist.
        </p>

        <Link to="/" className="notfound-btn glow-btn">
          <Home size={18} />
          Back Home
        </Link>
      </div>
    </div>
  )
}