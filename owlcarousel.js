$(document).ready(function(){
  $('.owl-carousel').owlcarousel({
      loop:true,
      margin:10,
      responsiveClass:true,
      center:true,
      nav:true,
      navText:[
          "<i class='bi bi-arrow-left'></i>",
          "<i class='bi bi-arrow-right'></i>"
      ],
      responsive:{
          0:{
              items:1,
          },
          600:{
              items:3,
          },
          1000:{
              items:3
          }
      }
  })
});