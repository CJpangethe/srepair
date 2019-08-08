$(document).ready(function(){

    // Slick slider  
    var rev = $('.slider__inner');
    
    rev.on('init', function(event, slick, currentSlide) {
        var cur = $(slick.$slides[slick.currentSlide]),
            next = cur.next(),
            prev = cur.prev();

        prev.addClass('slick-sprev');
        next.addClass('slick-snext');
        cur.removeClass('slick-snext').removeClass('slick-sprev');
        slick.$prev = prev;
        slick.$next = next;
    }).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        var cur = $(slick.$slides[nextSlide]);
        slick.$prev.removeClass('slick-sprev');
        slick.$next.removeClass('slick-snext');
        next = cur.next();
        prev = cur.prev();
        prev.prev();
        prev.next();
        prev.addClass('slick-sprev');
        next.addClass('slick-snext');
        slick.$prev = prev;
        slick.$next = next;
        cur.removeClass('slick-snext').removeClass('slick-sprev');
    });

    rev.slick({
        speed: 100,
        arrows: true,
        dots: false,
        focusOnSelect: true,
        prevArrow: '<button class="slick__prevarr"> </button>',
        nextArrow: '<button class="slick__nextarr"> </button>',
        infinite: true,
        centerMode: true,
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '0',
        swipe: true,
        customPaging: function(slider, i) {
            return '';
        }
    });


    // Email Ajax Send

    $('.form').submit(function() {
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: th.serialize()
        }).done(function() {
            alert("Заявка отправлена!");
            setTimeout(function() {
                th.trigger('reset');
            }, 1000);
        });
        return false;
    });

    // Burger menu
    var nav = $('#headerNav');
    var butn = $('.burger');

    butn.on('click', function(e) {
        e.preventDefault();
        nav.toggleClass('show');
    });




});