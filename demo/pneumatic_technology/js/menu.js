$('.catalog-ul').on('click', function(event) {
  event.preventDefault();
  if ($(window).width() < 576 ) {
    $('.catalogs-ul').toggleClass('catalogs-ul-active');
  }
});
$('.catalog-ul').mouseenter(function(event) {
  event.preventDefault();
  if ($(window).width() > 576 ) {
    $('.catalogs-ul').toggleClass('catalogs-ul-active');
  }
  // $('.catalogs-ul').toggleClass('catalogs-ul-active');
});
$('.catalog-ul').mouseleave(function(event) {
  if ($(window).width() > 576 ) {
    $('.catalogs-ul').toggleClass('catalogs-ul-active');
  }
});
$('.catalogs-ul').hover(function(event) {
  event.preventDefault();
  $('.catalogs-ul').toggleClass('catalogs-ul-active');
});
$('.submenu').hover(function(event) {
  event.preventDefault();
  $('.submenu').toggleClass('submenu-active');
});
$('.link-sub').hover(function(event) {
  event.preventDefault();
  $('.submenu').toggleClass('submenu-active');
});