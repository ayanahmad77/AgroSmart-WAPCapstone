# 🌱 AgroSmart — AI-Powered Crop Recommendation System

> **Capstone Project** — A smart farming web application that combines real-time weather data, satellite-based soil analysis, and intelligent crop matching to help farmers make data-driven planting decisions.

---

## 🎯 Project Objective

AgroSmart was built to provide smallholder and amateur farmers with a digital tool that removes the guesswork from crop selection. By combining real-time weather data with soil characteristics, the platform generates context-aware crop recommendations — helping reduce crop failure risk and improve seasonal productivity.

---

## ✨ Key Features

### 🌤 Live Weather Integration
- Fetches **real-time weather data** from the [OpenWeatherMap API](https://openweathermap.org/api)
- Displays temperature, humidity, wind speed, pressure, visibility, and weather conditions
- Supports any city worldwide with instant search

### 🪨 Automatic Soil Detection (via Satellite Data)
- Uses the **[ISRIC SoilGrids API](https://rest.isric.org/soilgrids/v2.0/docs)** — global 250m resolution soil data from satellite imagery
- Automatically fetches clay, sand, silt, organic carbon, and pH composition based on the city's GPS coordinates
- Classifies soil into **6 types** using a simplified USDA Soil Texture Triangle:

| Priority | Condition | Soil Type |
|----------|-----------|-----------|
| 1 | Organic carbon > 30% | **Peaty** 🌿 |
| 2 | pH > 7.5 + sandy texture | **Chalky** ⬜ |
| 3 | Clay ≥ 40% | **Clay** 🧱 |
| 4 | Sand ≥ 70% | **Sandy** 🏜️ |
| 5 | Silt ≥ 50% | **Silty** 💧 |
| 6 | Balanced composition | **Loamy** 🟫 |

- Falls back to **manual selection** for urban areas where satellite data is unavailable
- Users can always **override** the auto-detected soil type

### 🌾 Smart Crop Matching
- **20+ crop profiles** with temperature ranges, humidity thresholds, soil compatibility, and weather condition tags
- Rule-based engine cross-references weather + soil data to generate ranked recommendations
- Each crop displays a **match confidence score** (Perfect / Good / Possible)
- Covers major Indian and global crops: Rice, Wheat, Maize, Sugarcane, Cotton, Potato, Tomato, Blueberry, Spinach, Beetroot, and more

### 🎨 Premium Dark UI
- **Glassmorphism** design with translucent cards and backdrop blur
- Smooth **Framer Motion** page transitions and micro-animations
- Custom animated floating leaves, pulse glow effects, and hover interactions
- **Responsive** design — works seamlessly on mobile, tablet, and desktop
- Custom typography using **Syne** (display) and **DM Sans** (body) from Google Fonts

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 19** | Component-based UI framework |
| **Vite 8** | Lightning-fast build tool and dev server |
| **Tailwind CSS 3** | Utility-first styling |
| **Framer Motion** | Smooth animations and page transitions |
| **Axios** | HTTP client for API requests |
| **React Router v7** | Client-side routing with animated transitions |
| **Lucide React** | Beautiful, consistent icon set |
| **OpenWeatherMap API** | Real-time weather data |
| **ISRIC SoilGrids API** | Satellite-based soil composition data |

---

## 📁 Project Structure

```
agrosmart/
├── public/
│   ├── favicon.svg
│   ├── icons.svg
│   └── _redirects              # Netlify SPA routing
├── src/
│   ├── components/
│   │   ├── CropCard.jsx        # Individual crop recommendation card
│   │   ├── CropRecommendations.jsx  # Crop results grid
│   │   ├── ErrorBoundary.jsx   # React error boundary (crash recovery)
│   │   ├── Footer.jsx          # Site footer
│   │   ├── HeroSection.jsx     # Landing page hero with animations
│   │   ├── Navbar.jsx          # Responsive navigation bar
│   │   ├── SoilSelector.jsx    # Soil type picker with auto-detection
│   │   └── WeatherCard.jsx     # Weather search and display
│   ├── data/
│   │   └── cropRules.js        # 20 crop profiles with matching rules
│   ├── hooks/
│   │   ├── useWeather.js       # Weather API integration hook
│   │   └── useSoilType.js      # SoilGrids API + soil classification hook
│   ├── pages/
│   │   ├── About.jsx           # About page with tech stack info
│   │   ├── Dashboard.jsx       # Main dashboard (weather + soil + crops)
│   │   ├── Home.jsx            # Landing page
│   │   └── NotFound.jsx        # 404 error page
│   ├── utils/
│   │   └── getCropSuggestions.js  # Crop matching algorithm
│   ├── App.jsx                 # Root component with routing
│   ├── App.css                 # Vite default styles (unused)
│   ├── index.css               # Global styles, animations, glass utilities
│   └── main.jsx                # React entry point
├── .env                        # API keys (gitignored)
├── .gitignore
├── index.html                  # HTML entry with SEO meta tags
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vercel.json                 # Vercel SPA routing
├── vite.config.js
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18+ and **npm** v9+
- An **OpenWeatherMap API key** — [Get one free here](https://openweathermap.org/appid)

### Installation

```bash
# Clone the repository
git clone https://github.com/ayanahmad77/AgroSmart-WAPCapstone.git
cd AgroSmart-WAPCapstone

# Install dependencies
npm install

# Create environment file
echo "VITE_WEATHER_API_KEY=your_api_key_here" > .env

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build    # Output in /dist
npm run preview  # Preview production build locally
```

---

## 📖 How to Use

1. **Open the Dashboard** — Click "Get Started" or navigate to `/dashboard`
2. **Search a City** — Type any city name (e.g., "Amritsar") and click Search
3. **Weather loads** — Temperature, humidity, wind, and conditions are displayed
4. **Soil auto-detects** — The app fetches satellite soil data and auto-selects the soil type with composition percentages
5. **Override if needed** — Click any soil card to manually change the selection
6. **Analyze** — Click the green "Analyze Crops" button
7. **View Recommendations** — Crop cards appear ranked by match confidence (Perfect → Good → Possible)

> **Tip**: For best soil detection results, search for **rural/agricultural areas** rather than dense city centers. Urban areas may not have satellite soil data available.

---

## 🔒 Security & Stability

The codebase has been audited for vulnerabilities and hardened with:

- ✅ **Defensive API parsing** — Optional chaining prevents crashes from malformed responses
- ✅ **React Error Boundary** — Catches render errors and shows recovery UI instead of white screen
- ✅ **404 catch-all route** — Unknown URLs show a styled "Not Found" page
- ✅ **Input validation** — Empty searches show feedback; 401/404/offline errors are handled
- ✅ **No XSS vectors** — No `dangerouslySetInnerHTML`, `eval`, or `innerHTML` usage
- ✅ **Immutable data flow** — Crop matching creates new objects instead of mutating shared data
- ✅ **Accessibility** — ARIA labels on interactive elements
- ✅ **SEO optimized** — Proper meta tags, semantic HTML, heading hierarchy
- ✅ **SPA deploy ready** — Includes `_redirects` (Netlify) and `vercel.json` (Vercel) configs

---

## 🌐 Deployment

### Netlify
The `public/_redirects` file is already configured. Just connect your GitHub repo to Netlify:
- **Build command**: `npm run build`
- **Publish directory**: `dist`

### Vercel
The `vercel.json` is already configured. Connect your GitHub repo and deploy.

### Environment Variables
Add `VITE_WEATHER_API_KEY` to your hosting platform's environment variables settings.

---

## 📊 APIs Used

| API | Purpose | Auth Required |
|-----|---------|---------------|
| [OpenWeatherMap](https://openweathermap.org/api) | Real-time weather data by city | Yes (free API key) |
| [ISRIC SoilGrids v2.0](https://rest.isric.org/soilgrids/v2.0/docs) | Global soil composition data (250m resolution) | No (fully open) |

---

## 👥 Team

Built as a **Web Application Programming Capstone Project**.

---

## 📄 License

This project is for educational purposes as part of a capstone submission.

---

<p align="center">
  Built with ❤️ — Helping farmers grow smarter.
</p>
