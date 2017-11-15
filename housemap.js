function initMap() {
  var myLatLng = {lat: 41.805670, lng: -87.978100};

  var map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    zoom: 15});

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: '417 N Grant, Westmont'});

  var circle = new google.maps.Circle({
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
    map: map,
    center: myLatLng,
    radius: 965.606});

  var bikeLayer = new google.maps.BicyclingLayer();
    bikeLayer.setMap(map);

}