// Static values for now (must match the numbers shown in the Weather section).
// Later, these will come from a weather API.
const temperature = 28; // °C
const windSpeed = 8;   // km/h

// Returns the wind chill (°C) for a temperature in °C and wind speed in km/h.
function calculateWindChill(temp, speed) {
  return 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);
}

// Only calculate when the formula is valid: temp <= 10 °C and wind speed > 4.8 km/h
let windChill = "N/A";

if (temperature <= 10 && windSpeed > 4.8) {
  windChill = `${calculateWindChill(temperature, windSpeed).toFixed(1)} °C`;
}

document.getElementById("windchill").textContent = windChill;