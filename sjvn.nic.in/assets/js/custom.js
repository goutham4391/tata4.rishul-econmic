$(document).ready(function () {
    // Mobile Menu    
    //$('.menu-icon').on("click", function (event) {
    //    debugger;
    //    event.preventDefault();
    //    $('body').toggleClass('mobile-menu-open');
    //    $('html').toggleClass('no-scroll');
    //});

    //$('.menu-icon').on("click", function (event) {
    //    event.preventDefault();
    //    $('body').toggleClass('mobile-menu-open');
    //    $('html').toggleClass('no-scroll');
    //    $('.meganavOverlay').toggleClass("meganavOverlay--show");
    //});

    //$(document).on('focus click', '.menu-icon', function (e) {
    //    e.preventDefault();
    //    $('body').toggleClass('mobile-menu-open');
    //    $('html').toggleClass('no-scroll');
    //    $('.meganavOverlay').toggleClass("meganavOverlay--show");
    //});

    function menuClick() {
        if ($('body').hasClass("mobile-menu-open")) {
            $('body').removeClass('mobile-menu-open');
            $('html').removeClass('no-scroll');
            $('.meganavOverlay').removeClass("meganavOverlay--show");
        }
        else {
            $('body').addClass('mobile-menu-open');
            $('html').addClass('no-scroll');
            $('.meganavOverlay').addClass("meganavOverlay--show");
        }
    }


    $(document).on('focus', '.menuicon', function (e) {
        e.preventDefault();
       
        menuClick();
    });

    $(document).on('click', '.menu-icon', function (e) {
        
        menuClick();
    });



    $(document).on('focusout', '.lastnav', function (e) {     
        $('body').removeClass('mobile-menu-open');
        $('html').removeClass('no-scroll');
        $('.meganavOverlay').removeClass("meganavOverlay--show");
    });  

    $(document).on('click', '.meganavOverlay--show', function (e) {
        e.preventDefault();
        $('body').toggleClass('mobile-menu-open');
        $('html').toggleClass('no-scroll');
        $('.meganavOverlay').toggleClass("meganavOverlay--show");
    });

    $(document).on('click', '.menu li a .caret', function (e) {
        if ($(this).hasClass("caret-down")) {
            $(".menu .has-menu .caret").removeClass('caret-down');
            $(".menu .has-menu").removeClass("showsubmenu");
        }
        else {
            $(this).addClass('caret-down');
            $(".menu .has-menu").removeClass("showsubmenu");
            $(this).parents(".has-menu").addClass("showsubmenu");
        }
    });

    $(document).on('click', '.menu li a .caret2', function (e) {
        if ($(this).hasClass("caret-down")) {
            $(".menu .has-menu .caret2").removeClass('caret-down');
            $(".menu .has-menu a").removeClass("showsubmenu2");
        }
        else {
            $(this).addClass('caret-down');
            $(".menu .has-menu a").removeClass("showsubmenu2");
            $(this).parent("a").addClass("showsubmenu2");
        }
    });


    //$(window).scroll(function () {
    //    var scroll = $(window).scrollTop();
    //    if (scroll >= 200) {
    //        $(".top-header").addClass("top-fix-header");
    //    } else {
    //        $(".top-header").removeClass("top-fix-header");
    //    }
    //});

    var $sidebar = $(".right-menu"),
        $window = $(window),
        offset = $sidebar.offset(),
        topPadding = 85;

    if ($sidebar) {
        $window.scroll(function () {
            if ($window.scrollTop() > offset.top) {
                $(".right-menu").addClass("rightmenu-position");
            } else {
                $(".right-menu").removeClass("rightmenu-position");
            }
        });
    }

    //$('.menu li a .caret').on("click", function () {
    //    if ($(this).hasClass("caret-down")) {
    //        $(".menu .has-menu .caret").removeClass('caret-down');
    //        $(".menu .has-menu").removeClass("showsubmenu");
    //    }
    //    else {
    //        $(this).addClass('caret-down');
    //        $(".menu .has-menu").removeClass("showsubmenu");
    //        $(this).parents(".has-menu").addClass("showsubmenu");
    //    }
    //});


    //$('.menu li a .caret2').on("click", function () {
    //    if ($(this).hasClass("caret-down")) {
    //        $(".menu .has-menu .caret2").removeClass('caret-down');
    //        $(".menu .has-menu a").removeClass("showsubmenu2");
    //    }
    //    else {
    //        $(this).addClass('caret-down');
    //        $(".menu .has-menu a").removeClass("showsubmenu2");
    //        $(this).parent("a").addClass("showsubmenu2");
    //    }
    //});

    setTimeout(function () {
        $(".notification-slider").slick({
            autoplay: true,
            arrows: true,
            autoplaySpeed: 5000,
            speed: 800,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            prevArrow: jQuery('.alert-prev'),
            nextArrow: jQuery('.alert-next')
        });
    }, 2500);

    $(".latestupdate-slider").slick({
        autoplay: true,
        arrows: false,
        autoplaySpeed: 2000,
        speed: 800,
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        vertical: true,
        centerMode: false,
        centerPadding: '30px',
        adaptiveHeight: true,
        prevArrow: jQuery('.latestupdate-prev'),
        nextArrow: jQuery('.latestupdate-next'),
    });
    $(".alerthome-slider").slick({
        autoplay: true,
        arrows: false,
        autoplaySpeed: 2000,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        prevArrow: jQuery('.alerthome-prev'),
        nextArrow: jQuery('.alerthome-next'),
    });

    $(".homeslider").slick({
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        loop: true,
        arrows: true,
        prevArrow: jQuery('.home-prev'),
        nextArrow: jQuery('.home-next'),
        responsive: [{
            breakpoint: 1025,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
            }
        }
        ],
    });
    $(".aboutsjvn").slick({
        autoplay: true,
        autoplaySpeed: 7000,
        speed: 800,
        arrows: true,
        vertical: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
    });
    $(".ourbusiness").slick({
        autoplay: false,
        speed: 800,
        variableWidth: true,
        centerMode: true,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        autoplaySpeed: 1000,
        prevArrow: jQuery('.ourbusiness-prev'),
        nextArrow: jQuery('.ourbusiness-next'),
        responsive: [{
            breakpoint: 1401,
            settings: {
                variableWidth: false,
                centerMode: false,
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1100,
            settings: {
                variableWidth: false,
                centerMode: false,
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 992,
            settings: {
                variableWidth: false,
                centerMode: false,
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 569,
            settings: {
                slidesToShow: 1,
                centerMode: false,
                variableWidth: false,
            }
        }
        ],
    });
    $(".quicklinks").slick({
        autoplay: true,
        speed: 800,
        arrows: true,
        vertical: false,
        lazyLoad: 'ondemand',
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        prevArrow: jQuery('.slick-prev2'),
        nextArrow: jQuery('.slick-next2'),
        responsive: [{
            breakpoint: 1280,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 1023,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

        ]
    });

    $(".footerlogoslider").slick({
        autoplay: true,
        speed: 800,
        arrows: true,
        vertical: false,
        lazyLoad: 'ondemand',
        slidesToShow: 7,
        slidesToScroll: 1,
        infinite: true,
        prevArrow: jQuery('.footerslick-prev'),
        nextArrow: jQuery('.footerslick-next'),
        responsive: [{
            breakpoint: 1280,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 1023,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

        ]
    });

    $(".portfolio").slick({
        autoplay: true,
        speed: 800,
        arrows: true,
        vertical: false,
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        adaptiveHeight: true,
        prevArrow: jQuery('.portfolio-prev'),
        nextArrow: jQuery('.portfolio-next'),
        responsive: [{
            breakpoint: 1166,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 2,
                centerMode: false,
                variableWidth: false,
            }
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 1,
                centerMode: false,
                variableWidth: false,
            }
        }

        ],
    });
    $(".boddetails").slick({
        autoplay: true,
        speed: 800,
        arrows: true,
        vertical: false,
        lazyLoad: 'ondemand',
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        prevArrow: jQuery('.boddetails-prev'),
        nextArrow: jQuery('.boddetails-next'),
        responsive: [{
            breakpoint: 1025,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
            }
        },
        ],
    });

    $(".achievement-slider").slick({
        autoplay: true,
        speed: 800,
        arrows: true,
        vertical: false,
        lazyLoad: 'ondemand',
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        adaptiveHeight: true,
        prevArrow: jQuery('.achievement-prev'),
        nextArrow: jQuery('.achievement-next'),
        responsive: [{
            breakpoint: 1025,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                centerMode: false,
                variableWidth: false,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                centerMode: false,
                variableWidth: false,
            }
        }
        ],
    });
    if (jQuery('.survey-investigation').length >= 3) {
        $(".survey-investigation").slick({
            autoplay: false,
            speed: 800,
            arrows: true,
            vertical: false,
            lazyLoad: 'ondemand',
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            adaptiveHeight: true,
            prevArrow: jQuery('.survey-prev'),
            nextArrow: jQuery('.survey-next'),
            responsive: [{
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    variableWidth: false,
                }
            }
            ],
        });
    }

    //if (jQuery('.preconstruction').length >= 3) {
    $(".preconstruction").slick({
        autoplay: false,
        speed: 800,
        arrows: true,
        vertical: false,
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        adaptiveHeight: true,
        prevArrow: jQuery('.pre-prev'),
        nextArrow: jQuery('.pre-next'),
        responsive: [{
            breakpoint: 1025,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                centerMode: false,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                centerMode: false,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                centerMode: false,
                variableWidth: false,
            }
        }
        ],
    });
    //}
    $(".swachhtapakhwada").slick({
        autoplay: true,
        speed: 800,
        arrows: true,
        vertical: false,
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        adaptiveHeight: true,
        prevArrow: jQuery('.swacchta-prev'),
        nextArrow: jQuery('.swacchta-next'),
        responsive: [{
            breakpoint: 1025,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                centerMode: false,
                variableWidth: false,
            }
        }
        ],
    });
    if (jQuery('.underconstruction').length >= 3) {
        $(".underconstruction").slick({
            autoplay: true,
            speed: 800,
            arrows: true,
            vertical: false,
            lazyLoad: 'ondemand',
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            adaptiveHeight: true,
            prevArrow: jQuery('.underc-prev'),
            nextArrow: jQuery('.underc-next'),
            responsive: [{
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    variableWidth: false,
                }
            }
            ],
        });
    }
    $(".underdevelopemnt").slick({
        autoplay: true,
        speed: 800,
        arrows: true,
        vertical: false,
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        adaptiveHeight: true,
        prevArrow: jQuery('.underde-prev'),
        nextArrow: jQuery('.underde-next'),
        responsive: [{
            breakpoint: 1025,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                centerMode: false,
                variableWidth: false,
            }
        }
        ],
    });

    if (jQuery('.underoperation').length >= 3) {
        $(".underoperation").slick({
            autoplay: true,
            speed: 800,
            arrows: true,
            vertical: false,
            lazyLoad: 'ondemand',
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            adaptiveHeight: true,
            prevArrow: jQuery('.underop-prev'),
            nextArrow: jQuery('.underop-next'),
            responsive: [{
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    variableWidth: false,
                }
            }
            ],
        });
    }
    $(".swachhtapakhwada1").slick({
        autoplay: true,
        speed: 800,
        arrows: true,
        vertical: false,
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        adaptiveHeight: true,
        prevArrow: jQuery('.swacchta1-prev'),
        nextArrow: jQuery('.swacchta1-next'),
        responsive: [{
            breakpoint: 1025,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                centerMode: false,
                variableWidth: false,
            }
        }
        ],
    });
});

$(document).ready(function () {

    $(".search a").on("click", function () {
        $(".search-input").toggleClass("show");
        $(".notification-fix").removeClass("show");
    });

    //$(".alert-icon a").on("click", function () {
    //    $(".notification-fix").toggleClass("show");
    //    $(".search-input").removeClass("show");
    //});

    //$(document).on('click', '.alert-icon a', function (e) {
    //    e.preventDefault();        
    //    $(".notification-fix").toggleClass("show");
    //    $(".search-input").removeClass("show");
    //});

    $(document).on('click', '.customShowHideNotifications', function (e) {
        e.preventDefault();
        $(".notification-fix").toggleClass("show");
        $(".search-input").removeClass("show");
    });

    /* Start Font size + - code */
    jQuery('html').addClass('body-font-14');
    jQuery('html').on('click', '.increasefont', function () {
        var cl = jQuery('html').attr("class").split(" ");
        var clName = '';

        for (var i = 0; i < cl.length; i++) {
            r = cl[i].search(/body-font-+/);
            if (r >= 0) {
                clName = cl[i];
            }
        }
        var font_size = clName;
        font_size_num = font_size.split("body-font-");
        font_size_num = font_size_num[1];
        font_size_num = parseInt(font_size_num) + 1;
        if (parseInt(font_size_num) <= 16) {
            jQuery('html').removeClass(function (index, className) {
                return (className.match(/(^|\s)body-font-\S+/g) || []).join(' ');
            });
            jQuery('html').addClass('body-font-' + font_size_num);
        }
    });
    jQuery('html').on('click', '.decreasefont', function () {
        var cl = jQuery('html').attr("class").split(" ");
        var clName = '';
        for (var i = 0; i < cl.length; i++) {
            r = cl[i].search(/body-font-+/);
            if (r >= 0) {
                clName = cl[i];
            }
        }
        var font_size = clName;
        font_size_num = font_size.split("body-font-");
        font_size_num = font_size_num[1];
        font_size_num = parseInt(font_size_num) - 1;
        if (parseInt(font_size_num) >= 12) {
            jQuery('html').removeClass(function (index, className) {
                return (className.match(/(^|\s)body-font-\S+/g) || []).join(' ');
            });
            jQuery('html').addClass('body-font-' + font_size_num);
        }
    });
    jQuery('html').on('click', '.resetfont', function () {
        jQuery('html').removeClass(function (index, className) {
            return (className.match(/(^|\s)body-font-\S+/g) || []).join(' ');
        });
        jQuery('html').addClass('body-font-14')
    });

    jQuery(document).on('click', '.search-submit', function (e) {
        var form = jQuery(this).closest('form');
        var value = form.find('input[name="s"]').val();
        value = jQuery.trim(value);
        if (value === '') {
            e.preventDefault();
            return false;
        }
    })
    /* End Font size + - code */

    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $('#backtotop').fadeIn();
        } else {
            $('#backtotop').fadeOut();
        }
    });
    $("#backtotop").click(function () {
        $("html, body").animate({ scrollTop: 0 });
    });
    $('.collapse').collapse()
});


if ($('#back-to-top').length) {
    var scrollTrigger = 200, // px

        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 500);
    });
}
(function ($) {

    var allPanels = $('.accordion > dd').hide();

    $('.accordion > dt > a').click(function () {
        allPanels.slideUp();
        $(this).parent().next().slideDown();
        return false;
    });

    //$('.black').click(switchblack);
    //$('.white').click(switchwhite);
    //function switchblack() {
    //    $('body').attr('class', 'blacktheme');
    //}

    //function switchwhite() {
    //    $('body').attr('class', 'whitetheme');
    //}


    //$('.gallery-images').each(function () {
    //    $(this).magnificPopup({
    //        delegate: 'a',
    //        type: 'image',
    //        gallery: {
    //            enabled: true,
    //            navigateByImgClick: true
    //        },
    //        fixedContentPos: true
    //    });
    //});


    // Slick slider in about page
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        e.target
        e.relatedTarget
        $('.underconstruction').slick('setPosition');
        $('.underconstruction').slick('setPosition');
        $('.preconstruction').slick('setPosition');
        $('.survey-investigation').slick('setPosition');
        $('.underoperation').slick('setPosition');

    });
})(jQuery);



$('.ourbusiness')
    .on('afterChange init', function (event, slick, direction) {
        slick.$slides.removeClass('prevSlide').removeClass('nextSlide');
        for (var i = 0; i < slick.$slides.length; i++) {
            var $slide = $(slick.$slides[i]);
            if ($slide.hasClass('slick-current')) {
                $slide.prev().prev().addClass('prevSlide');
                $slide.next().next().addClass('nextSlide');
                break;
            }
        }
    })
    .on('beforeChange', function (event, slick) {
        slick.$slides.removeClass('prevSlide').removeClass('nextSlide');
    })


//$(".top-menu a[href='#about-part']").click(function () {
//    var scroll = $(window).scrollTop();
//    if (scroll = 133) {
//        $(".about-part").removeClass("aboutpart-scroll").addClass("aboutpart-scroll");
//    }
//});

function setSlider(sliderobject) {
    $('.' + sliderobject).slick({
        autoplay: true,
        speed: 800,
        arrows: true,
        vertical: false,
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        adaptiveHeight: true,
        prevArrow: jQuery('.' + sliderobject + '.pre-prev'),
        nextArrow: jQuery('.' + sliderobject + '.pre-next'),
        responsive: [{
            breakpoint: 1025,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                centerMode: false,
                variableWidth: false,
            }
        }
        ],
    });
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        e.target
        e.relatedTarget
        $('.' + sliderobject).slick('setPosition');
    });
}
