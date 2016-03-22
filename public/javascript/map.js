function initialize_gmaps() {
    // initialize new google maps LatLng object

    var styles = [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}]

    var icon = {
        hotel: new google.maps.MarkerImage("http://image005.flaticon.com/1/svg/109/109737.svg", null, null, null, new google.maps.Size(25,25)), 
        food: new google.maps.MarkerImage("http://image005.flaticon.com/1/svg/109/109703.svg", null, null, null, new google.maps.Size(25,25)), 
        activity: new google.maps.MarkerImage("http://image005.flaticon.com/1/svg/109/109730.svg", null, null, null, new google.maps.Size(25,25))}

    var myLatlng = new google.maps.LatLng(40.705189,-74.009209);
    var markers = [
        {position: myLatlng, title:"Hello World!", icon: icon.hotel},
        {position: new google.maps.LatLng(40.7048872,-74.0123737), title:"Hello World!", icon: icon.activity},
        {position: new google.maps.LatLng(40.7059872,-74.0125737), title:"Hello World!", icon: icon.food},
        {position: new google.maps.LatLng(40.704489,-74.053209), title:"Hello World!", icon: icon.food},
        {position: new google.maps.LatLng(40.7054389,-74.0092349), title:"Hello World!", icon: icon.activity},
        {position: new google.maps.LatLng(40.72134189,-74.0321209), title:"Hello World!", icon: icon.activity},
        {position: new google.maps.LatLng(40.703543189,-74.00321409), title:"Hello World!", icon: icon.activity}
        ]


    // set the map options hash
    var mapOptions = {
        center: myLatlng,
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: styles
    };
    // get the maps div's HTML obj
    var map_canvas_obj = document.getElementById("map");
    // initialize a new Google Map with the options
    var map = new google.maps.Map(map_canvas_obj, mapOptions);
    // Add the marker to the map
    var markerObjs = []
    for (var i=0; i < markers.length ; i++){
        markerObjs[i] = new google.maps.Marker(markers[i]);

    }

    for (var j =0 ; j < markerObjs.length ; j++){
        markerObjs[j].setMap(map);
    }
    // console.log(markers[0])
    // var marker = new google.maps.Marker(markers[0]);
    // // Add the marker to the map by calling setMap()
    // marker.setMap(map);
}

$(document).ready(function() {
    initialize_gmaps();
});