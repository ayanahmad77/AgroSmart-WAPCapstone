import { useState, useCallback } from 'react'
import axios from 'axios'

/**
 * Classifies soil type from SoilGrids texture data (clay/sand/silt in g/kg,
 * organic carbon density in dg/dm³, and pH×10).
 *
 * Uses a simplified USDA Soil Texture Triangle + organic/pH thresholds.
 */
function classifySoil(clay, sand, silt, ocd, ph) {
  // Convert g/kg to percentages
  const clayPct = clay / 10
  const sandPct = sand / 10
  const siltPct = silt / 10

  // High organic carbon → peaty
  if (ocd != null && ocd > 300) return 'peaty'

  // Alkaline (pH > 7.5) + moderate calcium-linked texture → chalky
  if (ph != null && ph > 75 && sandPct > 30 && clayPct < 35) return 'chalky'

  // USDA Soil Texture Triangle (simplified)
  if (clayPct >= 40) return 'clay'
  if (sandPct >= 70 && clayPct < 15) return 'sandy'
  if (siltPct >= 50 && clayPct < 27) return 'silty'

  // Everything else is loamy (most balanced, fertile soils)
  return 'loamy'
}

/**
 * Extracts the mean value for a given property name from SoilGrids response layers.
 */
function extractValue(layers, propertyName) {
  const layer = layers.find(l => l.name === propertyName)
  return layer?.depths?.[0]?.values?.mean ?? null
}

export function useSoilType() {
  const [detectedSoil, setDetectedSoil] = useState(null)
  const [soilLoading, setSoilLoading] = useState(false)
  const [soilError, setSoilError] = useState(null)
  const [soilData, setSoilData] = useState(null)

  const fetchSoilType = useCallback(async (lat, lon) => {
    if (lat == null || lon == null) return
    setSoilLoading(true)
    setSoilError(null)
    setDetectedSoil(null)
    setSoilData(null)

    try {
      const res = await axios.get(
        'https://rest.isric.org/soilgrids/v2.0/properties/query',
        {
          params: {
            lon: lon,
            lat: lat,
            property: ['clay', 'sand', 'silt', 'ocd', 'phh2o'],
            depth: '0-5cm',
            value: 'mean',
          },
          // SoilGrids uses repeated params: property=clay&property=sand etc.
          paramsSerializer: (params) => {
            const parts = []
            for (const [key, val] of Object.entries(params)) {
              if (Array.isArray(val)) {
                val.forEach(v => parts.push(`${key}=${encodeURIComponent(v)}`))
              } else {
                parts.push(`${key}=${encodeURIComponent(val)}`)
              }
            }
            return parts.join('&')
          },
        }
      )

      const layers = res.data?.properties?.layers
      if (!layers || layers.length === 0) {
        setSoilError('No soil data available for this location.')
        return
      }

      const clay = extractValue(layers, 'clay')
      const sand = extractValue(layers, 'sand')
      const silt = extractValue(layers, 'silt')
      const ocd = extractValue(layers, 'ocd')
      const ph = extractValue(layers, 'phh2o')

      // If all core texture values are null (urban/water body), can't classify
      if (clay == null && sand == null && silt == null) {
        setSoilError('Soil data unavailable for this area (likely urban or water body). Please select manually.')
        return
      }

      const soilType = classifySoil(clay ?? 0, sand ?? 0, silt ?? 0, ocd, ph)
      setDetectedSoil(soilType)
      setSoilData({
        clay: clay != null ? (clay / 10).toFixed(1) : null,
        sand: sand != null ? (sand / 10).toFixed(1) : null,
        silt: silt != null ? (silt / 10).toFixed(1) : null,
        ocd: ocd != null ? (ocd / 10).toFixed(1) : null,
        ph: ph != null ? (ph / 10).toFixed(1) : null,
      })
    } catch {
      setSoilError('Could not fetch soil data. Please select manually.')
    } finally {
      setSoilLoading(false)
    }
  }, [])

  return { detectedSoil, soilLoading, soilError, soilData, fetchSoilType }
}
