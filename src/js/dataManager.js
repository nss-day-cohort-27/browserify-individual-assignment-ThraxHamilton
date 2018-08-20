let dataManager = Object.create(null, {
    saveCityInfo: {
        value: (entry) => {
            return fetch("http://localhost:8088/cities", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(entry)
            })
                // console.log(saveCityInfo)
                .then(response => response.json())
        }
    },
    getCityInfo: {
        value: (entry) => {
            return fetch("http://localhost:8088/cities", {
            })
                .then(response => response.json())
        }

    },

    delCityEntries: {
        value: (cityid) => {
            // Must fetch from local host, but target ID given when you save.
            return fetch(`http://localhost:8088/entries/${cityid}`, {
                // Delete method
                method:"DELETE"
            })
                .then(response => response.json())
        }
    },
})




module.exports = dataManager