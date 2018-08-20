function createCityEnrty(city, state, why, id){
    return `<h1>${city}</h1>
            <p>${state}</p>
            <p>${why}</p>
            <button id="deleteCityButton--${id}">Delete</button>`;
}

module.exports = createCityEnrty;