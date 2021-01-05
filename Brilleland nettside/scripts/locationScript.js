
let mapdiv = document.getElementById("mapholder");

getLocation();

function getLocation() {

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showLocation);
  } else {
    alert("Nettleseren støtter ikke Geolokasjon!");
  }
}

function showLocation(position) {

    let latlong = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    
    let options = {
        center: latlong,
        zoom: 15,
        mapTypeControl: true,
        navigationControlOptions: {
            style:google.maps.NavigationControlStyle.SMALL
        }
    }
    
    let map = new google.maps.Map(document.getElementById("mapholder"), options);
    let marker = new google.maps.Marker({ position:latlong, map:map, title:"Brilleland" });
}