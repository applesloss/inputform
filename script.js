// This isn't necessary but it keeps the editor from thinking L and carto are typos
/* global L */

var map = L.map('map', {
  doubleClickZoom: true 
}).setView([32.458791, -88.0], 8.5);

// Add base layer
L.tileLayer('https://api.mapbox.com/styles/v1/applesloss/cjh0wdvj500ia2sp4jwhm9osv/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYXBwbGVzbG9zcyIsImEiOiJjajloZnptNDkzN3N5MnFyd2E4YjJzMmZyIn0.QOsmmI2w4V0LxUnEyMdMpw', {
  maxZoom: 18
}).addTo(map);

map.on('click', function(event) {
  console.log(event.latlng);
  var popup = L.popup()
    .setLatLng(event.latlng)
    .setContent('<p>latitude: ' + event.latlng.lat + '</p><p>longitude: ' + event.latlng.lng + '</p>')
    .openOn(map);
});