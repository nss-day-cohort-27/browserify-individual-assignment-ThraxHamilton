const cityForm = require('./cityForm')
const dataManager = require('./dataManager')

document.querySelector("#cityForm").innerHTML = cityForm.createNewForm()

document.querySelector("#saveCityButton").addEventListener("click",() => {
    const newCity = {
    city: document.querySelector("#cityName").value,
    state: document.querySelector("#cityState").value,
    why: document.querySelector("#cityWhy").value
    }
    dataManager.saveCityInfo(newCity).then(() => {
        // cityForm.clearForm()
    })
})