import './general';

// this function gets called to draw the map on the page
export function initMap() {

  // change the lat and lng to eugene
  // experiment with the zoom value
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: {lat: 44.052071, lng: -123.086754}
  });

  // change the lat and lng to eugene
  const marker = new google.maps.Marker({
    map,
    draggable: true,
    animation: google.maps.Animation.DROP,
    position: {lat: 44.052071, lng: -123.086754}
  });

  marker.addListener('click', () => {
    infowindow.open(map,marker);
  });

  // put some useful info about the event here
  const infowindow = new google.maps.InfoWindow({
      content: "<h3>Eugene, OR</h3><p>1911 Kincaid St. Be there, or be square.</p>"
  });

  infowindow.open(map,marker);
}

window.addEventListener("load", () => {
  const $script = document.createElement('script');
  // the google maps api has to look exactly like this except for the callback
  $script.src = `https://maps.googleapis.com/maps/api/js?key=${GMAP_KEY}&callback=bundle.initMap`;
  document.querySelector('body').appendChild($script);
});
