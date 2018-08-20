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

    }})

module.exports = dataManager