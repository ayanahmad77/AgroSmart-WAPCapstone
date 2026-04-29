import { crops } from '../data/cropRules'

export function getCropSuggestions(weather, soilType) {
  if (!weather || !soilType) return []

  const { temp, humidity, condition } = weather
  const conditionLower = condition.toLowerCase()

  // Check which weather condition category it falls into
  const getConditionType = (cond) => {
    if (cond.includes('rain') || cond.includes('shower') || cond.includes('thunderstorm')) return 'rain'
    if (cond.includes('drizzle')) return 'drizzle'
    if (cond.includes('clear') || cond.includes('sunny')) return 'clear'
    if (cond.includes('cloud') || cond.includes('overcast')) return 'clouds'
    if (cond.includes('haze')) return 'haze'
    if (cond.includes('mist') || cond.includes('fog')) return 'mist'
    return 'clear'
  }

  const condType = getConditionType(conditionLower)

  const matched = crops
    .map(crop => {
      const soilMatch = crop.soils.includes(soilType)
      const tempMatch = temp >= crop.minTemp && temp <= crop.maxTemp
      const humidityMatch = humidity >= crop.minHumidity
      const condMatch = crop.conditions.includes(condType)

      // Score: all 4 = perfect, 3 = good, 2 = borderline
      const score = [soilMatch, tempMatch, humidityMatch, condMatch].filter(Boolean).length
      return { ...crop, _score: score }
    })
    .filter(crop => crop._score >= 2)

  // Sort by score descending
  return matched.sort((a, b) => b._score - a._score)
}