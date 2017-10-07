$('input[mode="daterange"]').daterangepicker({
	"autoApply": true,
	"showCustomRangeLabel": false
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

$('body').click(function(evt){    
   if(evt.target.id != "qty")
      $('.home-datetime__qty').removeClass('home-datetime__qty--active');
   //For descendants of menu_content being clicked, remove this check if you do not want to put constraint on descendants.
   // if($(evt.target).closest('#menu_content').length)
   //    return;             

  //Do processing of click event here for every element except with id menu_content

});

$('input[mode="increment"]').on('click', function(){
	$('.home-datetime__qty').addClass('home-datetime__qty--active');
	$('input[mode="increment"]').val(1);
});

$('.home-datetime__qty-btn').on('click', function(){
	$('.home-datetime__qty').removeClass('home-datetime__qty--active');
});

$('.home-datetime__qty-form').on('change', function(event){
	var value = $(this).val();
	$('input[mode="increment"]').val(value);
});