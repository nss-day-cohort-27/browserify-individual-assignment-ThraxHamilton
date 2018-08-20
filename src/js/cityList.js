const createCityEntry = require('./cityEntry')
const dataManager = require('./dataManager')

let cityOutput = document.querySelector('#cityList')

function listCity(){
    cityOutput.innerHTML = "";
    dataManager.getCityInfo().then(result=>{
        result.forEach(newCity => {
            let cityComponent = createCityEntry(newCity.city, newCity.state, newCity.why, newCity.id);
            writeEntriesToDOM(cityComponent);
        });
})}

function writeEntriesToDOM(entry){
    cityOutput.innerHTML += entry
}

module.exports = listCity