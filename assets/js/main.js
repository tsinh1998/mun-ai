/**
    * headerFixed
    *
    * retinaLogo
    * preloader
*/

; (function ($) {

    "use strict";

    var isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    // var headerFixed = function () {
    //     if ($("header").hasClass("header-fixed")) {
    //       var nav = $("#header_main");
    
    //       if (nav.length) {
    //         var offsetTop = nav.offset().top,
    //           headerHeight = nav.height(),
    //           injectSpace = $("<div>", {
    //             height: headerHeight,
    //           });
    //         injectSpace.hide();
    
    //         if ($("header").hasClass("style-absolute")) {
    //           injectSpace.hide();
    //         } else {
    //           injectSpace.insertAfter(nav);
    //         }
    
    //         $(window).on("load scroll", function () {
    //           if ($(window).scrollTop() > offsetTop + headerHeight) {
    //             nav.addClass("is-fixed");
    //             injectSpace.show();
    //           } else {
    //             nav.removeClass("is-fixed");
    //             injectSpace.hide();
    //           }
    
    //           if ($(window).scrollTop() > 100) {
    //             nav.addClass("is-small");
    //           } else {
    //             nav.removeClass("is-small");
    //           }
    //         });
    //       }
    //     }
    // };

    var btnmenu = function() {
        if ($('header').hasClass('header')) {
            
            $('.show-search').on('click', function () {
                $(this).closest('.header-search').find('.top-search').toggleClass('active');
            });
            
        }
    }

    var counter = function () {
        if ($(document.body).hasClass("counter-scroll")) {
          var a = 0;
          $(window).scroll(function () {
            var oTop = $(".counter").offset().top - window.innerHeight;
            if (a == 0 && $(window).scrollTop() > oTop) {
              if ($().countTo) {
                $(".counter")
                  .find(".number")
                  .each(function () {
                    var to = $(this).data("to"),
                      speed = $(this).data("speed");
                    $(this).countTo({
                      to: to,
                      speed: speed,
                    });
                  });
              }
              a = 1;
            }
          });
        }
    };

    // var retinaLogos = function() {
    //     var retina = window.devicePixelRatio > 1 ? true : false;
    //       if(retina) {
    //         var tfheader =$('#logo_header').data('retina');
    //         $('#site-logo-inner').find('img').attr({src:tfheader,width:'168px',height:'57px'});
    //         var tffooter =$('#logo_footer').data('retina');
    //         $('#logo-footer').find('img').attr({src:tffooter,width:'168px',height:'57px'});
    //       }
    // };  

    // var preloader = function () {
    //     setTimeout(function () {
    //     $(".preload-container").fadeOut("slow", function () {
    //         $(this).remove();
    //     });
    //     }, 1000);
    // };

    // Dom Ready
    $(function () {
        // headerFixed();
        btnmenu();
        counter();
        // retinaLogos();
        // preloader();
    });

})(jQuery);
