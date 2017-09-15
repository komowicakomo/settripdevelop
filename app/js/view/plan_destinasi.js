$(document).on('click','button' , function(){
  var actionFor = $(this).attr('data-actionFor')
  $(this).parents('body').find('.'+actionFor).addClass('active')
})
