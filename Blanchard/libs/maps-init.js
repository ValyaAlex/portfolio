/*maps*/

ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("map",
  {
    center: [55.758468, 37.601088],
    zoom: 14,
    controls: ['geolocationControl', 'zoomControl']
  },
  {
    suppressMapOpenBlock: true,
    geolocationControlSize: "large",
    geolocationControlPosition:  { top: "200px", right: "20px" },
    geolocationControlFloat: 'none',
    zoomControlSize: "small",
    zoomControlFloat: "none",
    zoomControlPosition: { top: "120px", right: "20px" }
  });

  myMap.behaviors.disable('scrollZoom');

  var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/map.svg',
    iconImageSize: [20, 20]
  });

  myMap.geoObjects.add(myPlacemark);
  myMap.container.fitToViewport();
}
