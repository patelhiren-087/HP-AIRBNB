
mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/mapbox/streets-v12', // style URL
  center: listing.geometry.coordinates, // starting position [lng, lat]
  zoom: 11.5 // starting zoom
});





const marker1 = new mapboxgl.Marker({color: 'red'})
  .setLngLat(listing.geometry.coordinates) // Pass the coordinates array directly
  .setPopup(
    new mapboxgl.Popup({ offset: 25 }) // add popups
     .setHTML(`<h4>${listing.location}</h4> <p>Exact Location provided after booking</p>`)
  )
  .addTo(map);
