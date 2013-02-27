





function onBodyLoad()
{
    document.getElementById('geoLoc').empty();
    document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady()
{
    
    phoneGapReady.innerHTML = ("")
}
var x=document.getElementById("demo");

function getLocation()
{
    if (navigator.geolocation)
    
    {
        navigator.geolocation.getCurrentPosition(showPosition,showError);
    }
    else{x.innerHTML="Geolocation not supported";}
}

function showPosition(position)
{
    lat=position.coords.latitude;
    lon=position.coords.longitude;
    latlon=new google.maps.LatLng(lat, lon);
    mapcontainer=document.getElementById('mapcontainer')
    mapcontainer.style.height='250px';
    mapcontainer.style.width='100%';
    
    var myOptions={
    center:latlon,zoom:15,
    mapTypeId:google.maps.MapTypeId.ROADMAP,
    mapTypeControl:false,
    navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL}
    };
    var map=new google.maps.Map(document.getElementById("mapcontainer"),myOptions);
    var marker=new google.maps.Marker({position:latlon,map:map,title:"Your Location."});
}

function showError(error)
{
    switch(error.code)
    {
        case error.PERMISSION_DENIED:
            x.innerHTML="User did not allow Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML="Location not available."
            break;
        case error.TIMEOUT:
            x.innerHTML="Requested Timed Out."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML="Error unknown."
            break;
    }
}