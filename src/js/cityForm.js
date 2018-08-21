// Create function to both make a new form, and clear form when submitted
const cityForm = Object.create(null, {
    // Function to clear form
    clearForm: {
        value: () => {
            // Targets id's below in createNewForm
            document.querySelector("#cityName").value = ""
            document.querySelector("#cityState").value = ""
            document.querySelector("#cityWhy").value = ""
        }
    },
    createNewForm: {
        // Function to create a new form
        value: () => {
            // Return the HTML for the form
            return  `
            <div class='city-form'>
            <fieldset>
                <label for="cityTitle">City: </label>
                <input required type="text" id="cityName">
            </fieldset>

            
            <fieldset>
                <label for="cityState">State/Country:</label>
                <input required type="text" id="cityState">
            </fieldset>



            <fieldset>
                <label for="cityWhy">Why is it one of your favorites?: </label>
                <textarea id="cityWhy" id='cityWhy'></textarea>
                </fieldset>
            <button id="saveCityButton">Add Your City!</button>
            <input type= button onClick="parent.location='http://www.google.com'" target= blank id='addImageButton' value='Add an Image'>      
            </div>`
        }
    }
})
// Export entire function
module.exports = cityForm