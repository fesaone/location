fetch('https://cdn.jsdelivr.net/gh/fesaone/location/api.location.json')
  .then(response => response.json())
  .then(data => {
    var tokoData = data;

    function showError(elementId) {
      document.getElementById(elementId).innerHTML = "Aktifkan lokasi.";
    }

    function getDistance(userLocation, tokoLocation, elementId) {
      var distance = userLocation.distanceTo(tokoLocation);
      if (distance < 1000) {
        document.getElementById(elementId).innerHTML = "Jarak " + distance.toFixed(0) + " meter";
      } else {
        distance = distance / 1000;
        document.getElementById(elementId).innerHTML = "Jarak " + distance.toFixed(1) + " KM";
      }
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var userLocation = L.latLng(position.coords.latitude, position.coords.longitude);

        tokoData.forEach(function(toko, index) {
          var tokoLocation = L.latLng(toko.lat, toko.lng);
          var elementId = "toko" + (index + 1);

          getDistance(userLocation, tokoLocation, elementId);
        });
      }, function() {
        tokoData.forEach(function(toko, index) {
          var elementId = "toko" + (index + 1);
          showError(elementId);
        });
      });
    } else {
      tokoData.forEach(function(toko, index) {
        var elementId = "toko" + (index + 1);
        showError(elementId);
      });
    }
  })
  .catch(error => {
    console.log('Terjadi kesalahan:', error);
  });
