const dataManager = require('./dataManager')
const cityList = require('./cityList')
const cityForm = require('./cityForm')

function addCityListener() {
    document.querySelector("#saveCityButton").addEventListener("click", () => {
        const newCity = {
            city: document.querySelector("#cityName").value,
            state: document.querySelector("#cityState").value,
            why: document.querySelector("#cityWhy").value
        }
        // API function
        dataManager.saveCityInfo(newCity).then(() => {
            // Clear form after submit
            cityForm.clearForm()
            // List cities after saving
            cityList()
        })
    })
    document.querySelector("#cityList").addEventListener("click", (event) => {
        // If statement to target delete button
        if (event.target.id.startsWith("deleteButton")){
            // Split method...vvv vvv vvv vvv vvv vvv vvv
            let deleteCity = event.target.id.split("--")[1]
            // Console log
            console.log(deleteCity)
            // Delete from API. (idk if I'm gonna keep that)
            dataManager.delCityEntries(deleteCity).then(() => {
                cityList()
            })
        }
        })
}
module.exports = addCityListener