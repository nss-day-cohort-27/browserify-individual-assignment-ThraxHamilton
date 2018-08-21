const dataManager = require('./dataManager')
const poiList = require('./poiList')
const poiForm = require('./poiForm')

function addPoiListener() {
    document.querySelector('#savePoiButton').addEventListener('click', () => {
        const newPoi = {
            place: document.querySelector("#poiName").value,
            location: document.querySelector("#poiWhere").value,
            why: document.querySelector("#poiWhy").value
        }
        // API function
        dataManager.savePoiInfo(newPoi).then(() => {
            // Clear form after submit
            poiForm.clearForm()
            // List cities after saving
            poiList()
        })
    })
    document.querySelector("#poiList").addEventListener("click", (event) => {
        // If statement to target delete button
        if (event.target.id.startsWith("deletePoiButton")){
            // Split method...vvv vvv vvv vvv vvv vvv vvv
            let deletePoi = event.target.id.split("--")[1]
            // Console log
            console.log(deletePoi)
            // Delete from API. (idk if I'm gonna keep that)
            dataManager.delPoiEntries(deletePoi).then(() => {
                poiList()
            })
        }
        })
}


module.exports = addPoiListener
