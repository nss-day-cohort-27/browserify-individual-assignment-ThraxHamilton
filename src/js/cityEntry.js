function createEnrty(city, state, why, cityId){
    return `<h1>${city}</h1>
            <p>${state}</p>
            <p>${why}</p>
            <button id="deleteButton--${cityId}">Delete</button>`;
}

module.exports = createEnrty;