import { Leaf, Code2, Globe, Database } from 'lucide-react'

const techStack = [
  {
    icon: <Code2 size={20} />,
    name: 'React.js + Vite',
    desc: 'Fast component-based UI',
    color: '#60a5fa',
  },
  {
    icon: <Globe size={20} />,
    name: 'OpenWeatherMap API',
    desc: 'Real-time weather data',
    color: '#4ade80',
  },
  {
    icon: <Database size={20} />,
    name: 'Tailwind CSS',
    desc: 'Utility-first styling',
    color: '#a78bfa',
  },
  {
    icon: <Leaf size={20} />,
    name: 'Lucide Icons',
    desc: 'Clean icon library',
    color: '#fbbf24',
  },
]

export default function About() {
  return (
    <div className="about-page">

      <div className="about-container">

        <div className="about-top">

          <h1 className="about-title">
            About <span className="gradient-text">AgroSmart</span>
          </h1>

          <p className="about-text">
            A capstone project built to help farmers make
            smarter decisions using environmental data and
            intelligent crop matching algorithms.
          </p>
        </div>

        <div className="about-objective glass-card">

          <h2 className="about-section-title">
            🎯 Project Objective
          </h2>

          <p className="about-objective-text">
            AgroSmart was built to provide smallholder and
            amateur farmers with a digital tool that removes
            the guesswork from crop selection. By combining
            real-time weather data with soil characteristics,
            the platform generates context-aware
            recommendations, helping reduce crop failure risk
            and improve seasonal productivity.
          </p>
        </div>

        <div>

          <h2 className="about-section-title about-stack-title">
            ⚙️ Tech Stack
          </h2>

          <div className="about-grid">

            {techStack.map((tech, index) => (
              <div key={index} className="about-card glass-card">

                <div
                  className="about-icon"
                  style={{
                    background: `${tech.color}18`,
                    color: tech.color,
                  }}
                >
                  {tech.icon}
                </div>

                <div>

                  <div className="about-card-title">
                    {tech.name}
                  </div>

                  <div className="about-card-text">
                    {tech.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}