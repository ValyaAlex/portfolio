ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("map",
    {
      center: [56.843481, 60.590436],
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

  var myPlacemark = new ymaps.Placemark([56.843481, 60.590436], {
    balloonContentHeader: "ул. Бориса Ельцина, 6",
    balloonContentBody: "",
    balloonContentFooter: "Пн - пт: с 8:00 до 20:00 Сб, вс: с 8:00 до 17:00",
  }, {
    iconLayout: 'default#image',
    iconImageHref: 'icon/tibet.png',
    iconImageSize: [35, 45],
    hideIconOnBalloonOpen: false,
  });

  myMap.geoObjects.add(myPlacemark);
  myMap.container.fitToViewport();
  myPlacemark.balloon.open();
};