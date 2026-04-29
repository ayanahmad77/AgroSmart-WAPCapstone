import { Component } from 'react'
import { AlertTriangle, RefreshCw } from 'lucide-react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  handleReload = () => {
    window.location.reload()
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null })
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          className="min-h-screen flex items-center justify-center px-6"
          style={{ background: 'var(--bg-dark)' }}
        >
          <div className="glass-card rounded-2xl p-10 text-center max-w-md" style={{ border: '1px solid rgba(248,113,113,0.2)' }}>
            <AlertTriangle size={48} style={{ color: '#f87171', margin: '0 auto 16px' }} />
            <h2
              className="font-display font-bold text-2xl mb-3"
              style={{ color: '#f1f5f9' }}
            >
              Something went wrong
            </h2>
            <p
              className="font-body text-sm mb-6"
              style={{ color: 'rgba(226,232,240,0.5)', lineHeight: 1.7 }}
            >
              An unexpected error occurred. You can try reloading the page or going back.
            </p>
            <div className="flex gap-3 justify-center">
              <button
                onClick={this.handleReset}
                className="px-6 py-3 rounded-xl font-body font-semibold text-sm transition-all duration-200"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: '#e2e8f0',
                  cursor: 'pointer',
                }}
              >
                Try Again
              </button>
              <button
                onClick={this.handleReload}
                className="px-6 py-3 rounded-xl font-body font-semibold text-sm flex items-center gap-2 transition-all duration-200"
                style={{
                  background: 'linear-gradient(135deg, #4ade80, #2dd4bf)',
                  color: '#0d1f1a',
                  cursor: 'pointer',
                }}
              >
                <RefreshCw size={14} />
                Reload Page
              </button>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
