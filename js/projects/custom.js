(function ($) {

    "use strict";

        // PRE loader
        $(window).on ('load', function(){
          $('.preloader').fadeOut(1000); // set duration in brackets    
        });


        // Parallax Js
        function initParallax() {
          $('#home').parallax("50%", 50);
          $('#work').parallax("50%", 40);
          $('#about').parallax("50%", 20);
          $('#testimonial').parallax("50%", 30);
          $('#contact').parallax("50%", 10);
          }
        initParallax();


        // Owl Carousel
        var owl = $("#owl-testimonial");
          owl.owlCarousel({
            autoPlay: 6000,
            items : 1,
            itemsDesktop : [1199,1],
            itemsDesktopSmall : [979,1],
            itemsTablet: [768,1],
            itemsTabletSmall: false,
            itemsMobile : [479,1],
            Speedfast: 200,
        }); 


        // Back top
        $(window).on('scroll', function() {
          if ($(this).scrollTop() > 200) {
            $('.go-top').fadeIn(200);
              } else {
                $('.go-top').fadeOut(200);
            }
          });   
          // Animate the scroll to top
          $('.go-top').on('click', function(event) {
            event.preventDefault();
              $('html, body').animate({scrollTop: 0}, 300);
        })


})(jQuery);
