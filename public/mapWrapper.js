const MapWrapper = function (container, coords, zoom) {
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  })
}

var contentString = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Dunadd</h1>'+
    '<div id="bodyContent">'+
    '<p><b>Dunadd Fort</b> rises proudly from Moine Mhor – the ' +
    '‘great moss’ – an expanse of bog that carpets the southern '+
    'end of Kilmartin Glen. It was home to a fort 2,000 years ago, and '+
    'a royal power centre of Gaelic kings in the 500s to 800s AD. '+
    'Below the mighty fort site are some extraordinary features carved '+
    'into the rock, including two human footprint shapes – similar '+
    'to a pair found at Clickimin Broch. '+
    'Because Dunadd is mentioned in early sources, and is readily, '+
    'identifiable, it has been excavated on several occasions and has one '+
    'the most important ensembles of finds from any early medieval '+
    'site in Scotland.</p>'+
    '<p><a href="https://en.wikipedia.org/wiki/Dunadd</a></p>'+
    '</div>'+
    '</div>';


var infowindow = new google.maps.InfoWindow({
  content: contentString
})

MapWrapper.prototype.addMarker = function (coords, title) {
  const marker = new google.maps.Marker({
    position: coords,
    map: this.googleMap,
    title: title
  })

  marker.addListener('click', function() {
    infowindow.open(marker.map, marker);
  })
}
