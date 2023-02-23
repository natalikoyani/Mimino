$(document).ready(function () {
    $('.slider').slick({
      slidesToShow: 2,
      autoplay: true,
      autoplaySpeed: 3000,
      variableWidth: true,
      prevArrow: '.arrowperv',
      nextArrow: '.arrownext',
    }); 
   $('.slider_2').slick({
     slidesToShow: 2,
     autoplay: true,
     autoplaySpeed: 3000,
     variableWidth: true,
     prevArrow: '.arrownext_abouthotel',
     nextArrow: '.arrowperv_abouthotel',
     rtl: true,
   });
});