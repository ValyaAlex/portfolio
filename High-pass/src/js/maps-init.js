/*maps*/

ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("map",
    {
      center: [55.764268, 37.622073],
      zoom: 14,
      controls: ['geolocationControl', 'zoomControl']
    },
    {
      suppressMapOpenBlock: true,
      geolocationControlSize: "large",
      geolocationControlPosition: { top: "200px", right: "20px" },
      geolocationControlFloat: 'none',
      zoomControlSize: "small",
      zoomControlFloat: "none",
      zoomControlPosition: { top: "120px", right: "20px" }
    });

  myMap.behaviors.disable('scrollZoom');

  var myPlacemark = new ymaps.Placemark([55.769370, 37.638589], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/icon/map.png',
    iconImageSize: [12, 12],
    hideIconOnBalloonOpen: false,
    
  });

  myMap.geoObjects.add(myPlacemark);
  myMap.container.fitToViewport();


  
};





