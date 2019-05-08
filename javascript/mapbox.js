'use strict';

const main = () => {
  mapboxgl.accessToken = 'pk.eyJ1IjoiZ2lhbmZyYW5jb3IiLCJhIjoiY2p2ZGxqcGRlMGVlbzN6bzZlbnFwM3J5eiJ9.gNNdpYyAl_7ctY7fdhkraA';
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    center: [41.400530, 2.199710],
    zoom: 12
  });

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      var pos = [position.coords.longitude, position.coords.latitude];
      map.setCenter(pos);
    }, () => {
      alert('Issue retrieving your location');
    });
  } else {
    alert(' Your browser doesn\'t support Geolocation');
  }

  axios.get('http://localhost:3000/api/restaurants')
    .then((result) => {
      result.data.forEach(restaurant => {
        new mapboxgl.Marker()
          .setLngLat(restaurant.location.coordinates.reverse())
          .addTo(map);
      });
    })
    .catch(err => console.error(err));
};

window.addEventListener('load', main);