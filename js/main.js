// Testimonial Carousel
new Glide('.glide', {
    type: 'carousel',
    animationDuration: 600
}).mount();

new Glide('.gallery', {
    type: 'carousel',
    animationDuration: 600,
}).mount();

$('.gallery').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    // other options

    gallery: {
        enabled: true,
        navigateByImgClick: true
    }
});

// Lazy Load Images
var observer = lozad(); // lazy loads elements with default selector as '.lozad'
observer.observe();

// On viewport enter perform animations

$(function () {

    $('.heading__bar--1').onScreen({
        toggleClass: false,
        doIn: function () {
            $(this).addClass('heading__bar-animation');
            $(this).addClass('heading__bar-animation--1');
        }
    });

    $('.heading__bar--2').onScreen({
        toggleClass: false,
        doIn: function () {
            $(this).addClass('heading__bar-animation');
            $(this).addClass('heading__bar-animation--2');
        }
    });

    $('.heading__bar--3').onScreen({
        toggleClass: false,
        doIn: function () {
            $(this).addClass('heading__bar-animation');
            $(this).addClass('heading__bar-animation--3');
        }
    });

    $('.heading__bar--4').onScreen({
        toggleClass: false,
        doIn: function () {
            $(this).addClass('heading__bar-animation');
            $(this).addClass('heading__bar-animation--4');
        }
    });

    $('.heading__bar--5').onScreen({
        toggleClass: false,
        doIn: function () {
            $(this).addClass('heading__bar-animation');
            $(this).addClass('heading__bar-animation--5');
        }
    });
});


$(document).ready(function () {
    // Nav Link Offset
    var offset;

    if ($(window.innerWidth > 951)) {
        offset = 80;
    } else if ($(window.innerWidth < 951)) {
        offset = 0;
    }

    $("#services-link").click(function () {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".section--services").offset().top - offset
        }, 0);
    });

    $("#about-link").click(function () {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".section--about").offset().top - offset
        }, 0);
    });

    $("#testimonials-link").click(function () {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".section--testimonials").offset().top - offset
        }, 0);
    });

    $("#gallery-link").click(function () {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".section--gallery").offset().top - offset
        }, 0);
    });

    $("#contact-link").click(function () {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".section--contact").offset().top - offset
        }, 0);
    });

    $("#icon-link").click(function () {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".section--services").offset().top - offset
        }, 0);
    });

    $("#get-quote-link-1").click(function () {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".section--contact").offset().top - offset
        }, 0);
    });

    $("#get-quote-link-2").click(function () {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".section--contact").offset().top - offset
        }, 0);
    });

    // Close Mobile Nav bar on press
    const navCheckbox = $('.checkbox');
    const navItems = $('.nav__item');
    navItems.click(function () {
        navCheckbox.prop('checked', false); // Unchecks it
    });

    $('.exit-btn').click(function() {
        $('.message-bg').fadeOut(500);
    });
});