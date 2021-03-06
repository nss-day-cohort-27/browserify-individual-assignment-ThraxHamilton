// Created "Main" sub-pages and required them insead for more modular and less clutter
const cityForm = require('./cityForm')
const cityList = require('./cityList')
const poiForm = require('./poiForm')
const poiList = require('./poiList')
// Function inside holds eventListener
const addCityListner = require('./cityMain')
// Function inside holds eventListener
const addPoiListener = require('./poiMain')


// Put city form on page
document.querySelector("#cityForm").innerHTML = cityForm.createNewForm()
document.querySelector('#addImageButton').addEventListener('click', () => {
    
})
// Put POI form on page
document.querySelector('#poiForm').innerHTML = poiForm.createNewForm()
// Show city list when page loads
cityList()
// Show POI list when page loads
poiList()
// Calls function to save city to API
addCityListner()
// Calls function to save POI to API
addPoiListener()