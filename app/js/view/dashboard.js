$(document).on('click','.panel-head li' , function(){
  var index = $(this).index()
  $('.panel-head li').removeClass('active')
  $(this).addClass('active')
  $('.panel-inside').removeClass('active')
  $(this).parents('.profile-body').find('.panel-inside').eq(index).addClass('active')
})
