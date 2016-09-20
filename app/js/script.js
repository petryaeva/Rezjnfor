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
		wrapCSS: "wrap-popup",
		helpers: {
			overlay: {
				locked: false
			}
		}
	});  


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


	$('.goods-detail__full').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,            
        infinite: true,
        fade: true,
        asNavFor: '.goods-detail__small'
    });
    
    $('.goods-detail__small').slick({
        slidesToShow: 9,
        slidesPerRow: 3,
        asNavFor: '.goods-detail__full',
        dots: false,
        arrows: false,
        focusOnSelect: true,
        responsive: [
        {
            breakpoint: 1180,
            settings: {
                slidesToShow: 7,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 470,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        }
        
        ]
    });  
    $('.goods-detail__small > .slick-prev.slick-arrow').html(""); 
    $('.goods-detail__small > .slick-next.slick-arrow').html(""); 

       /* табы в карточке товара */

    $(function() {
		  $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
		    $(this)
		      .addClass('active').siblings().removeClass('active')
		      .closest('div.tabs').find('div.tab-content').removeClass('active').eq($(this).index()).addClass('active');
		  });
		});
	

});
