$(document).ready(function () {
    // Плавний скролл
    $('.btn-swipe').click(() => $('html, body').animate({ scrollTop: $('#about-us').offset().top }, 100));

    // Додавання тексту при натисканні на кнопку
    $('.btn').on('click', function () {
        const additionalText = $(this).closest('.article').find('.additional-text');
        additionalText.slideToggle();
        $(this).text((i, text) => text === "MORE DETAILS" ? "LESS DETAILS" : "MORE DETAILS");
    });

    // Використання Intersection Observer для анімації при появі в полі зору
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                $(entry.target).find('.article').each((index, el) => {
                    $(el).delay(500 * index).queue(next => {
                        $(el).removeClass('hidden').addClass('fade-in');
                        next();
                    });
                });
                observer.unobserve(entry.target); // Прибираємо спостерігач після анімації
            }
        });
    }, { threshold: 0.5 }); // Відсоток видимості, при якому спрацьовує анімація

    observer.observe(document.querySelector('#about-us'));

    // Ініціалізація Fancybox
    $('[data-fancybox="gallery"]').fancybox({
        buttons: ["close"],
        loop: true,
        protect: true
    });

    // Додавання нового блоку фото та змінння тексту на кнопці
    $('#see-more-btn').on('click', () => {
        $('#more-photos').slideToggle(() => {
            $('#see-more-btn').text($('#more-photos').is(':visible') ? 'SEE LESS' : 'SEE MORE');
        });
    });

    // Відкривання та закривання бургер меню
    $('#burger-menu').click(function () {
        $('#menu-list').toggleClass('active');
    });

    $('.menu-item__link').click(function () {
        $('#menu-list').removeClass('active');
    });
});

// Iніціалізація GoogleMaps
let map;

async function initMap() {
    const { Map } = await google.maps.importLibrary("maps");

    map = new Map(document.getElementById("map"), {
        center: { lat: 46.46954, lng: 30.74354 },
        zoom: 16,
        mapId: 'd0ab2965df73818c',
        disableDefaultUI: true,
    });

    const icon = './assets/images/pin.svg';
    const markerElement = document.createElement('div');
    markerElement.innerHTML = `<img src="${icon}" alt="Marker Icon" style="width: 100px; height: 100px;">`;

    const marker = new google.maps.marker.AdvancedMarkerElement({
        position: { lat: 46.46954, lng: 30.74040 },
        map: map,
        content: markerElement,
    });
}

window.initMap = initMap;
