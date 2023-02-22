$(document).ready(function () {
    $('.slider').slick({
      slidesToShow: 2,
      autoplay: true,
      autoplaySpeed: 2000,
      variableWidth: true,
      prevArrow: '.arrowperv',
      nextArrow: '.arrownext',
    }); 
   $('.slider_2').slick({
     slidesToShow: 2,
     autoplay: true,
     autoplaySpeed: 2000,
     variableWidth: true,
     prevArrow: '.arrowperv_abouthotel',
     nextArrow: '.arrownext_abouthotel',
     rtl: true,
   }); 
});