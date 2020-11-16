$('.btn-burger').click(function () {
   $('.header-bottom').fadeToggle();
});

$('.btn-close').click(function () {
    $('.header-bottom').fadeOut();
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

$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    $('.gallery-slider').slick('reinit');
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

// модальные окна (несколько)
$(document).ready(function () {
    var overlay = $('.overlay');
    var open_modal = $('.open_modal');
    var close = $('.modal__close, .overlay');
    var modal = $('.modal__div');

    open_modal.click(function (event) {
        event.preventDefault();
        var div = $(this).attr('href');
        overlay.fadeIn(400,
            function () {
                $(div)
                    .css('display', 'flex')
                    .animate({
                        opacity: 1,
                        top: '50%'
                    }, 200);
            });
    });

    close.click(function () {
        modal
            .animate({
                    opacity: 0,
                    top: '45%'
                }, 200,
                function () {
                    $(this).css('display', 'none');
                    overlay.fadeOut(400);
                }
            );
    });
});
//end



// Инициализация карты
ymaps.ready(init);

function init () {

    //Центрирование и выбор масштаба карты
    var myMap = new ymaps.Map('map1', {
        center: [55.753215, 37.622504],
        zoom: 11
    });

    // Создание своей метки
    var myPlacemark1 = new ymaps.Placemark(
        // Координаты метки
        [56.301833, 38.241398] , {
            // Свойства метки
            hintContent: '', //Подсказка при наведении на маркер
            iconContent: '',

        }, {
            iconImageHref: 'img/loc.svg',  // картинка иконки
            iconImageSize: [27, 46],                                      // размеры картинки
            // iconImageOffset: [-70, -40],// смещение картинки

        });

    var myPlacemark2 = new ymaps.Placemark(
        // Координаты метки
        [55.733984, 37.586670] , {
            // Свойства метки
            hintContent: '', //Подсказка при наведении на маркер
            iconContent: '',

        }, {
            iconImageHref: 'img/loc.svg',  // картинка иконки
            iconImageSize: [27, 46],                                      // размеры картинки
            // iconImageOffset: [-70, -40],// смещение картинки

        });

    var myPlacemark3 = new ymaps.Placemark(
        // Координаты метки
        [55.755814, 37.617635] , {
            // Свойства метки
            hintContent: '', //Подсказка при наведении на маркер
            iconContent: '',

        }, {
            iconImageHref: 'img/loc.svg',  // картинка иконки
            iconImageSize: [27, 46],                                      // размеры картинки
            // iconImageOffset: [-70, -40],// смещение картинки

        });

    var myPlacemark4 = new ymaps.Placemark(
        // Координаты метки
        [55.771525, 37.683545] , {
            // Свойства метки
            hintContent: '', //Подсказка при наведении на маркер
            iconContent: '',

        }, {
            iconImageHref: 'img/loc.svg',  // картинка иконки
            iconImageSize: [27, 46],                                      // размеры картинки
            // iconImageOffset: [-70, -40],// смещение картинки

        });

    var myPlacemark5 = new ymaps.Placemark(
        // Координаты метки
        [55.824172, 37.516521] , {
            // Свойства метки
            hintContent: '', //Подсказка при наведении на маркер
            iconContent: '',

        }, {
            iconImageHref: 'img/loc.svg',  // картинка иконки
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
        .add('smallZoomControl', { right: 5, top: 75 })
        // Стандартный набор кнопок
        .add('mapTools')
        //Линейка масштаба
        .add(new ymaps.control.ScaleLine());
}

