$(document).ready(function(){

	/* слайдер */

	$('.slider').slick({
		dots: false,
		arrows: true
	});

	$('.product__list-index').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<button type="button" class="slick-prev"></button>',
		nextArrow: '<button type="button" class="slick-next"></button>',
		responsive: [
		{
			breakpoint: 1279,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 967,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 745,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		]
	});

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

	/* timer */

	$('#coutner').timeTo({
		timeTo: new Date('Fri May 30 2016 09:00:00 GMT+0300 (RTZ 2 (лето))'),
		displayDays: 2,
		lang: 'ru',
		theme: "white",
		displayCaptions: true,
		fontSize: 32.45,
		captionSize: 14
	});


	/*Fade label*/
	$('.review__wrap-row input').val('');
	$('.review__wrap-row textarea').val('');
	$('.review__wrap-row label').click(function(){
		$(this).fadeOut(200);
		$(this).siblings('input,textarea').focus();
	});
	$('.review__wrap-row input').blur( function () {
		if(!$(this).val()){
			$(this).siblings('label').fadeIn(200);
		}
	});
	$('.review__wrap-row textarea').blur( function () {
		if(!$(this).val()){
			$(this).siblings('label').fadeIn(200);
		}
	});
	$('.review__wrap-row input').focus( function () {
		$(this).siblings('label').fadeOut(200);
	});
	$('.review__wrap-row textarea').focus( function () {
		$(this).siblings('label').fadeOut(200);
	});

	

});
