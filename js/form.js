$(function() {
  var x = document.getElementById("demo");
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{x.innerHTML = "Geolocation is not supported by this browser.";}
  }
  function showPosition(position) {
    console.log("Latitude: " + position.coords.latitude +
                "\nLongitude: " + position.coords.longitude);
  }
  getLocation();


});

var cleanAndSend = function() {
  console.log("hi");
}
