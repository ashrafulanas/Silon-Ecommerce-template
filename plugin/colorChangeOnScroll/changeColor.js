$(window).scroll(function () {
  $(".headerSection").toggleClass("scrolled", $(this).scrollTop() > 50);
});

$(window).scroll(function () {
  $(".nav-link").toggleClass("scrolled", $(this).scrollTop() > 50);
});
