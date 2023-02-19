$(document).ready(function ($) {
  $(".slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    speed: 500,
    infinite: true,
    cssEase: "ease-in-out",
    loop: true,
    dots: true,
    arrows: false,
  });
  /*START HOME SLIDER JS*/
  jQuery("#home-slider").flexslider({
    directionNav: false,
    controlnav: true,
  });
  /*END HOME SLIDER JS*/
});
