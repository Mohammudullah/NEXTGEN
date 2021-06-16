$( function() {
    "use strict";


    //Preloader initialize
    window.addEventListener("load",function(){
      $('.preloader').delay(800).addClass('loading-finished');
  });

    // NodeCursor initialize for Custom cursor
    var initCursor = new NodeCursor({
        cursor              : true,
        node                : true,
        cursor_velocity     : 0.75,
        node_velocity       : 0.10,
        native_cursor       : 'none',
        element_to_hover    : 'a',
        cursor_class_hover  : 'disable',
        node_class_hover    : 'expand',
        hide_mode           : true,
        hide_timing         : 3500,
    });


    //Latest games slider initialize
    $('.latest-games-main').slick({
        arrows          : false,
        slidesToShow    : 4,
        slidesToScroll  : 1,
        touchThreshold  : 50,
        autoplay        : true,
        autoplaySpeed   : 7000,
        pauseOnHover    : true,
        pauseOnFocus    : false,
        responsive      : [
          {
            breakpoint: 992,
            settings  : {
              slidesToShow : 3,
              pauseOnFocus : true,
            }
          },
          {
            breakpoint: 768,
            settings  : {
              slidesToShow : 2,
              pauseOnFocus : true,
            }
          },
          {
            breakpoint: 530,
            settings  : {
              slidesToShow : 1,
              pauseOnFocus : true,
            }
          }
        ]
      });

    
    //Latest games venobox initialize
    $('.latest-games-privew').venobox({

        border          : '5px',
        bgcolor         : '#E50914',
        closeBackground : '#E50914',
        closeColor      : '#FFFFFF',
    });


    //Live matches large slider initialize
    $('.live-match-main').slick({
        arrows          : false,
        slidesToShow    : 1,
        slidesToScroll  : 1,
        touchThreshold  : 50,
        autoplaySpeed   : 5000,
        autoplay        : false,
        fade            : true,
        pauseOnHover    : true,
        pauseOnFocus    : false,
        asNavFor        : '.live-match-sub-main',
        responsive      : [

          {
            breakpoint  : 576,
            settings  : {
              fade          : false,
              autoplay      : true,
              pauseOnFocus  : true,

            }
          }
        ]
      });


    //Live matches sub slider initialize
    $('.live-match-sub-main').slick({
        arrows          : true,
        prevArrow       : '.sub-match-slider-arrows .left',
        nextArrow       : '.sub-match-slider-arrows .right',
        slidesToShow    : 4,
        slidesToScroll  : 1,
        touchThreshold  : 50,
        autoplay        : false,
        pauseOnHover    : true,
        pauseOnFocus    : false,
        asNavFor        : '.live-match-main',
        focusOnSelect   : true,
        responsive      : [
          {
            breakpoint  : 768,
            settings    : {
              slidesToShow  : 3,
            }
          }
        ]
      });

    
    //Live matches venobox initialize
    $('.live-match-play').venobox({

        border          : '5px',
        bgcolor         : '#E50914',
        closeBackground : '#E50914',
        closeColor      : '#FFFFFF',
    });

    //News section slider initialize
    $('.news-main').slick({
        arrows          : false,
        slidesToShow    : 3,
        slidesToScroll  : 1,
        touchThreshold  : 50,
        autoplaySpeed   : 8000,
        autoplay        : true,
        pauseOnHover    : true,
        responsive      : [

          {
            breakpoint  : 768,
            settings    : {
              slidesToShow    : 2,
              pauseOnFocus    : true,
            }
          },
          {
            breakpoint  : 560,
            settings    : {
              slidesToShow    : 1,
              pauseOnFocus    : true,
            }
          }
        ]
      });


    //Products section slider initialize
    $('#products .products-main').slick({
        arrows          : false,
        slidesToShow    : 4,
        slidesToScroll  : 1,
        touchThreshold  : 50,
        autoplaySpeed   : 8000,
        autoplay        : true,
        pauseOnHover    : true,
        responsive      : [

          {
            breakpoint  : 950,
            settings    : {
              slidesToShow    : 3,
              pauseOnFocus    : true,
            }
          },
          {
            breakpoint  : 650,
            settings    : {
              slidesToShow    : 2,
              pauseOnFocus    : true,
            }
          },
          {
            breakpoint  : 480,
            settings    : {
              slidesToShow    : 1,
              pauseOnFocus    : true,
            }
          }
        ]
      });


    //Partners section slider initialize
    $('.partners-main').slick({
        arrows          : false,
        slidesToShow    : 5,
        slidesToScroll  : 1,
        touchThreshold  : 100,
        autoplaySpeed   : 5000,
        autoplay        : true,
        pauseOnHover    : true,
        responsive      : [

          {
            breakpoint  : 768,
            settings    : {
              slidesToShow    : 4,
              pauseOnFocus    : true,
            }
          },
          {
            breakpoint  : 650,
            settings    : {
              slidesToShow    : 3,
              pauseOnFocus    : true,
            }
          },
          {
            breakpoint  : 540,
            settings    : {
              slidesToShow    : 2,
              pauseOnFocus    : true,
            }
          }
        ]
      });


    //Navbar sidebar function
    $("#toggler").on('click', function(){
        $('.sidebar').addClass('sidebar-onscreen');
        $('.sidebar-overlay').addClass('sidebar-onscreen');
    });

    $('#sidebar-close').on('click', function(){

        $('.sidebar').removeClass('sidebar-onscreen');
        $('.sidebar-overlay').removeClass('sidebar-onscreen');
    });

    $('.sidebar-overlay').on('click', function(){

        $('.sidebar').removeClass('sidebar-onscreen');
        $('.sidebar-overlay').removeClass('sidebar-onscreen');
    });

    $('.sidebar-menu a').on('click', function(){

        $('.sidebar').removeClass('sidebar-onscreen');
        $('.sidebar-overlay').removeClass('sidebar-onscreen');  
    });


      //sticky navbar animation
      $(".body-wrap").on('scroll', function () {
        var scrollamount = $(this).scrollTop();

        if (scrollamount > 100) {
            $('.nav-bar').addClass('navbar-animation');
        }

        else {
            $('.nav-bar').removeClass('navbar-animation');
        }
    });


    //Mobile search bar function
    $('.search-toggler').on('click', function() {

      $('.search-mobile .search').addClass('search-mobile-show');
    });

    $('.search-mobile .search button').on('click', function() {

      $('.search-mobile .search').removeClass('search-mobile-show');
    });

    //Login password hide and show function

    $('#login-page .password-toggler i').on('click', function(){

      var password_type = document.getElementById('log-in-password');

      if (password_type.type == 'password') {
        $(this).removeClass('fa-eye');
        $(this).addClass('fa-eye-slash');
        password_type.type = 'text';
      }

      else if (password_type.type == 'text') {
        $(this).removeClass('fa-eye-slash');
        $(this).addClass('fa-eye');
        password_type.type = 'password';
      }

    });
});