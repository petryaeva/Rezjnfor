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

	// $('.fancybox').fancybox({
	// 	helpers: {
	// 		overlay: {
	// 			locked: false
	// 		}
	// 	}
	// });  

	// if ($('.quick-view.lnk-fancybox').length){
	// 	$('.quick-view.lnk-fancybox').fancybox({
	// 		wrapCSS: "quick-view_fancy-popup",
	// 		helpers: {
	// 			overlay: {
	// 				locked: false
	// 			}
	// 		}
	// 	});
	// }; 



//---fade label
  $('.fade input[type="text"]').val('');
  $('.fade label').click(function(){
      $(this).fadeOut(500);
  });
  $('.fade input[type="text"]').blur( function () {
      if(!$(this).val()){
          $(this).siblings('label').fadeIn(300);
      }
  });
  $('.fade input[type="text"]').focus( function () {
      $(this).siblings('label').fadeOut(300);
  });
    


	$('#our-phone').mask('+7(000) 000-0000');

	/* more text */
	// $('.read-more-content').addClass('hide')
	// $('.read-more-show, .read-more-hide').removeClass('hide')
	// $('.read-more-show').on('click', function(e) {
	// 	$(this).next('.read-more-content').removeClass('hide');
	// 	$(this).addClass('hide');
	// 	e.preventDefault();
	// });
	// $('.read-more-hide').on('click', function(e) {
	// 	var p = $(this).parent('.read-more-content');
	// 	p.addClass('hide');
	// 	p.prev('.read-more-show').removeClass('hide'); 
	// 	e.preventDefault();
	// });


	$('.read-more-show').click(function () {
		$(this).toggleClass('show');
		$('.vacancy__body').toggleClass('show');
		if($(this).hasClass('show')){
			$(this).text('Скрыть');
		}else{
			$(this).text('Показать');
		}

		return false;
	});
	

});
