import { Component } from 'react'
import { AlertTriangle, RefreshCw } from 'lucide-react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hasError: false,
    }
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    }
  }

  handleReload = () => {
    window.location.reload()
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-page">

          <div className="error-box glass-card">

            <AlertTriangle size={46} className="error-icon" />

            <h2 className="error-title">
              Something went wrong
            </h2>

            <p className="error-text">
              Please reload the page and try again.
            </p>

            <button
              onClick={this.handleReload}
              className="error-btn glow-btn"
            >
              <RefreshCw size={15} />
              Reload Page
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}