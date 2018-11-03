$(window).scroll(function() {
	if ($(this).scrollTop() > 500) {
		$('#logotype').css('transform', 'translateX(-100vw)');
		$('#fixed-btn').css('transform', 'translateX(150vw)');
		$('.wrapper').css('top', '-60px');
	} else {
		$('#logotype').css('transform', 'translateX(0px)');
		$('#fixed-btn').css('transform', 'translateX(158px)');
		$('.wrapper').css('top', '0px');
	}
	if ($(this).scrollTop() > 800) {
		$('.wrapper').addClass("fixed-menu");
		$('.wrapper').css('top', '0px');
		$('#logotype').css('transform', 'translateX(-570px)');
		$('#fixed-btn').css('transform', 'translateX(384px)');
	} else {
		$('.wrapper').removeClass("fixed-menu");
		$('#logotype').css('transform', 'translateX(0px)');
		$('#fixed-btn').css('transform', 'translateX(158px)');
	}
});

(function($) {
  //Делает первый блок открытым
  $('.accordion > li:eq(0) a').addClass('active').next().slideDown();
  //Основной код
  $('.accordion a').click(function(j) {
    var dropDown = $(this).closest('li').find('p');
    $(this).closest('.accordion').find('p').not(dropDown).slideUp();
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
    } else {
        $(this).closest('.accordion').find('a.active').removeClass('active');
        $(this).addClass('active');
    }
    dropDown.stop(false, true).slideToggle();
    j.preventDefault();
  });
  $('.parallax-layer').mouseParallax({ moveFactor: 3 });
})(jQuery);

$('.hamb-menu').on('click', function(event) {
	event.preventDefault();
	$('.hamb-menu').toggleClass('hamb-active');
	$('.header-menu').toggleClass('header-menu-active');
});

function siteopen() {
  $('.site').addClass('site-modal-open');
}
function siteclose() {
  $('.site').removeClass('site-modal-open');
}
$('.btn-call').on('click', function(event) {
	event.preventDefault();
	$('.modal').addClass('modal-active');
	setTimeout(siteopen, 0);
});

function active() {
  $('.submenu').addClass('submenu-active');
}
function noactive() {
	$('.submenu').removeClass('submenu-active');  
}

$('.sub').hover(function(event) {
	event.preventDefault();
	if (($('.wrapper').css('top') == '0px') 
		&& $(".wrapper").hasClass("fixed-menu")) {
		$('.submenu').toggleClass('submenu-active-fixed');
	} else {
		$('.submenu').toggleClass('submenu-active');
	}
});

$('.submenu').removeClass('submenu-active');

$('.socials').on('click', function(event) {
	event.preventDefault();
	$('.socials-block').toggleClass('socials-block-active')
});

jQuery(function($){
	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".modal-content"); // тут указываем ID элемента
			if (!div.is(e.target) // если клик был не по нашему блоку
			    && div.has(e.target).length === 0) { // и не по его дочерним элементам
				$('.site').removeClass('site-modal-open');
				$('.modal').removeClass('modal-active');
			}
	});
});

$('#table-one-btn').on('click', function(event) {
	event.preventDefault();
	$('#table-one-btn').addClass('price-menu-item-active');
	$('#table-two-btn').removeClass('price-menu-item-active');
	$('#table-thr-btn').removeClass('price-menu-item-active');
	$('#table-one').css('display', 'flex');
	$('#table-two').css('display', 'none');
	$('#table-thr').css('display', 'none');
});
$('#table-two-btn').on('click', function(event) {
	event.preventDefault();
	$('#table-one-btn').removeClass('price-menu-item-active');
	$('#table-two-btn').addClass('price-menu-item-active');
	$('#table-thr-btn').removeClass('price-menu-item-active');
	$('#table-one').css('display', 'none');
	$('#table-two').css('display', 'flex');
	$('#table-thr').css('display', 'none');
});
$('#table-thr-btn').on('click', function(event) {
	event.preventDefault();
	$('#table-one-btn').removeClass('price-menu-item-active');
	$('#table-two-btn').removeClass('price-menu-item-active');
	$('#table-thr-btn').addClass('price-menu-item-active');
	$('#table-one').css('display', 'none');
	$('#table-two').css('display', 'none');
	$('#table-thr').css('display', 'flex');
});

//products---------------------------------------------------

var product_var = $(".products-variables");

product_var.find(".block-img img").eq(0).show();
product_var.find(".block-bg img").eq(0).show();

product_var.find(".products-link").mouseover(function() {
  var product_index = $(this).index();
  product_var.find(".block-bg img").eq(product_index).fadeIn(200);
  product_var.find(".block-img img").eq(product_index).fadeIn(200);
}).mouseleave(function() {
  product_var.find(".block-bg img").fadeOut(200);
  product_var.find(".block-img img").fadeOut(200);
});

//sliders----------------------------------------------------
$('.news-blocks').slick({
	infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '<button type="button" class="feedback-slider-btn feedback-prev-btn"></button>',
  nextArrow: '<button type="button" class="feedback-slider-btn feedback-next-btn"></button>',
  responsive: [ {
  	breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
  }
  ]
});