// slider
 $(document).ready(function () {
    //initialize swiper when document ready  
    var bannerSwiper = new Swiper ('.home-banner__slider', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      autoplay: 3000,
      speed: 800,

      // If we need pagination
	  pagination: '.banner-pagination',
	    
	  // Navigation arrows
	  nextButton: '.swiper-button-next',
	  prevButton: '.swiper-button-prev'
    })

    var rpSwiper = new Swiper ('.home-rp__slider', {
      // Optional parameters
      direction: 'horizontal',
      speed: 800,

      slidesPerView: 4,
	  centeredSlides: true,
	  spaceBetween: 30,
	    
	  // Navigation arrows
	  nextButton: '.home-shadow__right',
	  prevButton: '.home-shadow__left'
    }) 

    var cardSwiper = new Swiper ('.card__slider', {
      // Optional parameters
      direction: 'horizontal',
      speed: 800,

      simulateTouch: false,
      paginationClickable: true,

	  // If we need pagination
	  pagination: '.card-pagination'
    })    

    var imgSwiper = new Swiper ('.home-slider__imgslider', {
      // Optional parameters
      direction: 'vertical',
      speed: 800,

      effect: 'fade',

      spaceBetween: 20
    })  

    var textSwiper = new Swiper ('.home-slider__wrap', {
      // Optional parameters
      direction: 'vertical',
      speed: 800,

      paginationClickable: true,
      spaceBetween: 50,
      effect: 'fade',
      mousewheelControl: true,

      // If we need pagination
	  pagination: '.slide-pagination'
    })  

    textSwiper.params.control = imgSwiper;  

    $('.calendar__content').fullCalendar({
    	header: {
    		left:   'prev',
		    center: 'title',
		    right:  'next'
    	},
    	views: {
    		month: {
    			titleFormat: 'MMMM'
    		}
    	}
    })
});


// daterangepicker
$('input[mode="daterange"]').daterangepicker({
	"autoApply": true
});

$('input[mode="daterange"]').val('Kepan?');

$('input[mode="daterange"]').on('apply.daterangepicker', function(ev, picker) {
	var start = picker.startDate.format('MMM, D');
	var end = picker.endDate.format('MMM, D');
	if(start == end){
		$(this).val(start);
	} else{
		$(this).val(start +' - '+ end);
	}
});

$('input[mode="daterange"]').on('hide.daterangepicker', function(ev, picker) {
	var start = picker.startDate.format('MMM, D');
	var end = picker.endDate.format('MMM, D');
	if(start == end){
		$(this).val(start);
	} else{
		$(this).val(start +' - '+ end);
	}
});

$('input[mode="increment"]').on('click', function(){
	var value = $('.home-datetime__qty-form').val();

	$('.home-datetime__qty').addClass('home-datetime__qty--active');
	$('input[mode="increment"]').val(value);
});

$('.home-datetime__qty-form').on('change', function(event){
	var value = $(this).val();
	$('input[mode="increment"]').val(value);
});

$('.home-datetime__qty-btn').on('click', function(){
	$('.home-datetime__qty').removeClass('home-datetime__qty--active');
});

$(document).mouseup(function(e) {
    var container = $('.home-datetime__qty');

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        $('.home-datetime__qty').removeClass('home-datetime__qty--active');
    }
});

// maps
var map;
function initMap(location) {
	var mapTargetLength = document.getElementsByClassName("maps").length;
	// if there's many location, make the location parameter array of object
	for(var i=0; i < mapTargetLength; i++){
		map = new google.maps.Map(document.getElementsByClassName("maps")[i], {
		  center: location,
		  zoom: 15
		});
	}
}
initMap({lat: -25.363, lng: 131.044})