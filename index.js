let metersInputEl = document.getElementById('meters-input-el');
let feetCalculatedEl = document.getElementById('feet-calculated-el');
let feetInputEl = document.getElementById('feet-input-el');
let metersCalculatedEl = document.getElementById('meters-calculated-el');

let litersInputEl = document.getElementById('liters-input-el');
let gallonsCalculatedEl = document.getElementById('gallons-calculated-el');
let gallonsInputEl = document.getElementById('gallons-input-el');
let litersCalculatedEl = document.getElementById('liters-calculated-el');

let kilosInputEl = document.getElementById('kilos-input-el');
let poundsCalculatedEl = document.getElementById('pounds-calculated-el');
let poundsInputEl = document.getElementById('pounds-input-el');
let kilosCalculatedEl = document.getElementById('kilos-calculated-el');

let userInputEl = document.getElementById('user-input-el');

function clearAllConversionFields() {
  metersInputEl.textContent = 0;
  feetCalculatedEl.textContent = (0.0).toFixed(3);
  feetInputEl.textContent = 0;
  metersCalculatedEl.textContent = (0.0).toFixed(3);
  litersInputEl.textContent = 0;
  gallonsCalculatedEl.textContent = (0.0).toFixed(3);
  gallonsInputEl.textContent = 0;
  litersCalculatedEl.textContent = (0.0).toFixed(3);
  kilosInputEl.textContent = 0;
  poundsCalculatedEl.textContent = (0.0).toFixed(3);
  poundsInputEl.textContent = 0;
  kilosCalculatedEl.textContent = (0.0).toFixed(3);
}

function metricImperialConversion() {
  let conversionValue = userInputEl.value;
  if (conversionValue != '') {
    let parsedConversionValue = parseInt(conversionValue);
    convertMetersToFeet(parsedConversionValue);
    convertFeetToMeters(parsedConversionValue);
    convertLitersToGallons(parsedConversionValue);
    convertGallonsToLiters(parsedConversionValue);
    convertKilosToPounds(parsedConversionValue);
    convertPoundsToKilos(parsedConversionValue);
  } else {
    clearAllConversionFields();
  }
}

function convertMetersToFeet(value) {
  metersInputEl.textContent = value;
  feetCalculatedEl.textContent = (3.2808399 * value).toFixed(3);
}

function convertFeetToMeters(value) {
  feetInputEl.textContent = value;
  metersCalculatedEl.textContent = (0.3048 * value).toFixed(3);
}

function convertLitersToGallons(value) {
  litersInputEl.textContent = value;
  gallonsCalculatedEl.textContent = (0.264172052 * value).toFixed(3);
}

function convertGallonsToLiters(value) {
  gallonsInputEl.textContent = value;
  litersCalculatedEl.textContent = (3.78541178 * value).toFixed(3);
}

function convertKilosToPounds(value) {
  kilosInputEl.textContent = value;
  poundsCalculatedEl.textContent = (2.20462262 * value).toFixed(3);
}

function convertPoundsToKilos(value) {
  poundsInputEl.textContent = value;
  kilosCalculatedEl.textContent = (0.45359237 * value).toFixed(3);
}
