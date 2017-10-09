// slider
 $(document).ready(function () {
    //initialize swiper when document ready  
    var cardSwiper = new Swiper ('.card__slider', {
      // Optional parameters
      direction: 'horizontal',
      speed: 800,

      simulateTouch: false,
      paginationClickable: true,

	  // If we need pagination
	  pagination: '.card-pagination'
    })    
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