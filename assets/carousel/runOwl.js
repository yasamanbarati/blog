$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:8,
        loop:true,
        responsive:{
            0:{
                items:3,
            },
            600:{
                items:4,
            },
            1200:{
                items:6,
            }
        },
        touchDrag:true,
        // dots:true,
        // nav:true,
    });  
  });