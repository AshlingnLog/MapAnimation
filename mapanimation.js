// This array contains the coordinates for all bus stops between MIT and Harvard
//
  
  // TODO: add your own access token
  mapboxgl.accessToken = 'pk.eyJ1IjoiYXNobGluZ3N0cnV2ZTg1IiwiYSI6ImNsYmZpOTlmajA2OTYzdnFzbWI0YWV4ZngifQ.zlTN1F6uZHA6EEH5a_pHJQ';
  
  // This is the map instance
  let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-71.104081, 42.365554],
    zoom: 14,
  });
  let marker = new mapboxgl.Marker().setLngLat([-71.092761, 42.357575]).addTo(map);
  // TODO: add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"
  
  // counter here represents the index of the current bus stop
  let counter = 0;
  function move() {
    // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
    function move() {// Use counter to access bus stops in the array busStops
     setTimeout(() => {
      if (counter >= busStops.length) return;
      marker.setLngLat(busStops[counter]);
      counter++;
      move();
    }, 1000); // Make sure you call move() after you increment the counter.
  }
  
  // Do not edit code past this point
  if (typeof module !== 'undefined') {
    module.exports = { move };
  }
  