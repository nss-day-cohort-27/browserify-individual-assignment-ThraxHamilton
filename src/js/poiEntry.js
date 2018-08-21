function createPoiEnrty(place, location, why, poiID){
    return `<h1>${place}</h1>
            <p>${location}</p>
            <p>${why}</p>
            <button id="deletePoiButton--${poiID}">Delete</button>`;
}

module.exports = createPoiEnrty;