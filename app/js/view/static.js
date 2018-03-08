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

$('.js-faq').click(function(){
	if(!$(this).hasClass('active')){
		$('.js-faq').removeClass('active');
	}
	$(this).toggleClass('active');
})