// This array contains the coordinates for all bus stops between MIT and Harvard
const busStops = [
  [-71.093729, 42.359244],
  [-71.094915, 42.360175],
  [-71.0958, 42.360698],
  [-71.099558, 42.362953],
  [-71.103476, 42.365248],
  [-71.106067, 42.366806],
  [-71.108717, 42.368355],
  [-71.110799, 42.369192],
  [-71.113095, 42.370218],
  [-71.115476, 42.372085],
  [-71.117585, 42.373016],
  [-71.118625, 42.374863],
];

// TODO: add your own access token
mapboxgl.accessToken =
  "pk.eyJ1IjoiamltbXlib3VrZXIiLCJhIjoiY2w0N3ltOWN2MDBhbTNjczM0bjB2eGQ5YiJ9.k-1CkX9rMtEOTxBP7in2Tw";

// This is the map instance
let map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [-71.104081, 42.365554],
  zoom: 14,
});

// TODO: add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"
// Create a new marker.
const marker = new mapboxgl.Marker()
  .setLngLat([busStops[0][0], busStops[0][1]])
  .addTo(map);
let intervalId = null;
// counter here represents the index of the current bus stop
let counter = 0;
function move() {
  if (counter >= busStops.length) {
    counter = 0;
  }
  // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
  // Use counter to access bus stops in the array busStops
  // Make sure you call move() after you increment the counter.
  marker.setLngLat(busStops[counter]);
  busStops[counter];
  counter += 1;
  intervalId = setTimeout(() => {
    move();
  }, 1000);
}

move();

function togglePlayback() {
  const button = document.querySelector("#pausePlay");
  if (intervalId != null) {
    clearInterval(intervalId);
    intervalId = null;
    button.innerText = "Resume";
  } else {
    move();
    button.innerText = "Pause";
  }
}

// Do not edit code past this point
if (typeof module !== "undefined") {
  module.exports = { move };
}
