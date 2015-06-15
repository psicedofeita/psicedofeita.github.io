// The following code creates a map with parking locations.
// Written by Rui Principe from an example by Google.

function initialize() {
  var mapOptions = {
    zoom: 16,
    center: new google.maps.LatLng(41.1548828,-8.619126)
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'),
                                mapOptions);

  var myLatLng = new google.maps.LatLng(41.1536655,-8.6184736);
  var parkMarker = new google.maps.Marker({
      position: myLatLng,
      map: map
  });


  setMarkers(map, parking);
}

/**
 * Data for the markers consisting of a name, a LatLng and a zIndex for
 * the order in which these markers should display on top of each
 * other.
 */
var parking = [
  ['Centro Comercial Cedofeita', 41.154658,-8.61887, 1],
  ['Parque', 41.15434,-8.618766, 2],
  ['Auto Cedofeita', 41.153573,-8.618505, 3],
  ['Estacionamento', 41.153004,-8.618298, 4]
];

function setMarkers(map, locations) {
  // Add markers to the map

  // Marker sizes are expressed as a Size of X,Y
  // where the origin of the image (0,0) is located
  // in the top left of the image.

  // Origins, anchor positions and coordinates of the marker
  // increase in the X direction to the right and in
  // the Y direction down.
  var image = {
    url: '../img/parking.png',
    // This marker is 20 pixels wide by 32 pixels tall.
    size: new google.maps.Size(32, 37),
    // The origin for this image is 0,0.
    origin: new google.maps.Point(0,0),
    // The anchor for this image is the base of the flagpole at 0,32.
    anchor: new google.maps.Point(0, 37)
  };
  // Shapes define the clickable region of the icon.
  // The type defines an HTML &lt;area&gt; element 'poly' which
  // traces out a polygon as a series of X,Y points. The final
  // coordinate closes the poly by connecting to the first
  // coordinate.
  var shape = {
      coords: [1, 1, 1, 37, 32, 37, 32, 1],
      type: 'poly'
  };
  for (var i = 0; i < locations.length; i++) {
    var park = locations[i];
    var myLatLng = new google.maps.LatLng(park[1], park[2]);
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image,
        shape: shape,
        title: park[0],
        zIndex: park[3]
    });
  }
}

google.maps.event.addDomListener(window, 'load', initialize);