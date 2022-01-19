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
  const myLatLn = { lat : 23.2599, lng :77.4126 };
//   const array = {myLatLn,myLatLng};
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4.5,
    center: myLatLn,
  });
var locations = [
  ['Nilgiri Biosphere Reserve', 11.5732, 76.7558],
  ['Nanda Devi Biosphere Reserve', 30.6588, 79.8387],
  ['Gulf of Mannar', 9.1278, 79.4662],
  ['Sundarbans', 21.9497, 89.1833],
  ['Manas', 26.6594, 91.0011],
  ['Simlipal', 21.5931, 86.2945],
  ['Dihang-Dibang', 29.1916, 95.9833],
  ['Pachmarhi Biosphere Reserve', 20.10, 77.45],
  ['Khangchendzonga National Park', 27.6672, 88.3246],
  ['Agasthyamalai Biosphere Reserve', 8.39, 77.125],
  ['Achanakmar-Amarkantak Biosphere Reserve', 22.9497, 81.4433],
  ['Rann of Kutch', 23.9454, 69.7456],
  ['Cold Desert', 32.0, 77.8],
  ['Seshachalam Hills', 14.3333, 78.2500],
  ['Panna', 24.7180, 80.1819]
];
var infowindow = new google.maps.InfoWindow();
var i,marker;
for (i = 0; i < locations.length; i++) {  
  marker=new google.maps.Marker({
    position: new google.maps.LatLng(locations[i][1], locations[i][2]),
    map: map
  });
  google.maps.event.addListener(marker, 'click', (function(marker, i) {
    return function() {
      infowindow.setContent(locations[i][0]);
      infowindow.open(map, marker);
    }
  })(marker, i));
}
}