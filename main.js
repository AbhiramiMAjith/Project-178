let latitude = 20.5937, longitude = 78.9629

mapboxgl.accessToken = 'pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA';

var map = new mapboxgl.Map({
    container : "map",
    style : "mapbox://styles/mapbox/streets-v11",
    center : [longitude, latitude],
    zoom : 4
})

var img1 = document.querySelector("#taj_mahal")
var marker1 = new mapboxgl.Marker({
    element : img1
})
.setLngLat([78.0421,27.1751])
.addTo(map)

map.addControl(
    new MapboxGeocoder({
        accessToken : mapboxgl.accessToken,
        mapboxgl : mapboxgl
    })
)