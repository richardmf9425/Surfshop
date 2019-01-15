mapboxgl.accessToken =
    'pk.eyJ1IjoicmljaGFyZG1mOTQyNSIsImEiOiJjanF2aGRnOTcwdmNjNDlsbjVoczVlbDFzIn0.fwkubXwazbO0lELP4vGD2Q';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v9',
    center: post.coordinates,
    zoom: 6
});

// add markers to map

// create a HTML element for out post location/marker
var el = document.createElement('div');
el.className = 'marker';

// make a marker for our location and add to the map
new mapboxgl.Marker(el)
    .setLngLat(post.coordinates)
    .setPopup(new mapboxgl.Popup({
            offset: 25
        }) // add popups
        .setHTML('<h3>' + post.title + '</h3><p>' + post.location + '</p>')
    )
    .addTo(map);