$('.btn-burger').click(function () {
   $('.header-bottom').fadeToggle();
});

$('.btn-close').click(function () {
    $('.header-bottom').fadeOut();
});

$('.garage-box__slider-in').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: true,
    dots: false,
    prevArrow: $('.garage-left'),
    nextArrow: $('.garage-right'),
    dotsClass: 'slick-dots slider__dots',
    responsive: [
        {
            breakpoint: 1025,
            settings: {
                dots: false,
                slidesToShow: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 720,
            settings: {
                slidesToShow: 1,
                infinite: true,
                dots: false
            }
        }
    ]
});

$('.reviews-slider').slick({
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});



$('.gallery-slider').slick({
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    $('.gallery-slider').slick('reinit');
    map.redraw(); // Перерисовывает карту
    // return false;
});


$("[name='phone']").mask("+7 (999) 999 99 99");

// модальные окна (несколько)
// $(document).ready(function () {
//     var overlay = $('.overlay');
//     var open_modal = $('.open_modal');
//     var close = $('.modal__close, .overlay');
//     var modal = $('.modal__div');
//
//     open_modal.click(function (event) {
//         event.preventDefault();
//         var div = $(this).attr('href');
//         overlay.fadeIn(400,
//             function () {
//                 $(div)
//                     .css('display', 'flex')
//                     .animate({
//                         opacity: 1,
//                         top: '50%'
//                     }, 200);
//             });
//     });
//
//     close.click(function () {
//         modal
//             .animate({
//                     opacity: 0,
//                     top: '45%'
//                 }, 200,
//                 function () {
//                     $(this).css('display', 'none');
//                     overlay.fadeOut(400);
//                 }
//             );
//     });
// });
//end



// Инициализация карты
ymaps.ready(init);

function init() {

    //Центрирование и выбор масштаба карты
    var myMap = new ymaps.Map('map1', {
        center: [53.195042, 45.018316],
        zoom: 11
    });

    // Создание своей метки
    var myPlacemark1 = new ymaps.Placemark(
        // Координаты метки
        [53.184418, 45.050053], {
            // Свойства метки
            hintContent: '', //Подсказка при наведении на маркер
            iconContent: '',

        }, {
            iconImageHref: '../img/loc.svg',  // картинка иконки
            iconImageSize: [27, 46],                                      // размеры картинки
            // iconImageOffset: [-70, -40],// смещение картинки

        });

    var myPlacemark2 = new ymaps.Placemark(
        // Координаты метки
        [53.199573, 44.990306], {
            // Свойства метки
            hintContent: '', //Подсказка при наведении на маркер
            iconContent: '',

        }, {
            iconImageHref: '../img/loc.svg',  // картинка иконки
            iconImageSize: [27, 46],                                      // размеры картинки
            // iconImageOffset: [-70, -40],// смещение картинки

        });

    var myPlacemark3 = new ymaps.Placemark(
        // Координаты метки
        [53.142600, 45.021891], {
            // Свойства метки
            hintContent: '', //Подсказка при наведении на маркер
            iconContent: '',

        }, {
            iconImageHref: '../img/loc.svg',  // картинка иконки
            iconImageSize: [27, 46],                                      // размеры картинки
            // iconImageOffset: [-70, -40],// смещение картинки

        });

    var myPlacemark4 = new ymaps.Placemark(
        // Координаты метки
        [53.222287, 44.879508], {
            // Свойства метки
            hintContent: '', //Подсказка при наведении на маркер
            iconContent: '',

        }, {
            iconImageHref: '../loc.svg',  // картинка иконки
            iconImageSize: [27, 46],                                      // размеры картинки
            // iconImageOffset: [-70, -40],// смещение картинки

        });

    var myPlacemark5 = new ymaps.Placemark(
        // Координаты метки
        [53.222902, 45.044259], {
            // Свойства метки
            hintContent: '', //Подсказка при наведении на маркер
            iconContent: '',

        }, {
            iconImageHref: '../loc.svg',  // картинка иконки
            iconImageSize: [27, 46],                                      // размеры картинки
            // iconImageOffset: [-70, -40],// смещение картинки

        });

    // Добавление метки на карту
    myMap.geoObjects.add(myPlacemark1);
    myMap.geoObjects.add(myPlacemark2);
    myMap.geoObjects.add(myPlacemark3);
    myMap.geoObjects.add(myPlacemark4);
    myMap.geoObjects.add(myPlacemark5);

    //Элементы управления
    myMap.controls
    // Кнопка изменения масштаба
        .add('zoomControl')
        // Список типов карты
        .add('typeSelector')
        // Кнопка изменения масштаба - справа
        .add('smallZoomControl', {right: 5, top: 75})
        // Стандартный набор кнопок
        .add('mapTools')
        //Линейка масштаба
        .add(new ymaps.control.ScaleLine());
}

ymaps.ready(initTab2);

function initTab2() {

    //Центрирование и выбор масштаба карты
    var myMap = new ymaps.Map('map2', {
        center: [53.195042, 45.018316],
        zoom: 11
    });

    // Создание своей метки
    var myPlacemark1 = new ymaps.Placemark(
        // Координаты метки
        [53.184418, 45.050053], {
            // Свойства метки
            hintContent: '', //Подсказка при наведении на маркер
            iconContent: '',

        }, {
            iconImageHref: '../img/loc2.svg',  // картинка иконки
            iconImageSize: [27, 46],                                      // размеры картинки
            // iconImageOffset: [-70, -40],// смещение картинки

        });

    var myPlacemark2 = new ymaps.Placemark(
        // Координаты метки
        [53.199573, 44.990306], {
            // Свойства метки
            hintContent: '', //Подсказка при наведении на маркер
            iconContent: '',

        }, {
            iconImageHref: '../img/loc.svg',  // картинка иконки
            iconImageSize: [27, 46],                                      // размеры картинки
            // iconImageOffset: [-70, -40],// смещение картинки

        });

    var myPlacemark3 = new ymaps.Placemark(
        // Координаты метки
        [53.142600, 45.021891], {
            // Свойства метки
            hintContent: '', //Подсказка при наведении на маркер
            iconContent: '',

        }, {
            iconImageHref: '../img/loc.svg',  // картинка иконки
            iconImageSize: [27, 46],                                      // размеры картинки
            // iconImageOffset: [-70, -40],// смещение картинки

        });

    var myPlacemark4 = new ymaps.Placemark(
        // Координаты метки
        [53.222287, 44.879508], {
            // Свойства метки
            hintContent: '', //Подсказка при наведении на маркер
            iconContent: '',

        }, {
            iconImageHref: '../img/loc.svg',  // картинка иконки
            iconImageSize: [27, 46],                                      // размеры картинки
            // iconImageOffset: [-70, -40],// смещение картинки

        });

    var myPlacemark5 = new ymaps.Placemark(
        // Координаты метки
        [53.222902, 45.044259], {
            // Свойства метки
            hintContent: '', //Подсказка при наведении на маркер
            iconContent: '',

        }, {
            iconImageHref: '../img/loc.svg',  // картинка иконки
            iconImageSize: [27, 46],                                      // размеры картинки
            // iconImageOffset: [-70, -40],// смещение картинки

        });

    // Добавление метки на карту
    myMap.geoObjects.add(myPlacemark1);
    myMap.geoObjects.add(myPlacemark2);
    myMap.geoObjects.add(myPlacemark3);
    myMap.geoObjects.add(myPlacemark4);
    myMap.geoObjects.add(myPlacemark5);

    //Элементы управления
    myMap.controls
    // Кнопка изменения масштаба
        .add('zoomControl')
        // Список типов карты
        .add('typeSelector')
        // Кнопка изменения масштаба - справа
        .add('smallZoomControl', {right: 5, top: 75})
        // Стандартный набор кнопок
        .add('mapTools')
        //Линейка масштаба
        .add(new ymaps.control.ScaleLine());
}

ymaps.ready(initTab3);

function initTab3() {

    //Центрирование и выбор масштаба карты
    var myMap = new ymaps.Map('map3', {
        center: [53.195042, 45.018316],
        zoom: 11
    });

    // Создание своей метки
    var myPlacemark1 = new ymaps.Placemark(
        // Координаты метки
        [53.184418, 45.050053], {
            // Свойства метки
            hintContent: '', //Подсказка при наведении на маркер
            iconContent: '',

        }, {
            iconImageHref: '../img/loc.svg',  // картинка иконки
            iconImageSize: [27, 46],                                      // размеры картинки
            // iconImageOffset: [-70, -40],// смещение картинки

        });

    var myPlacemark2 = new ymaps.Placemark(
        // Координаты метки
        [53.199573, 44.990306], {
            // Свойства метки
            hintContent: '', //Подсказка при наведении на маркер
            iconContent: '',

        }, {
            iconImageHref: '../img/loc.svg',  // картинка иконки
            iconImageSize: [27, 46],                                      // размеры картинки
            // iconImageOffset: [-70, -40],// смещение картинки

        });

    var myPlacemark3 = new ymaps.Placemark(
        // Координаты метки
        [53.142600, 45.021891], {
            // Свойства метки
            hintContent: '', //Подсказка при наведении на маркер
            iconContent: '',

        }, {
            iconImageHref: '../img/loc2.svg',  // картинка иконки
            iconImageSize: [27, 46],                                      // размеры картинки
            // iconImageOffset: [-70, -40],// смещение картинки

        });

    var myPlacemark4 = new ymaps.Placemark(
        // Координаты метки
        [53.222287, 44.879508], {
            // Свойства метки
            hintContent: '', //Подсказка при наведении на маркер
            iconContent: '',

        }, {
            iconImageHref: '../img/loc.svg',  // картинка иконки
            iconImageSize: [27, 46],                                      // размеры картинки
            // iconImageOffset: [-70, -40],// смещение картинки

        });

    var myPlacemark5 = new ymaps.Placemark(
        // Координаты метки
        [53.222902, 45.044259], {
            // Свойства метки
            hintContent: '', //Подсказка при наведении на маркер
            iconContent: '',

        }, {
            iconImageHref: '../img/loc.svg',  // картинка иконки
            iconImageSize: [27, 46],                                      // размеры картинки
            // iconImageOffset: [-70, -40],// смещение картинки

        });

    // Добавление метки на карту
    myMap.geoObjects.add(myPlacemark1);
    myMap.geoObjects.add(myPlacemark2);
    myMap.geoObjects.add(myPlacemark3);
    myMap.geoObjects.add(myPlacemark4);
    myMap.geoObjects.add(myPlacemark5);

    //Элементы управления
    myMap.controls
    // Кнопка изменения масштаба
        .add('zoomControl')
        // Список типов карты
        .add('typeSelector')
        // Кнопка изменения масштаба - справа
        .add('smallZoomControl', {right: 5, top: 75})
        // Стандартный набор кнопок
        .add('mapTools')
        //Линейка масштаба
        .add(new ymaps.control.ScaleLine());
}

ymaps.ready(initTab4);

function initTab4() {

    //Центрирование и выбор масштаба карты
    var myMap = new ymaps.Map('map4', {
        center: [53.195042, 45.018316],
        zoom: 11
    });

    // Создание своей метки
    var myPlacemark1 = new ymaps.Placemark(
        // Координаты метки
        [53.184418, 45.050053], {
            // Свойства метки
            hintContent: '', //Подсказка при наведении на маркер
            iconContent: '',

        }, {
            iconImageHref: '../img/loc.svg',  // картинка иконки
            iconImageSize: [27, 46],                                      // размеры картинки
            // iconImageOffset: [-70, -40],// смещение картинки

        });

    var myPlacemark2 = new ymaps.Placemark(
        // Координаты метки
        [53.199573, 44.990306], {
            // Свойства метки
            hintContent: '', //Подсказка при наведении на маркер
            iconContent: '',

        }, {
            iconImageHref: '../img/loc.svg',  // картинка иконки
            iconImageSize: [27, 46],                                      // размеры картинки
            // iconImageOffset: [-70, -40],// смещение картинки

        });

    var myPlacemark3 = new ymaps.Placemark(
        // Координаты метки
        [53.142600, 45.021891], {
            // Свойства метки
            hintContent: '', //Подсказка при наведении на маркер
            iconContent: '',

        }, {
            iconImageHref: '../img/loc.svg',  // картинка иконки
            iconImageSize: [27, 46],                                      // размеры картинки
            // iconImageOffset: [-70, -40],// смещение картинки

        });

    var myPlacemark4 = new ymaps.Placemark(
        // Координаты метки
        [53.222287, 44.879508], {
            // Свойства метки
            hintContent: '', //Подсказка при наведении на маркер
            iconContent: '',

        }, {
            iconImageHref: '../img/loc2.svg',  // картинка иконки
            iconImageSize: [27, 46],                                      // размеры картинки
            // iconImageOffset: [-70, -40],// смещение картинки

        });

    var myPlacemark5 = new ymaps.Placemark(
        // Координаты метки
        [53.222902, 45.044259], {
            // Свойства метки
            hintContent: '', //Подсказка при наведении на маркер
            iconContent: '',

        }, {
            iconImageHref: '../img/loc.svg',  // картинка иконки
            iconImageSize: [27, 46],                                      // размеры картинки
            // iconImageOffset: [-70, -40],// смещение картинки

        });

    // Добавление метки на карту
    myMap.geoObjects.add(myPlacemark1);
    myMap.geoObjects.add(myPlacemark2);
    myMap.geoObjects.add(myPlacemark3);
    myMap.geoObjects.add(myPlacemark4);
    myMap.geoObjects.add(myPlacemark5);

    //Элементы управления
    myMap.controls
    // Кнопка изменения масштаба
        .add('zoomControl')
        // Список типов карты
        .add('typeSelector')
        // Кнопка изменения масштаба - справа
        .add('smallZoomControl', {right: 5, top: 75})
        // Стандартный набор кнопок
        .add('mapTools')
        //Линейка масштаба
        .add(new ymaps.control.ScaleLine());
}

ymaps.ready(initTab5);

function initTab5() {

    //Центрирование и выбор масштаба карты
    var myMap = new ymaps.Map('map5', {
        center: [53.195042, 45.018316],
        zoom: 11
    });

    // Создание своей метки
    var myPlacemark1 = new ymaps.Placemark(
        // Координаты метки
        [53.184418, 45.050053], {
            // Свойства метки
            hintContent: '', //Подсказка при наведении на маркер
            iconContent: '',

        }, {
            iconImageHref: '../img/loc2.svg',  // картинка иконки
            iconImageSize: [27, 46],                                      // размеры картинки
            // iconImageOffset: [-70, -40],// смещение картинки

        });

    var myPlacemark2 = new ymaps.Placemark(
        // Координаты метки
        [53.199573, 44.990306], {
            // Свойства метки
            hintContent: '', //Подсказка при наведении на маркер
            iconContent: '',

        }, {
            iconImageHref: '../img/loc.svg',  // картинка иконки
            iconImageSize: [27, 46],                                      // размеры картинки
            // iconImageOffset: [-70, -40],// смещение картинки

        });

    var myPlacemark3 = new ymaps.Placemark(
        // Координаты метки
        [53.142600, 45.021891], {
            // Свойства метки
            hintContent: '', //Подсказка при наведении на маркер
            iconContent: '',

        }, {
            iconImageHref: '../img/loc.svg',  // картинка иконки
            iconImageSize: [27, 46],                                      // размеры картинки
            // iconImageOffset: [-70, -40],// смещение картинки

        });

    var myPlacemark4 = new ymaps.Placemark(
        // Координаты метки
        [53.222287, 44.879508], {
            // Свойства метки
            hintContent: '', //Подсказка при наведении на маркер
            iconContent: '',

        }, {
            iconImageHref: '../img/loc.svg',  // картинка иконки
            iconImageSize: [27, 46],                                      // размеры картинки
            // iconImageOffset: [-70, -40],// смещение картинки

        });

    var myPlacemark5 = new ymaps.Placemark(
        // Координаты метки
        [53.222902, 45.044259], {
            // Свойства метки
            hintContent: '', //Подсказка при наведении на маркер
            iconContent: '',

        }, {
            iconImageHref: '../img/loc.svg',  // картинка иконки
            iconImageSize: [27, 46],                                      // размеры картинки
            // iconImageOffset: [-70, -40],// смещение картинки

        });

    // Добавление метки на карту
    myMap.geoObjects.add(myPlacemark1);
    myMap.geoObjects.add(myPlacemark2);
    myMap.geoObjects.add(myPlacemark3);
    myMap.geoObjects.add(myPlacemark4);
    myMap.geoObjects.add(myPlacemark5);

    //Элементы управления
    myMap.controls
    // Кнопка изменения масштаба
        .add('zoomControl')
        // Список типов карты
        .add('typeSelector')
        // Кнопка изменения масштаба - справа
        .add('smallZoomControl', {right: 5, top: 75})
        // Стандартный набор кнопок
        .add('mapTools')
        //Линейка масштаба
        .add(new ymaps.control.ScaleLine());
}

ymaps.ready(initTab6);

function initTab6() {

    //Центрирование и выбор масштаба карты
    var myMap = new ymaps.Map('map6', {
        center: [53.195042, 45.018316],
        zoom: 11
    });

    // Создание своей метки
    var myPlacemark1 = new ymaps.Placemark(
        // Координаты метки
        [53.184418, 45.050053], {
            // Свойства метки
            hintContent: '', //Подсказка при наведении на маркер
            iconContent: '',

        }, {
            iconImageHref: '../img/loc.svg',  // картинка иконки
            iconImageSize: [27, 46],                                      // размеры картинки
            // iconImageOffset: [-70, -40],// смещение картинки

        });

    var myPlacemark2 = new ymaps.Placemark(
        // Координаты метки
        [53.199573, 44.990306], {
            // Свойства метки
            hintContent: '', //Подсказка при наведении на маркер
            iconContent: '',

        }, {
            iconImageHref: '../img/loc2.svg',  // картинка иконки
            iconImageSize: [27, 46],                                      // размеры картинки
            // iconImageOffset: [-70, -40],// смещение картинки

        });

    var myPlacemark3 = new ymaps.Placemark(
        // Координаты метки
        [53.142600, 45.021891], {
            // Свойства метки
            hintContent: '', //Подсказка при наведении на маркер
            iconContent: '',

        }, {
            iconImageHref: '../img/loc.svg',  // картинка иконки
            iconImageSize: [27, 46],                                      // размеры картинки
            // iconImageOffset: [-70, -40],// смещение картинки

        });

    var myPlacemark4 = new ymaps.Placemark(
        // Координаты метки
        [53.222287, 44.879508], {
            // Свойства метки
            hintContent: '', //Подсказка при наведении на маркер
            iconContent: '',

        }, {
            iconImageHref: '../img/loc.svg',  // картинка иконки
            iconImageSize: [27, 46],                                      // размеры картинки
            // iconImageOffset: [-70, -40],// смещение картинки

        });

    var myPlacemark5 = new ymaps.Placemark(
        // Координаты метки
        [53.222902, 45.044259], {
            // Свойства метки
            hintContent: '', //Подсказка при наведении на маркер
            iconContent: '',

        }, {
            iconImageHref: '../img/loc.svg',  // картинка иконки
            iconImageSize: [27, 46],                                      // размеры картинки
            // iconImageOffset: [-70, -40],// смещение картинки

        });

    // Добавление метки на карту
    myMap.geoObjects.add(myPlacemark1);
    myMap.geoObjects.add(myPlacemark2);
    myMap.geoObjects.add(myPlacemark3);
    myMap.geoObjects.add(myPlacemark4);
    myMap.geoObjects.add(myPlacemark5);

    //Элементы управления
    myMap.controls
    // Кнопка изменения масштаба
        .add('zoomControl')
        // Список типов карты
        .add('typeSelector')
        // Кнопка изменения масштаба - справа
        .add('smallZoomControl', {right: 5, top: 75})
        // Стандартный набор кнопок
        .add('mapTools')
        //Линейка масштаба
        .add(new ymaps.control.ScaleLine());
}

ymaps.ready(initTab7);

function initTab7() {

    //Центрирование и выбор масштаба карты
    var myMap = new ymaps.Map('map7', {
        center: [53.195042, 45.018316],
        zoom: 11
    });

    // Создание своей метки
    var myPlacemark1 = new ymaps.Placemark(
        // Координаты метки
        [53.184418, 45.050053], {
            // Свойства метки
            hintContent: '', //Подсказка при наведении на маркер
            iconContent: '',

        }, {
            iconImageHref: '../img/loc.svg',  // картинка иконки
            iconImageSize: [27, 46],                                      // размеры картинки
            // iconImageOffset: [-70, -40],// смещение картинки

        });

    var myPlacemark2 = new ymaps.Placemark(
        // Координаты метки
        [53.199573, 44.990306], {
            // Свойства метки
            hintContent: '', //Подсказка при наведении на маркер
            iconContent: '',

        }, {
            iconImageHref: '../img/loc.svg',  // картинка иконки
            iconImageSize: [27, 46],                                      // размеры картинки
            // iconImageOffset: [-70, -40],// смещение картинки

        });

    var myPlacemark3 = new ymaps.Placemark(
        // Координаты метки
        [53.142600, 45.021891], {
            // Свойства метки
            hintContent: '', //Подсказка при наведении на маркер
            iconContent: '',

        }, {
            iconImageHref: '../img/loc.svg',  // картинка иконки
            iconImageSize: [27, 46],                                      // размеры картинки
            // iconImageOffset: [-70, -40],// смещение картинки

        });

    var myPlacemark4 = new ymaps.Placemark(
        // Координаты метки
        [53.222287, 44.879508], {
            // Свойства метки
            hintContent: '', //Подсказка при наведении на маркер
            iconContent: '',

        }, {
            iconImageHref: '../img/loc.svg',  // картинка иконки
            iconImageSize: [27, 46],                                      // размеры картинки
            // iconImageOffset: [-70, -40],// смещение картинки

        });

    var myPlacemark5 = new ymaps.Placemark(
        // Координаты метки
        [53.222902, 45.044259], {
            // Свойства метки
            hintContent: '', //Подсказка при наведении на маркер
            iconContent: '',

        }, {
            iconImageHref: '../img/loc2.svg',  // картинка иконки
            iconImageSize: [27, 46],                                      // размеры картинки
            // iconImageOffset: [-70, -40],// смещение картинки

        });

    // Добавление метки на карту
    myMap.geoObjects.add(myPlacemark1);
    myMap.geoObjects.add(myPlacemark2);
    myMap.geoObjects.add(myPlacemark3);
    myMap.geoObjects.add(myPlacemark4);
    myMap.geoObjects.add(myPlacemark5);

    //Элементы управления
    myMap.controls
    // Кнопка изменения масштаба
        .add('zoomControl')
        // Список типов карты
        .add('typeSelector')
        // Кнопка изменения масштаба - справа
        .add('smallZoomControl', {right: 5, top: 75})
        // Стандартный набор кнопок
        .add('mapTools')
        //Линейка масштаба
        .add(new ymaps.control.ScaleLine());
}

new WOW().init();