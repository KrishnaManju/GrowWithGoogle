## Showing my home location using Google MAPs Javascript API

```javascript
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>My Home</title> 
  <style>
    #map {
      background-color: gray;
      height: 300px;
      width: 100%;
    }   
  </style>
</head>
<body>
  <h3>My house address </h3>
 <div id="map"></div>
  <script>
    function initMap() {
      var latlng = {lat: 47.008289, lng: -98.835480};
      var myOptions = {
        zoom : 8,
        center : latlng
      }
      
     var map = new google.maps.Map(document.getElementById('map'),myOptions);
      
     var marker = new google.maps.Marker({
        position: latlng,
        map:map
      })
    }
    
  </script>
  <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAwYodeFk3QY7X89R-O17huq8EvOuV1nks&callback=initMap">
    </script>
</body>
</html>
