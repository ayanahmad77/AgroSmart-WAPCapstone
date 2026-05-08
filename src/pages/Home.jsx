import MainSection from '../components/MainSection'
import { Leaf, CloudSun, BarChart3, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

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
    <div className="page-wrapper">

      <MainSection />

      <section className="home-section">

        <div className="home-container">

          <div className="home-top">

            <h2 className="home-title">
              How It <span className="gradient-text">Works</span>
            </h2>

            <p className="home-text">
              Three data points. Hundreds of combinations.
              One precise recommendation.
            </p>
          </div>

          <div className="home-grid">

            {features.map((feature, index) => (
              <div key={index} className="home-card glass-card">

                <div
                  className="home-icon"
                  style={{
                    background: `${feature.color}18`,
                    color: feature.color,
                  }}
                >
                  {feature.icon}
                </div>

                <h3 className="home-card-title">
                  {feature.title}
                </h3>

                <p className="home-card-text">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="home-button-wrap">

            <Link to="/dashboard" className="home-btn glow-btn">
              Try the Dashboard
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}