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

            $('.mobile-button').on('click', function () {
              $(this).closest('#header_main').find('.mobile-nav-wrap').toggleClass('active');
            });
            $('.mobile-nav-close').on('click', function () {
                $(this).closest('#header_main').find('.mobile-nav-wrap').toggleClass('active');
            });
            $('.mobile-nav-wrap .overlay-mobile-nav').on('click', function () {
                $(this).closest('#header_main').find('.mobile-nav-wrap').toggleClass('active');
            });
    
            $(document).on("click", ".menu-item-has-children-mobile", function () {
                var args = { duration: 600 };
                if ($(this).hasClass("active")) {
                  $(this).children(".sub-menu-mobile").slideUp(args);
                  $(this).removeClass("active");
                } else {
                  $(".sub-menu-mobile").slideUp(args);
                  $(this).children(".sub-menu-mobile").slideDown(args);
                  $(".menu-item-has-children-mobile").removeClass("active");
                  $(this).addClass("active");
                }
          });
            
        }
    }

    var headerFixed = function () {
      if ($("header").hasClass("header-fixed")) {
        var nav = $("#header_main");
  
        if (nav.length) {
          var offsetTop = nav.offset().top,
            headerHeight = nav.height(),
            injectSpace = $("<div>", {
              height: headerHeight,
            });
          injectSpace.hide();
  
          if ($("header").hasClass("style-absolute")) {
            injectSpace.hide();
          } else {
            injectSpace.insertAfter(nav);
          }
  
          $(window).on("load scroll", function () {
            if ($(window).scrollTop() > offsetTop + headerHeight) {
              nav.addClass("is-fixed");
              injectSpace.show();
            } else {
              nav.removeClass("is-fixed");
              injectSpace.hide();
            }
  
            if ($(window).scrollTop() > 200) {
              nav.addClass("is-small");
            } else {
              nav.removeClass("is-small");
            }
          });
        }
      }
    };

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
          
          $(".button-group").each(function (i, buttonGroup) {
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

    var rangeslider = function () {
      if ($("#range-two-val").length > 0) {
        var rangeTwoSlider = document.getElementById("range-two-val");
        noUiSlider.create(rangeTwoSlider, {
          start: [0, 89],
          connect: true,
          tooltips: [true, true],
          range: {
            min: 0,
            max: 240,
          },
          format: {
            to: (v) => v | 0,
            from: (v) => v | 0,
          },
        });
      }
    };

    var dropdown = function(id){
      if ($('div').hasClass('dropdown')) {
      var obj = $(id+'.dropdown');
      var btn = obj.find('.btn-selector');
      var dd = obj.find('ul');
      var opt = dd.find('li');
          dd.hide();
          obj.on("mouseenter", function() {
              dd.show();
              dd.addClass('show');
              $(this).css("z-index",1000);
          }).on("mouseleave", function() {
              dd.hide();
               $(this).css("z-index","auto")
               dd.removeClass('show');
          })
          
          opt.on("click", function() {
              dd.hide();
              var txt = $(this).text();
              opt.removeClass("active");
              $(this).addClass("active");
              btn.text(txt);
          });
  }}

  var btnQuantity = function () {
    $(".minus-btn").on("click", function (e) {
      e.preventDefault();
      var $this = $(this);
      var $input = $this.closest("div").find("input");
      var value = parseInt($input.val());

      if (value > 1) {
        value = value - 1;
      }

      $input.val(value);
    });

    $(".plus-btn").on("click", function (e) {
      e.preventDefault();
      var $this = $(this);
      var $input = $this.closest("div").find("input");
      var value = parseInt($input.val());

      if (value > 0) {
        value = value + 1;
      }

      $input.val(value);
    });
  };

  var tabs = function(){
    $('.widget-tabs').each(function(){
        $(this).find('.widget-content-tab').children().hide();
        $(this).find('.widget-content-tab').children(".active").show();
        $(this).find('.widget-menu-tab').children('li').on('click',function(){
            var liActive = $(this).index();
            var contentActive=$(this).siblings().removeClass('active').parents('.widget-tabs').find('.widget-content-tab').children().eq(liActive);
            contentActive.addClass('active').fadeIn("slow");
            contentActive.siblings().removeClass('active');
            $(this).addClass('active').parents('.widget-tabs').find('.widget-content-tab').children().eq(liActive).siblings().hide();
        });
    });
  };

  var video = function(){
    if ($('div').hasClass('video-wrap')) {
      $('.popup-youtube').magnificPopup({
        type: 'iframe'
      });
    }
  };

    // Dom Ready
    $(function () {
        btnmenu();
        headerFixed();
        counter();
        flatAccordion('.flat-accordion','.flat-toggle');
        flatAccordion('.flat-accordion1','.flat-toggle1');
        flatAccordion('.flat-accordion2','.flat-toggle2');
        filter();
        price();
        rangeslider();
        dropdown('#sort-by');
        btnQuantity();
        tabs();
        video();
    });

})(jQuery);
