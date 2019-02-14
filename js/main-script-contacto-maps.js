

// REVISADO
/****************** MAPA DE CONTACTO ******************/ 
var map, map2;
var isMobile = ($(window).width() == 600);

function refreshMap(lat, lng){
    var latLng = new google.maps.LatLng(lat, lng);
    if (typeof map !== 'undefined')
        map.setCenter(latLng);
    if (typeof map2 !== 'undefined')
        map2.setCenter(latLng);
}
 

function initMap(){
  let myOptions = {
    zoom:15,
    center:new google.maps.LatLng(-12.093372, -77.024437),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  //*****************
  marker_icon = new google.maps.Marker({
    position: new google.maps.LatLng(-12.093372, -77.024437),
    animation: google.maps.Animation.DROP,
    icon: 'img/icon-map-sample.svg',
  });

  marker_icon.setMap(map); 
  //*****************

  if(!isMobile)
    map = new google.maps.Map(document.getElementById('mapa_contacto_geo_a'), myOptions);
  else
    map2 = new google.maps.Map(document.getElementById('mapa_contacto_geo_b'), myOptions);

  if(office_locs != null) {
      for (var ind in office_locs) {
          var office_loc = office_locs[ind];
          if(typeof office_loc === 'string' ) {
              var loc = office_loc.split(",", 2);
              lat = loc[0];
              lng = loc[1];

              var latLng = new google.maps.LatLng(lat, lng);

              if(typeof map !== 'undefined') {
                  new google.maps.Marker({
                      map: map,
                      position: latLng,
                      icon: marker_icon
                  });
              }
              if(typeof map2 !== 'undefined') {
                  new google.maps.Marker({
                      map: map2,
                      position: latLng,
                      icon: marker_icon
                  });
              }
          }
      }
  }
}