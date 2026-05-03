import { useState } from "react";
import axios from "axios";

function classifySoil(clay, sand, silt, ocd, ph) {
  let clayPct = clay / 10;
  let sandPct = sand / 10;
  let siltPct = silt / 10;

  if (ocd && ocd > 300) {
    return "peaty";
  }

  if (ph && ph > 75 && sandPct > 30 && clayPct < 35) {
    return "chalky";
  }

  if (clayPct >= 40) {
    return "clay";
  }

  if (sandPct >= 70 && clayPct < 15) {
    return "sandy";
  }

  if (siltPct >= 50 && clayPct < 27) {
    return "silty";
  }

  return "loamy";
}

function getValue(layers, name) {
  for (let i = 0; i < layers.length; i++) {
    if (layers[i].name === name) {
      return layers[i].depths[0].values.mean;
    }
  }
  return null;
}

function useSoilType() {
  const [detectedSoil, setDetectedSoil] = useState(null);
  const [soilLoading, setSoilLoading] = useState(false);
  const [soilError, setSoilError] = useState("");
  const [soilData, setSoilData] = useState(null);

  async function fetchSoilType(lat, lon) {
    if (!lat || !lon) return;

    setSoilLoading(true);
    setSoilError("");
    setDetectedSoil(null);
    setSoilData(null);

    try {
      const response = await axios.get(
        "https://rest.isric.org/soilgrids/v2.0/properties/query",
        {
          params: {
            lat: lat,
            lon: lon,
            property: "clay,sand,silt,ocd,phh2o",
            depth: "0-5cm",
            value: "mean",
          },
        }
      );

      const layers = response.data.properties.layers;

      if (!layers || layers.length === 0) {
        setSoilError("No soil data found");
        setSoilLoading(false);
        return;
      }

      const clay = getValue(layers, "clay");
      const sand = getValue(layers, "sand");
      const silt = getValue(layers, "silt");
      const ocd = getValue(layers, "ocd");
      const ph = getValue(layers, "phh2o");

      if (clay === null && sand === null && silt === null) {
        setSoilError("Soil data not available here");
        setSoilLoading(false);
        return;
      }

      const soilType = classifySoil(
        clay || 0,
        sand || 0,
        silt || 0,
        ocd,
        ph
      );

      setDetectedSoil(soilType);

      setSoilData({
        clay: clay ? (clay / 10).toFixed(1) : null,
        sand: sand ? (sand / 10).toFixed(1) : null,
        silt: silt ? (silt / 10).toFixed(1) : null,
        ocd: ocd ? (ocd / 10).toFixed(1) : null,
        ph: ph ? (ph / 10).toFixed(1) : null,
      });
    } catch (error) {
      setSoilError("Error fetching soil data");
    }

    setSoilLoading(false);
  }

  return { detectedSoil, soilLoading, soilError, soilData, fetchSoilType };
}

export default useSoilType;