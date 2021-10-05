function initMap() {
  const location = { lat: 40.678152, lng: -73.897586 },
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: location,
  });
  const marker = new google.maps.Marker({
    position: location,
    map: map,
  });
}
