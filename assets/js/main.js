/*
 jQuery;
 */

"use strict";


jQuery(document).ready(function($) {

    $(window).load(function() {
        $(".loaded").fadeOut();
        $(".preloader").delay(1000).fadeOut("slow");
    });




    jQuery('.scrollup').click(function() {
        $("html, body").animate({ scrollTop: 0 }, 2000);
        return false;
    });

    jQuery('.nav a').bind('click', function() {
        $('html , body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top - 80
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });


    jQuery(window).scroll(function() {
        var top = jQuery(document).scrollTop();
        var height = 300;
        //alert(batas);

        if (top > height) {
            jQuery('.navbar-fixed-top').addClass('menu-scroll');
        } else {
            jQuery('.navbar-fixed-top').removeClass('menu-scroll');
        }
    });
    // Scroll up 

    $(window).scroll(function() {
        if ($(this).scrollTop() > 600) {
            $('.scrollup').fadeIn('slow');
        } else {
            $('.scrollup').fadeOut('slow');
        }
    });
    $('.scrollup').click(function() {
        $("html, body").animate({ scrollTop: 0 }, 1000);
        return false;
    });

    new WOW().init();


    //  GALLERY
    $('.tm-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    $('.tm-testimonials-carousel').slick({
        dots: true,
        prevArrow: false,
        nextArrow: false,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1
            }
        }]
    });

    // Gallery
    $('.tm-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    $('.tm-gallery').slick({
        dots: true,
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 2,
        responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
    window.addEventListener('resize', function() {
        background_image_parallax($(".tm-parallax"), 0.30, true);
    }, true);
});