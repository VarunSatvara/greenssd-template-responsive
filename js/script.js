$(document).ready(function() {
    $(".nav_btn").click(function() {
        $("body").toggleClass("intro");
    });
})
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.bottom-nav').addClass('box-hover');
        } else {
            $('.bottom-nav').removeClass('box-hover');
        }
    });
});

$(document).ready(function() {
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 1000,
        autoplay: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows: false,
        dots: true
    });
});



$(document).ready(function() {

    $('.profile-slider').slick({
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 2,
        adaptiveHeight: true,
        autoplay: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        arrows: false,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    });

});