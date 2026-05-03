import { crops } from "../data/cropRules";

function getConditionType(condition) {
  if (
    condition.includes("rain") ||
    condition.includes("shower") ||
    condition.includes("thunderstorm")
  ) {
    return "rain";
  }

  if (condition.includes("drizzle")) {
    return "drizzle";
  }

  if (condition.includes("clear") || condition.includes("sunny")) {
    return "clear";
  }

  if (condition.includes("cloud") || condition.includes("overcast")) {
    return "clouds";
  }

  if (condition.includes("haze")) {
    return "haze";
  }

  if (condition.includes("mist") || condition.includes("fog")) {
    return "mist";
  }

  return "clear";
}

export function getCropSuggestions(weather, soilType) {
  if (!weather || !soilType) {
    return [];
  }

  let temp = weather.temp;
  let humidity = weather.humidity;
  let condition = weather.condition.toLowerCase();

  let condType = getConditionType(condition);

  let result = [];

  for (let i = 0; i < crops.length; i++) {
    let crop = crops[i];

    let score = 0;

    if (crop.soils.includes(soilType)) {
      score++;
    }

    if (temp >= crop.minTemp && temp <= crop.maxTemp) {
      score++;
    }

    if (humidity >= crop.minHumidity) {
      score++;
    }

    if (crop.conditions.includes(condType)) {
      score++;
    }

    if (score >= 2) {
      let newCrop = { ...crop, score: score };
      result.push(newCrop);
    }
  }

  result.sort(function (a, b) {
    return b.score - a.score;
  });

  return result;
}