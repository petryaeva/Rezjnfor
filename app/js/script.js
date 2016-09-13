$(document).ready(function(){

	/* слайдер */


	$('.baner').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<button type="button" class="slick-prev"></button>',
		nextArrow: '<button type="button" class="slick-next"></button>',
		dots: true,
		fade: true,
		speed: 500,
    cssEase: 'linear',
		// autoplay: true,
		dotsClass: 'baner__dots'
	});

	$('.slider').slick({
		infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  rows: 1,
		prevArrow: '<button type="button" class="slider-prew"></button>',
		nextArrow: '<button type="button" class="slider-next"></button>'
		// autoplay: true
	});

	$('.baner__dots button').text('');

	/* Fancybox */

	$('.fancybox').fancybox({
		helpers: {
			overlay: {
				locked: false
			}
		}
	});  

	if ($('.quick-view.lnk-fancybox').length){
		$('.quick-view.lnk-fancybox').fancybox({
			wrapCSS: "quick-view_fancy-popup",
			helpers: {
				overlay: {
					locked: false
				}
			}
		});
	}; 



	//---fade label
    $('.form input[type="text"]').val('');
    $('.form label').click(function(){
        $(this).fadeOut(500);
    });
    $('.form input[type="text"]').blur( function () {
        if(!$(this).val()){
            $(this).siblings('label').fadeIn(300);
        }
    });
    $('.form input[type="text"]').focus( function () {
        $(this).siblings('label').fadeOut(300);
    });
    


	$('#our-phone').mask('(000) 000-0000');



});
