function createEnrty(city, state, why, cityId) {
    return ` <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h1 class="cityName">${city}</h1>
      <p class="state">${state}</p>
      <p class="cityWhy">${why}</p>
      <button id="deleteButton--${cityId}">Delete City</button>
    </div>
  </div>`;
}

module.exports = createEnrty;