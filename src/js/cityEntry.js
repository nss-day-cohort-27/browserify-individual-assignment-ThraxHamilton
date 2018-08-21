function createEnrty(city, state, why, cityId){
    return `<h1 class ='cityName'>${city}</h1>
            <p class='state'>${state}</p>
            <p class= 'cityWhy'>${why}</p>
            <button id="deleteButton--${cityId}">Delete</button>`;
}

module.exports = createEnrty;