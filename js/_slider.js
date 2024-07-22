$(document).ready(function () {
    $('.header__slider').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        adaptiveHeight: true,
        fade: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                }
            }
        ]
    });

    $('.news__slider').slick({
        dots: true,
        arrows: true,
        infinite: true,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false,
                    swipe: true,
                }
            }
        ]
    });

});
