 function initMap(){
    
    let option =  {
        center: {lat: 21.1458, lng: 79.0882},
        zoom: 8
      }
  

    map = new google.maps.Map(document.getElementById('map'),option);

    // marker 
   function Addmarker(location){
    const marker = new google.maps.Marker({
        position:location,
        map: map,
      });

    }
    Addmarker({lat:21.3929 ,lng:79.3267})
    Addmarker({lat:18.5204 ,lng:73.8567})

 }
 
