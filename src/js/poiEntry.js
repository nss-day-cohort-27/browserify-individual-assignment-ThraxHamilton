function createPoiEnrty(place, location, why, poiID){
    return `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h1 class="poi-place">${place}</h5>
      <h3 class="poi-location">${location}</h3>
      <p class="poi-why">${why}</p>
      <button id="deletePoiButton--${poiID}">Delete Place</button>
    </div>
  </div>`;
}

module.exports = createPoiEnrty;