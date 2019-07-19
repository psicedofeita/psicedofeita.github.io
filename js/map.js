var layer = new L.StamenTileLayer("terrain");
var map = L.map('map').setView([41.1548828, -8.619126], 15);
map.addLayer(layer);

var marker = L.marker([41.1536655, -8.6184736]).addTo(map);