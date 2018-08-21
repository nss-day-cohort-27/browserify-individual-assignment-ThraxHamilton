const cityForm = Object.create(null, {
    clearForm: {
        value: () => {
            document.querySelector("#cityName").value = ""
            document.querySelector("#cityState").value = ""
            document.querySelector("#cityWhy").value = ""
        }
    },
    createNewForm: {
        value: () => {
            return  `
            <fieldset>
                <label for="cityTitle">City: </label>
                <input required type="text" id="cityName">
            </fieldset>
            <fieldset>
                <label for="cityState">State</label>
                <input required type="text" id="cityState">
            </fieldset>
            <fieldset>
                <label for="cityWhy">Why is it one of your favorites?: </label>
                <textarea id="cityWhy" id='cityWhy'></textarea>
                </fieldset>
            <button id="saveCityButton">Add City</button>`
        }
    }
})
module.exports = cityForm