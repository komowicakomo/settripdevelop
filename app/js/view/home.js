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

      initialSlide: 1,
      slidesPerView: 4,
	  centeredSlides: true,
	  spaceBetween: 30,

	  breakpoints: {
	  	1440: {
	  		slidesPerView: 3,
	  	},
	  	968: {
	  		slidesPerView: 2,
	  		spaceBetween: 15
	  	},
	  	580: {
	  		slidesPerView: 'auto',
	  		initialSlide: 0
	  	},
	  	450: {
	  		slidesPerView: 'auto',
	  		initialSlide: 0,
	  		spaceBetween: 15,
	  	},
	  	320: {
	  		slidesPerView: 'auto',
	  		initialSlide: 0,
	  		slidesPerView: 1
	  	}
	  },
	    
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

    var imgSwiper = new Swiper(".home-slider__imgslider", {
      // Optional parameters
      direction: "vertical",
      speed: 800,

      effect: "fade",

      spaceBetween: 20
    });  

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

    // full calendar
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
    	},
    	bootstrapGlyphicons: {
    		next: 'fa fa fa-long-arrow-right',
    		prev: 'fa fa fa-long-arrow-left'
    	},
    	eventSources: [
    		{
	    		events: [
			        {
			        	event_id: 1,
			            start: '2017-10-02',
			            title: 'Mulai Dari',
			            priceStart: 'Rp1.500.000',
			            priceEnd: 'Rp10.000.000',
			            available: '24'
			        },
			        {
			        	event_id: 2,
			            start: '2017-10-17',
			            title: 'Mulai Dari',
			            priceStart: 'Rp2.500.000',
			            priceEnd: 'Rp20.000.000',
			            available: '5'
			        },
			        {
			        	event_id: 3,
			            start: '2017-10-18',
			            title: 'Mulai Dari',
			            priceStart: 'Rp500.000',
			            priceEnd: 'Rp5.000.000',
			            available: '2'
			        },
			        {
			        	event_id: 4,
			            start: '2017-10-19',
			            title: 'Mulai Dari',
			            priceStart: 'Rp1.000.000',
			            priceEnd: 'Rp10.000.000',
			            available: '20'
			        },
			        {
			        	event_id: 5,
			            start: '2017-10-20',
			            title: 'Mulai Dari',
			            priceStart: 'Rp500.000',
			            priceEnd: 'Rp2.000.000',
			            available: '8'
			        }
			    ]
			}
		],
	    eventRender: function(event, element) {
	    	var target = $('[data-date='+event.start._i+']');
	    	target.addClass('home-calendar__hasEvent event_'+event.event_id+'');

	    	$('.home-calendar__hasEvent.fc-day').append('<div class="home-calendar__hover"></div>');

	    	$('.event_'+event.event_id+'').mouseover(function(){
	    		$('.hover_'+event.event_id+'').addClass('active');
	    	})
	    	$('.event_'+event.event_id+'').mouseleave(function(){
	    		$('.hover_'+event.event_id+'').removeClass('active');
	    	})
	    	$('.event_'+event.event_id+'').click(function(){
	    		overlayin();
	    		$('.modal-open-trip').addClass('active');
	    	})

	        var eventContent = `<div class="home-calendar__event">
									<span>`+event.title+`</span>
									<p>`+event.priceStart+`</p>
	        					</div>`;
	        var hoverContent = `<div class="home-calendar__event-hover hover_`+event.event_id+`">
									<div class="home-calendar__hover-text">
										<p>`+event.available+` Open trip tersedia</p>
										<span class="fa fa-long-arrow-right"></span>
									</div>
									<h5>`+event.priceStart+` - `+event.priceEnd+`</h5>
	        					</div>`
	        var container = `<div class="home-calendar__event-content">
								`+eventContent+`
								`+hoverContent+`
	        				</div>`

	        return container
	    },
    	themeSystem: 'bootstrap3',
    	dayNames: ['MINGGU', 'SENIN', 'SELASA', 'RABU',
 'KAMIS', 'JUMAT', 'SABTU'],
 		dayNamesShort: ['MINGGU', 'SENIN', 'SELASA', 'RABU',
 'KAMIS', 'JUMAT', 'SABTU']
    })
});

// typeahead
var substringMatcher = function(strs) {
  return function findMatches(q, cb) {
    var matches, substringRegex;

    // an array that will be populated with substring matches
    matches = [];

    // regex used to determine if a string contains the substring `q`
    substrRegex = new RegExp(q, 'i');

    // iterate through the pool of strings and for any string that
    // contains the substring `q`, add it to the `matches` array
    $.each(strs, function(i, str) {
      if (substrRegex.test(str)) {
        matches.push(str);
      }
    });

    cb(matches);
  };
};

var states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
  'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii',
  'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
  'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
  'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
  'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
  'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
  'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];

var width = $('body').width();

if(width > 568){
	// typeahead
	$('input[mode="typeahead"]').typeahead({ highlight: true, minLength: 1 }, { name: "states", source: substringMatcher(states) });

	// daterangepicker
	$('input[mode="daterange"]').daterangepicker({
		"autoApply": true
	});

	$('input[mode="daterange"]').val('Kapan?');

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

		var parent = $(this).parent();
		parent.find('.input-icon').removeClass('active');
	});

	// increment
	$('input[mode="increment"]').on("click", function() {
		var value = $(".home-datetime__qty-form").val();

		$(".home-datetime__qty").addClass("home-datetime__qty--active");
		$('input[mode="increment"]').val(value);
	});
} else{
	// typeahead mobile
	$('input[mode="typeahead_mobile"]').typeahead({ highlight: true, minLength: 1 }, { name: "states", source: substringMatcher(states) });

	// daterangepicker mobile
	$('input[mode="daterange_mobile"]').daterangepicker({
		"autoApply": true
	});

	$('input[mode="daterange"]').val("Kapan?");

	$('input[mode="daterange_mobile"]').on('apply.daterangepicker', function(ev, picker) {
		var start = picker.startDate.format('MMM, D');
		var end = picker.endDate.format('MMM, D');
		if(start == end){
			$(this).val(start);
			$('input[mode="daterange"]').val(start);
		} else{
			$(this).val(start +' - '+ end);
			$('input[mode="daterange"]').val(start + " - " + end);
		}
	});

	$('input[mode="daterange_mobile"]').on('hide.daterangepicker', function(ev, picker) {
		var start = picker.startDate.format('MMM, D');
		var end = picker.endDate.format('MMM, D');

		if(start == end){
			$(this).val(start);
			$('input[mode="daterange"]').val(start);
		} else{
			$(this).val(start +' - '+ end);
			$('input[mode="daterange"]').val(start + " - " + end);
		}

		var parent = $(this).parent();
		parent.find('.input-icon').removeClass('active');
	});

	// increment mobile
	$('input[mode="increment"]').on("click", function() {
		var value = $(".home-datetime__qty-form_mobile").val();
		$('input[mode="increment"]').val(value);
		$(this).attr("readonly", true);
    	openMenuMobile("who");
	});
}

$('input[mode="typeahead"]').click(function(event){
	if(width <= 568){
		$('input[mode="typeahead"]').attr("readonly", true);
		openMenuMobile('where');
		$('input[mode="typeahead_mobile"]').on('input', function() {
			var value = $(this).val();
			$('input[mode="typeahead"]').val(value);
		})
		$('input[mode="typeahead_mobile"]').bind("typeahead:select", function(ev, suggestion) {
			console.log("Selection: " + suggestion);
			$('input[mode="typeahead"]').val(suggestion);
		});
	}
})

$('input[mode="daterange"]').click(function(event) {
  if (width <= 568) {
    $('input[mode="daterange"]').attr("readonly", true);
	openMenuMobile("when");
  }
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

$('.home-datetime__option').on('click', function(){
	var parent = $(this).parent();
	parent.find('.input-icon').addClass('active');
})

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

// selengkapnya
$('.js-selengkapnya').click(function(){
	overlayin();
	$('.modal-open-trip').addClass('active');
})
initMap({lat: -25.363, lng: 131.044})