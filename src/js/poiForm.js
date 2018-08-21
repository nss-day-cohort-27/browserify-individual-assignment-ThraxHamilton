// Function to make/clear form 
const poiForm = Object.create(null, {
    // Clear form
    clearForm: {
        value: () => {
            document.querySelector("#poiName").value = ""
            document.querySelector("#poiWhere").value = ""
            document.querySelector("#poiWhy").value = ""
        }
    },
    // Make form with HTML
    createNewForm: {
        value: () => {
            return  `
            <div class='poi-form'>
            <fieldset>
                <label for="poiName">Place: </label>
                <input required type="text" id="poiName">
            </fieldset>
            <fieldset>
                <label for="poiWhere">Where</label>
                <input required type="text" id="poiWhere">
            </fieldset>
            <fieldset>
                <label for="poiWhy">Why Do You Love It There?: </label>
                <textarea id="poiWhy" id='poiWhy'></textarea>
                </fieldset>
            <button id="savePoiButton">Add a Favorite Place!</button>
            </div>`
        }
    }
})
// Export
module.exports = poiForm