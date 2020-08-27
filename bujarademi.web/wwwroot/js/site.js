$(window).on('load', function () {    

    /*======== Preloader ========*/
    $(".loader").fadeOut();
    $(".preloader").delay(1000).fadeOut();


    /*======== Isotope Portfolio Setup ========*/
    if ($('.portfolio-items').length) {
        var $elements = $(".portfolio-items"),
            $filters = $('.portfolio-filter ul li');
        $elements.isotope();

        $filters.on('click', function () {
            $filters.removeClass('active');
            $(this).addClass('active');
            var selector = $(this).data('filter');
            $(".portfolio-items").isotope({
                filter: selector,
                hiddenStyle: {
                    transform: 'scale(.2) skew(30deg)',
                    opacity: 0
                },
                visibleStyle: {
                    transform: 'scale(1) skew(0deg)',
                    opacity: 1,
                },
                transitionDuration: '.5s'
            });
        });
    }

    /*======== Blogs Masonry Setup ========*/
    $('.blogs-masonry').isotope({ layoutMode: 'moduloColumns' });

    
});

$(document).ready(function () {
    "use strict";    
    /*======== Fitty Setup ========*/
    fitty('.header-name', {
        multiLine: false,
        maxSize: 20,
        minSize: 10
    });

    /*======== Active Current Link ========*/
    $('.nav-menu a').on('click', function () {
        if ($('.header-content.on').length) {
            $('.header-content').removeClass('on');
        }
    });

    /*======== Mobile Toggle Click Setup ========*/
    $('.header-toggle').on('click', function () {
        $('header .header-content').toggleClass('on');
    });    

    var hash = location.hash;
    console.log('loading content for hash: ' + hash);
    ajaxLoadContent(hash);
});

function ajaxLoadContent(hash) {
    var profileId = $('#profileId').val();
    
    switch (hash) {        
        case "#about":
            $('#about').load('/Index?handler=AboutPartial');            
            break;
        case "#resume": 
            $('#resume').load('/Index?handler=ResumePartial&profileId=' + profileId);            
            break;
        case "#portfolio":
            $('#portfolio').load('/Index?handler=PortfolioPartial&profileId=' + profileId);            
            break;
        case "#blog":
            $('#blog').load('/Index?handler=BlogPartial');            
            break;
        case "#contact":
            $('#contact').load('/Index?handler=ContactPartial');
            break;
        default:
            break;
    }
}
