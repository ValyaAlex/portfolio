/*maps*/

ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("map",
    {
      center: [56.849433, 60.592812],
      zoom: 15,
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

  var myPlacemark = new ymaps.Placemark([56.849433, 60.592812], {
    balloonContentHeader: "Олимпийская Набережная, 9/1",
    balloonContentBody: "",
    balloonContentFooter: "Пн - вс: с 8:00 до 20:00",
  }, {
    iconLayout: 'default#image',
    iconImageHref: 'icon/map_mark.png',
    iconImageSize: [30, 45],
    hideIconOnBalloonOpen: false,
    
  });

  myMap.geoObjects.add(myPlacemark);
  myMap.container.fitToViewport();
  myPlacemark.balloon.open();

  
};





