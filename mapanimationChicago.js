// This array contains the coordinates for all bus stops between Lake Bluff & Chicago
const trainStops = [42.279,-87.846];//Lake Bluff 600 N. Sheridan Rd., Lake Bluff, IL 60044

// TODO: add your own access token
mapboxgl.accessToken = 'pk.eyJ1IjoiYXNobGluZ3N0cnV2ZTg1IiwiYSI6ImNsYmd6YTk5ZjBlZXMzcHBnZHQwcnAwN28ifQ.ecry8B-1jGbdCkhwF53RZA';

// TODO: create the map object using mapboxgl.map() function
let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [42.279,-87.846],
  zoom: 14,
});

// TODO: add a marker to the map
let marker = new mapboxgl.Marker().setLngLat([42.279,-87.846].addTo(map);

// counter here represents the index of the current bus stop
let counter = 0;
function move() {
  // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
  // Use counter to access bus stops in the array busStops

  setTimeout(() => {
    if (counter >= trainStops.length) return;
    marker.setLngLat(trainStops[counter]);
    counter++;
    move();
  }, 1000);
}

// Do not edit code past this point
if (typeof module !== 'undefined') {
  module.exports = { move, counter, marker, trainStops };
}
