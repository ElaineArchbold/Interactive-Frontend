// User Double Clicks to add marker//
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 2,
    center: {lat: 53.1424, lng: 7.6921 }
  });

  map.addListener('click', function(e) {
    placeMarkerAndPanTo(e.latLng, map);
  });
}

function placeMarkerAndPanTo(latLng, map) {
  var marker = new google.maps.Marker({
    position: latLng,
    map: map
  });
  map.panTo(latLng);
}

