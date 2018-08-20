const cityForm = require('./cityForm')
const dataManager = require('./dataManager')
const cityList = require('./cityList')
const cityEntry = require('./cityEntry')

// Put city form on page
document.querySelector("#cityForm").innerHTML = cityForm.createNewForm()
// List cities
cityList()

// Save cities to API
document.querySelector("#saveCityButton").addEventListener("click", () => {
    const newCity = {
        city: document.querySelector("#cityName").value,
        state: document.querySelector("#cityState").value,
        why: document.querySelector("#cityWhy").value
    }
    dataManager.saveCityInfo(newCity).then(() => {
        // Clear form after submit
        cityForm.clearForm()
    })
})
// Delete city button
document.querySelector('#cityList').addEventListener('click', (cityID) => {
    if (cityID.target.id.startsWith("deleteCityButton")) {
        // let deleteCity = document.querySelector('#cityList')
        let deleteCity = event.target.id.split("--")[0]
        console.log(deleteCity)
        dataManager.delCityEntries(deleteCity).then(() => {
        })
        
    }
})