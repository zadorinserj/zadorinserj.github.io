$('.catalog-ul').on('click', function(event) {
  event.preventDefault();
  if ($(window).width() < 576 ) {
    $('.catalogs-ul').toggleClass('catalogs-ul-active');
  }
});
$('.catalog-ul').mouseenter(function(event) {
  event.preventDefault();
  if ($(window).width() > 576 ) {
    $('.catalogs-ul').addClass('catalogs-ul-active');
  }
});
$('.catalog-ul').mouseout(function(event) {
  $('.catalogs-ul').removeClass('catalogs-ul-active');
});
// $('.catalog-ul').mouseleave(function(event) {
//   if ($(window).width() > 576 ) {
//     $('.catalogs-ul').toggleClass('catalogs-ul-active');
//   }
// });
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


(function($) {
$(function() {
  $('#up').click(function() {
    $('html, body').animate({scrollTop: 0},1000);
    return false;
  })
})
})(jQuery)

jQuery(function($){
  $(document).mouseup(function (e){ // событие клика по веб-документу
    var div = $(".modal"); // тут указываем ID элемента
    if (div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
      $('.page-wrapper').removeClass('page-wrapper-move');
      $('.modal').removeClass('modal-open');
      $('.modal').toggleClass('modal-close');
      setTimeout(close, 500);
    }
  });
});

$('.link-sub').on('click', function(event) {
  event.preventDefault();
  $('.submenu').toggleClass('submenu-active');
});
// $('.catalog-ul').on('click', function(event) {
//   event.preventDefault();
//   $('.catalogs-ul').hasClass('catalogs-ul-active');
// });

$(window).scroll(function() {
  if ($(this).scrollTop() > 600) {
    $('.page-header').addClass('page-header-fixed');
  } else {
    $('.page-header').removeClass('page-header-fixed');
  }
});

$('.input-form').blur(function() {
  var it = $(this);
  if (it.val() == '')  {
    it.addClass('input-error');
  } else {
    it.removeClass('input-error');
  }
});


function sert_a() {
  $('.content-sert').toggleClass('sert-active');
}
function feed_a() {
  $('.content-feed').toggleClass('feed-active');
}
$('.btn-1').on('click', function(event) {
  event.preventDefault();
  if ($('.btn-2').hasClass('btn-active')) {
    $('.btn-2').toggleClass('btn-active');
    $('.btn-1').toggleClass('btn-active');
    $('.content-sert').toggleClass('sert-active');
    setTimeout(feed_a, 600);
  }
});
$('.btn-2').on('click', function(event) {
  event.preventDefault();
  if ($('.btn-1').hasClass('btn-active')) {
    $('.btn-1').toggleClass('btn-active');
    $('.btn-2').toggleClass('btn-active');
    $('.content-feed').toggleClass('feed-active');
    setTimeout(sert_a, 600);
  }
});

$('.btn-item-1').on('click', function(event) {
  event.preventDefault();
  if ($('.btn-item-2').hasClass('btn-active')) {
    $('.btn-item-2').toggleClass('btn-active');
    $('.btn-item-1').toggleClass('btn-active');

    $('.content-block-characteristics').toggleClass('block-show');
    $('.content-block-description').toggleClass('block-show');
  } 
  if ($('.btn-item-3').hasClass('btn-active')) {
    $('.btn-item-3').toggleClass('btn-active');
    $('.btn-item-1').toggleClass('btn-active');

    $('.content-block-characteristics').toggleClass('block-show');
    $('.content-block-equipment').toggleClass('block-show');
  }
});
$('.btn-item-2').on('click', function(event) {
  event.preventDefault();
  if ($('.btn-item-1').hasClass('btn-active')) {
    $('.btn-item-1').toggleClass('btn-active');
    $('.btn-item-2').toggleClass('btn-active');

    $('.content-block-description').toggleClass('block-show');
    $('.content-block-characteristics').toggleClass('block-show');
  }
  if ($('.btn-item-3').hasClass('btn-active')) {
    $('.btn-item-3').toggleClass('btn-active');
    $('.btn-item-2').toggleClass('btn-active');

    $('.content-block-equipment').toggleClass('block-show');
    $('.content-block-description').toggleClass('block-show');
  }
});
$('.btn-item-3').on('click', function(event) {
  event.preventDefault();
  if ($('.btn-item-1').hasClass('btn-active')) {
    $('.btn-item-3').toggleClass('btn-active');
    $('.btn-item-1').toggleClass('btn-active');

    $('.content-block-characteristics').toggleClass('block-show');
    $('.content-block-equipment').toggleClass('block-show');
  }
  if ($('.btn-item-2').hasClass('btn-active')) {
    $('.btn-item-2').toggleClass('btn-active');
    $('.btn-item-3').toggleClass('btn-active');

    $('.content-block-equipment').toggleClass('block-show');
    $('.content-block-description').toggleClass('block-show');
  }
});

$('.control-popularity').on('click', function(event) {
  event.preventDefault();
  if ($('.control-price').hasClass('control-active')) {
      $('.control-popularity').toggleClass('control-active');
      $('.control-price').toggleClass('control-active');
  }
});
$('.control-price').on('click', function(event) {
  event.preventDefault();
  if ($('.control-popularity').hasClass('control-active')) {
      $('.control-price').toggleClass('control-active');
      $('.control-popularity').toggleClass('control-active');
  }
});


$('.btn-call').on('click', function(event) {
  event.preventDefault();
  $('.page-wrapper').toggleClass('page-wrapper-move');
  $('.modal-call').toggleClass('modal-open');
});
$('.btn-price').on('click', function(event) {
  event.preventDefault();
  $('.page-wrapper').toggleClass('page-wrapper-move');
  $('.modal-price').toggleClass('modal-open');
});
$('.btn-zakaz').on('click', function(event) {
  event.preventDefault();
  $('.page-wrapper').toggleClass('page-wrapper-move');
  $('.modal-zakaz').toggleClass('modal-open');
});
$('.btn-question').on('click', function(event) {
  event.preventDefault();
  $('.page-wrapper').toggleClass('page-wrapper-move');
  $('.modal-question').toggleClass('modal-open');
});
function close() {
  $('.modal').removeClass('modal-close');
}
$('.modal-close-btn').on('click', function(event) {
  event.preventDefault();
  $('.page-wrapper').removeClass('page-wrapper-move');
  $('.modal').removeClass('modal-open');
  $('.modal').toggleClass('modal-close');
  setTimeout(close, 500);
});


$('.control-tile').on('click', function(event) {
  event.preventDefault();
  if ($('.control-table').hasClass('control-table-active')) {
    $('.control-table').toggleClass('control-table-active');
    $('.control-tile').toggleClass('control-tile-active');
    $('.catalog-item-page-content .right-content').toggleClass('right-content-table');
    if ($(window).width() < 991 ) {
      $('.catalog-item-page-content .container').removeClass('container-table');
    }
    if ($(window).width() < 575 ) {
      $('.catalog-item-page-content .right-content').removeClass('right-content-table');
    }
  } 
});
$('.control-table').on('click', function(event) {
  event.preventDefault();
  if ($('.control-tile').hasClass('control-tile-active')) {
    $('.control-tile').toggleClass('control-tile-active');
    $('.control-table').toggleClass('control-table-active');
    $('.catalog-item-page-content .right-content').toggleClass('right-content-table');
    if ($(window).width() < 991 ) {
      $('.catalog-item-page-content .container').addClass('container-table');
    }
    if ($(window).width() < 575 ) {
      $('.catalog-item-page-content .right-content').removeClass('right-content-table');
    }
  } 
});

$('.search-btn').on('click', function(event) {
  event.preventDefault();
  if ($(window).width() < 576 ) {
    if (!$('.search-form').hasClass('search-form-active')) {
      $('.search-form').toggleClass('search-form-active');
    } else {
       $('.search-form').removeClass('search-form-active');
    }
  } else {
    $('.search-form').removeClass('search-form-active');
  }
});

$('.news-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true
});

$('.projects-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: '<button type="button" class="projects-btn projects-btn-prev"></button>',
  nextArrow: '<button type="button" class="projects-btn projects-btn-next"></button>',
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.related_products-slider').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  prevArrow: '<button type="button" class="related-btn related-btn-prev"></button>',
  nextArrow: '<button type="button" class="related-btn related-btn-next"></button>',
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.left-item-slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.left-item-slider-nav'
});
$('.left-item-slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.left-item-slider-for',
  dots: false,
  centerMode: true,
  focusOnSelect: true
});


$('.brands-slider').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  dots: true,
  prevArrow: '<button type="button" class="brands-btn brands-btn-prev"></button>',
  nextArrow: '<button type="button" class="brands-btn brands-btn-next"></button>',
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 756,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.main-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  vertical: true,
  speed: 2000,
  infinite: false,
  prevArrow: '<button type="button" class="general-btn general-btn-prev"></button>',
  nextArrow: '<button type="button" class="general-btn general-btn-next"></button>',
});


// $(window).mousemove(function(e) {
//   var change;
//   var xpos=e.clientX;
//   var ypos=e.clientY;
//   var left=change*20;
//   var xpos=xpos*2;ypos=ypos*2;
//   $('.img-block-main img').css('transform',("translate("+(0+(xpos/70))+"px, "+(0+(ypos/70))+"px)"));     
// });

