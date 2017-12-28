$(document).on('click','button' , function(){
  var actionFor = $(this).attr('data-actionFor')
  $(this).parents('body').find('.'+actionFor).addClass('active')
})

var keypressSlider = document.getElementById('keypress');
var input0 = document.getElementById('input-with-keypress-0');
var input1 = document.getElementById('input-with-keypress-1');
var inputs = [input0, input1];

noUiSlider.create(keypressSlider, {
	start: [20, 80],
	connect: true,
	direction: 'rtl',
	range: {
		'min': [0],
		'10%': [10, 10],
		'50%': [80, 50],
		'80%': 150,
		'max': 200
	}
});

keypressSlider.noUiSlider.on('update', function( values, handle ) {
	inputs[handle].value = values[handle];
});


function setSliderHandle(i, value) {
	var r = [null,null];
	r[i] = value;
	keypressSlider.noUiSlider.set(r);
}

// Listen to keydown events on the input field.
inputs.forEach(function(input, handle) {

	input.addEventListener('change', function(){
		setSliderHandle(handle, this.value);
	});

	input.addEventListener('keydown', function( e ) {

		var values = keypressSlider.noUiSlider.get();
		var value = Number(values[handle]);

		// [[handle0_down, handle0_up], [handle1_down, handle1_up]]
		var steps = keypressSlider.noUiSlider.steps();

		// [down, up]
		var step = steps[handle];

		var position;

		// 13 is enter,
		// 38 is key up,
		// 40 is key down.
		switch ( e.which ) {

			case 13:
				setSliderHandle(handle, this.value);
				break;

			case 38:

				// Get step to go increase slider value (up)
				position = step[1];

				// false = no step is set
				if ( position === false ) {
					position = 1;
				}

				// null = edge of slider
				if ( position !== null ) {
					setSliderHandle(handle, value + position);
				}

				break;

			case 40:

				position = step[0];

				if ( position === false ) {
					position = 1;
				}

				if ( position !== null ) {
					setSliderHandle(handle, value - position);
				}

				break;
		}
	});
});

initMap( 'marketplace-map' , {lat: -25.363, lng: 131.044})

initMap( 'map' , {lat: -25.363, lng: 131.044})

$(document).on('click','.planbox-body-action',function(){
  $(this).parents('.plan-cart-box').find('.pcb-body').slideToggle()
})

$(document).on('click','.modal-pd-double .mpd-single',function(){
  $('.modal-pd-double .mpd-single').removeClass('active')
  $(this).addClass('active')
  var target = $(this).attr('data-target')
  $('.modal-pd-body').removeClass('active')
  $('#'+target).addClass('active')
  if(target == 'with-map'){
    google.maps.event.trigger( document.getElementById('marketplace-map') ,'resize')
  }
})
