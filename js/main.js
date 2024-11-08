$(document).ready(function () {
    $('.menu-opener').on('click', function (e) {
        e.preventDefault();
        $('body').toggleClass('mobile-menu-active')
    })
})


$(document).ready(function () {
    $('.intro-slider').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 15000,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 15000,
                    arrows: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    dots: true,
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 15000,
                    arrows: false,
                }
            }

        ]
    });
});




