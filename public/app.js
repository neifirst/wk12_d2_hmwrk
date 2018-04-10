const initialize = function () {
  const container = document.querySelector('#main-map');
  const center = {lat: 56.086013, lng: -5.4806117};
  const zoom = 12;

  const map = new MapWrapper(container, center, zoom);
  map.addMarker(center, 'Dunadd');

  const setNewCenter = document.getElementById('button-set-center')
  setNewCenter.addEventListener('click', map.setCenter(41.9102415, 12.3959142).bind(map));

}

window.addEventListener('DOMContentLoaded', initialize);
