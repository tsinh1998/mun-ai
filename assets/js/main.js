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

    var flatAccordion = function (class1,class2) {
        var args = { duration: 600 };

        $(class2 + ' .toggle-title.active').siblings('.toggle-content').show();
        $(class1 +' .toggle-title').on('click', function () {
            $(class1 + ' ' + class2).removeClass('active');
            $(this).closest(class2).toggleClass('active');

            if( !$(this).is('.active') ) {
                $(this).closest(class1).find('.toggle-title.active').toggleClass('active').next().slideToggle(args);
                $(this).toggleClass('active');
                $(this).next().slideToggle(args);
            } else {
                $(class1 + ' ' + class2).removeClass('active');
                $(this).toggleClass('active');
                $(this).next().slideToggle(args);
            }     
        });
    };

    var filter = function() {
        if ($('div').hasClass("widget-filter-isotope")) {
          var $grid = $(".grid").isotope(
            {
            itemSelector: ".element-item",
            layoutMode: "fitRows"
          }
          );
         
          $(".filters-button-group").on("click", "button", function () {
            var filterValue = $(this).attr("data-filter");
            $grid.isotope({ filter: filterValue });
          });
          
          $(".button-group").each(function (buttonGroup) {
            var $buttonGroup = $(buttonGroup);
            $buttonGroup.on("click", "button", function () {
              $buttonGroup.find(".is-checked").removeClass("is-checked");
              $(this).addClass("is-checked");
            });
          });
        }
    }

    var price = function() {
        if ($('div').hasClass('pricing-item style-2')) {
            $('.button-price').on('click', function () {
                var price =$(this).data('price');
                $(this).closest('.pricing-item').find('.number-price').text(price);

                if( !$(this).is('.active') ) {
                  $(this).closest('.price-tabs').find('.button-price.active').toggleClass('active');
                  $(this).toggleClass('active');
                }  
            })
        }
    }

    $(document).ready(function() {
        $('.popup-youtube').magnificPopup({
        type: 'iframe'
      });
    });

    // Dom Ready
    $(function () {
        btnmenu();
        counter();
        flatAccordion('.flat-accordion','.flat-toggle');
        flatAccordion('.flat-accordion1','.flat-toggle1');
        filter();
        price();
    });

})(jQuery);
