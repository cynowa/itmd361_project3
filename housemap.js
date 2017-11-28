function initMap() {
  var myLatLng = {lat: 41.805670, lng: -87.978100};

  var map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    zoom: 15});

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: '417 N Grant, Westmont'});

  var marker = new google.maps.Marker({
    position: {lat: 41.795456, lng: -87.976445},
    map: map,
    title: 'Train Station'});

  var marker = new google.maps.Marker({
    position: {lat:  41.806219, lng: -87.976167},
    map: map,
    title: 'Library'});

  var marker = new google.maps.Marker({
    position: {lat: 41.806830, lng: -87.975819},
    map: map,
    title: 'Bus Stop'});

  var marker = new google.maps.Marker({
    position: {lat: 41.811172, lng: -87.973538},
    map: map,
    title: 'Jewel'});

  var marker = new google.maps.Marker({
    position: {lat: 41.811099, lng: -87.989021},
    map: map,
    title: 'Trader Joe\'s'});

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