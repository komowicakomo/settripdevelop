// Adding fast click js to document
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
      FastClick.attach(document.body);
  }, false);
}

// login, register & profile
$('.home-datetime__option').click(function(){
	var content = $(this).parents('.home-datetime__choose');
	content.find('.input-icon').addClass('active');
})
$('.home-datetime__option').blur(function(){
	var content = $(this).parents('.home-datetime__choose');
	content.find('.input-icon').removeClass('active');
})
$('.open--login-head').on('click', function(){
	$.login();
})
$('.header__login').on('click', function(){
	$('.header__profile--menu').toggleClass('active')
})

// mobile menu
function openMenuMobile(mode){
	if(!mode){
		mode = 'menu'
	}
	$(".sidemenu").attr("mode", mode);
	$('body').css('overflow', 'hidden');
}
function closeMenuMobile(){
	$(".sidemenu").attr("mode", "");
	$('body').css('overflow', 'auto');
}