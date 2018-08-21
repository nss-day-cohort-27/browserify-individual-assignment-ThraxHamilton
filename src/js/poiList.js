const createPoiEntry = require('./poiEntry')
const dataManager = require('./dataManager')

// Make new variable that holds poiList in index.html
let poiOutput = document.querySelector('#poiList')
// New function 
function listPoi(){
    // Sets to empty string
    poiOutput.innerHTML = "";
    // Pull info from API
    dataManager.getPoiInfo().then(result=>{
        // forEach newPOI, populate function made in poiEntry.js
        result.forEach(newPoi => {
            let poiComponent = createPoiEntry(newPoi.place, newPoi.location, newPoi.why, newPoi.id);
            writeEntriesToDOM(poiComponent);
        });
})}
// Write to DOM
function writeEntriesToDOM(entry){
    poiOutput.innerHTML += entry
}

module.exports = listPoi