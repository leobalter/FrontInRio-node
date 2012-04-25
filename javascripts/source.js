// Maps
var myLatlng = new google.maps.LatLng(-22.952742,-43.172804);
var myOptions = {
  zoom: 16,
  center: myLatlng,
  mapTypeId: google.maps.MapTypeId.HYBRID
};
var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
map.setCenter(myLatlng);

var marker = new google.maps.Marker({
  position: myLatlng,
  map: map,
  title: 'FrontInRio 2012'
});

var contentString = '<div style="height:96px"><h4><a href="http://www.frontinrio.com.br">FrontInRio 2012</a></h4>\n';
contentString += '<p><strong>Local:</strong> Av. Pasteur 458, prédio do CCET, sala 204, no bairro da Urca, Rio de Janeiro</p></div>';

var infowindow = new google.maps.InfoWindow({
  content: contentString,
  position: myLatlng,
  minHeight: 150
});

google.maps.event.addListener(marker, 'click', function() {
  infowindow.open(map,marker);
});
