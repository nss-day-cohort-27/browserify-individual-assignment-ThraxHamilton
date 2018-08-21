const createPoiEntry = require('./poiEntry')
const dataManager = require('./dataManager')

let poiOutput = document.querySelector('#poiList')

function listPoi(){
    poiOutput.innerHTML = "";
    dataManager.getPoiInfo().then(result=>{
        result.forEach(newPoi => {
            let poiComponent = createPoiEntry(newPoi.place, newPoi.location, newPoi.why, newPoi.id);
            writeEntriesToDOM(poiComponent);
        });
})}

function writeEntriesToDOM(entry){
    poiOutput.innerHTML += entry
}

module.exports = listPoi