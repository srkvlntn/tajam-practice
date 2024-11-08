$(document).ready(function() {
    $('.menu-opener').on('click', function(e) { // Наша бургер кнопка на которую мы будем нажимать
        e.preventDefault();
        $('body').toggleClass('mobile-menu-active') // body это селектор на который будет довешиваться класс mobile-menu-active при нажатии на бургер кнопку
    })
})



$(document).ready(function(){
    $('.intro-slider').slick({

        responsive: [
            {
                breakpoint: 1024,
                settings: {

                }
            },
            {
                breakpoint: 768,
                settings: {

                }
            },
            {
                breakpoint: 480,
                settings: {

                }
            }

        ]
});
});




