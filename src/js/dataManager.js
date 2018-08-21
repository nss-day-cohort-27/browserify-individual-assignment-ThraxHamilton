// One function to hold all data functions
let dataManager = Object.create(null, {
    // ---------------------- Cities Cities Cities Cities -----------------------------------
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
            return fetch(`http://localhost:8088/cities/${cityid}`, {
                // Delete method
                method:"DELETE"
            })
                .then(response => response.json())
        }
    },
    // -------------------------- POI POI POI POI -----------------------------------------
    savePoiInfo: {
        value: (entry) => {
            return fetch("http://localhost:8088/POI", {
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
    getPoiInfo: {
        value: (entry) => {
            return fetch("http://localhost:8088/POI", {
            })
                .then(response => response.json())
        }

    },
    delPoiEntries: {
        value: (poiID) => {
            // Must fetch from local host, but target ID given when you save.
            return fetch(`http://localhost:8088/POI/${poiID}`, {
                // Delete method
                method:"DELETE"
            })
                .then(response => response.json())
        }
    },
})




module.exports = dataManager