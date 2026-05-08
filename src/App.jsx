import { BrowserRouter, Routes, Route } from 'react-router-dom'

import ErrorBoundary from './components/ErrorBoundary'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import NotFound from './pages/NotFound'

import './index.css'

export default function App() {
  return (
    <BrowserRouter>

      <ErrorBoundary>

        <Navbar />

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/about" element={<About />} />

          <Route path="*" element={<NotFound />} />

        </Routes>

        <Footer />

      </ErrorBoundary>

    </BrowserRouter>
  )
}