$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    nav: false,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 3000,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      768: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });
});
