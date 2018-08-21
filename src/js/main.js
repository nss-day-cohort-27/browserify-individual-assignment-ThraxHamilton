const cityForm = require('./cityForm')
const cityList = require('./cityList')
const poiForm = require('./poiForm')
const poiList = require('./poiList')
const addCityListner = require('./cityMain')
const addPoiListener = require('./poiMain')
// Put city form on page
document.querySelector("#cityForm").innerHTML = cityForm.createNewForm()
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