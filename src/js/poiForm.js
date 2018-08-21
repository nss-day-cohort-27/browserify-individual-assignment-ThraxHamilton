const poiForm = Object.create(null, {
    clearForm: {
        value: () => {
            document.querySelector("#poiName").value = ""
            document.querySelector("#poiWhere").value = ""
            document.querySelector("#poiWhy").value = ""
        }
    },
    createNewForm: {
        value: () => {
            return  `
            <fieldset>
                <label for="poiName">Place: </label>
                <input required type="text" id="poiName">
            </fieldset>
            <fieldset>
                <label for="poiWhere">Where</label>
                <input required type="text" id="poiWhere">
            </fieldset>
            <fieldset>
                <label for="poiWhy">Why: </label>
                <textarea id="poiWhy" id='poiWhy'></textarea>
                </fieldset>
            <button id="savePoiButton">Add Place of Interest</button>`
        }
    }
})
module.exports = poiForm