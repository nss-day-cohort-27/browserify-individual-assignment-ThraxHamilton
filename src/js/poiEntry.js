function createPoiEnrty(place, location, why, poiID){
    return `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h1 class="poi-place">${place}</h5>
      <p class="poi-location">${location}</p>
      <p class="poi-why">${why}</p>
      <button id="deletePoiButton--${poiID}">Delete Place</button>
    </div>
  </div>`;
}

module.exports = createPoiEnrty;