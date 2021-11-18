// function initMap() {
//   const myLatLng = { lat: -25.363, lng: 131.044 };
//   const myLatLn = { lat: -2.363, lng: 13.044 };
//   const array = {myLatLn,myLatLng};
//   const map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 4,
//     center: myLatLn,
//   });

//   new google.maps.Marker({
//     position: myLatLn,
//     map
//     // title: "Hello World!",
//   });
// }

// function initMap(){
//   const location={lat: -23.435,lng: 131.345};
//   const map= new google.maps.Map(document.getElementById("map"),{
//     zoom:4,
//     centre: location
//   });
//   new google.maps.Marker({
//     position: location,
//     map:map
//   });
// }
function initMap(){
  const myLatLn = { lat : 28.6424308, lng :76.813073 };
//   const array = {myLatLn,myLatLng};
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: myLatLn,
  });
var locations = [
  ['Bondi Beach', -33.890542, 151.274856],
  ['Coogee Beach', -33.923036, 151.259052],
  ['Cronulla Beach', -34.028249, 151.157507],
  ['Manly Beach', -33.80010128657071, 151.28747820854187],
  ['Maroubra Beach', -33.950198, 151.259302]
];
var i;
for (i = 0; i < locations.length; i++) {  
  new google.maps.Marker({
    position: new google.maps.LatLng(locations[i][1], locations[i][2]),
    map: map
  });
}
}