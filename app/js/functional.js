$.currencyFormat = function (data) {
	return data.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}

$.onLoading = function (message) {
	var loader = $('#loader')
	loader.fadeIn()
}

$.hideLoading = function () {
	var loader = $('#loader')
	loader.fadeOut()
}

$.alert = function (message, ok, title) {
	// alert(message)
	modalContainer.fadeIn()
	modalContainer.addClass('error')

	if(message !== undefined){
		modalContainer.find('.mt--body').html(message)
	}

	if(title !== undefined){
		modalContainer.find('.mt--head').html(title)
	}

	$(".btnAlertOk").unbind("click")
	$(".btnAlertOk").click(function (e) {
		e.preventDefault()
		if (ok != undefined && typeof (ok) == 'function')
			ok()
		closeModal()
	})
}

$(document).on('click','.close--modal',function(){
	closeModal()
})

var closeModal = function(){
	$('#general--modal').fadeOut()
	$('#general--modal').removeClass()
	$('#general--modal').addClass('general--modal')
  $('body').css('overflow', 'auto');
}

var modalContainer = $('#general--modal')

$.info = function (message, ok, title, redir_url) {
	// alert(message)

	modalContainer.fadeIn()
	modalContainer.addClass('info')

	if(message !== undefined){
		modalContainer.find('.mt--body').html(message)
	}

	if(title !== undefined){
		modalContainer.find('.mt--head').html(title)
	}

	$(".btnInfoOk").unbind("click")

	$(".btnInfoOk").click(function (e) {

		e.preventDefault()

		if (ok !== undefined && typeof (ok) === 'function'){
			ok()
		}

		if (redir_url){

			$.redirect(redir_url)

		}

		closeModal()

	})
}

$.success = function (message, ok, title, redir_url) {
  // alert(message)

  modalContainer.fadeIn()
  modalContainer.addClass('success')

  if(message !== undefined){
    modalContainer.find('.mt--body').html(message)
  }

  if(title !== undefined){
    modalContainer.find('.mt--head').html(title)
  }

  $(".btnInfoOk").unbind("click")

  $(".btnInfoOk").click(function (e) {

    e.preventDefault()

    if (ok !== undefined && typeof (ok) === 'function'){
      ok()
    }

    if (redir_url){

      $.redirect(redir_url)

    }

    closeModal()

  })
}

$.sent = function (message, title) {
  // alert(message)

  modalContainer.fadeIn()
  modalContainer.addClass('sent')

  if(message !== undefined){
    modalContainer.find('.mt--body').html(message)
  }

  if(title !== undefined){
    modalContainer.find('.mt--head').html(title)
  }
}

$.confirm = function (message , title , yes, no, ) {

	modalContainer.fadeIn()
	modalContainer.addClass('confirmation')

	if(message !== undefined){
		modalContainer.find('.mt--body').html(message)
	}

	if(title !== undefined){
		modalContainer.find('.mt--head').html(title)
	}

	$(".btnConfirmCancel").unbind("click")

	$(".btnConfirmCancel").click(function () {
		if (no != undefined && typeof (no) == 'function')

			no()

			closeModal()

	})

	$(".btnConfirmOk").unbind("click")

	$(".btnConfirmOk").click(function () {
		if (yes != undefined && typeof (yes) == 'function')
			yes()

			closeModal()

	})
}

// update 2/Des/2017

// need update for param ok, action, redir_url
$.login = function (ok, action, redir_url) {
  // alert(message)

  modalContainer.fadeIn()
  modalContainer.addClass('login')

  $(".btnInfoOk").unbind("click")
  $(".open--register").unbind("click")
  $(".open--forgot").unbind("click")

  $(".btnInfoOk").click(function (e) {

    e.preventDefault()

    if (ok !== undefined && typeof (ok) === 'function'){
      ok()
    }

    if (action !== undefined && typeof (action) === 'function'){
      action()
    }

    if (redir_url){

      $.redirect(redir_url)

    }

    closeModal()

  })

  $('.open--register').on('click', function(e){
    e.preventDefault()

    closeModal();

    setTimeout(function(){
      $.register();
    }, 300);
  })

  $('.open--forgot').on('click', function(e){
    e.preventDefault()

    closeModal();

    setTimeout(function(){
      $.forgot();
    }, 300);
  })
}

// need update for param ok, action, redir_url
$.register = function (ok, action, redir_url) {
  // alert(message)

  $('body').css('overflow', 'hidden');

  modalContainer.fadeIn()
  modalContainer.addClass('register')

  $(".btnInfoOk").unbind("click")
  $(".open--login").unbind("click")

  $(".btnInfoOk").click(function (e) {

    e.preventDefault()

    if (ok !== undefined && typeof (ok) === 'function'){
      ok()
    }

    if (action !== undefined && typeof (action) === 'function'){
      action()
    }

    if (redir_url){

      $.redirect(redir_url)

    }

    closeModal()

  })

  $('.open--login').on('click', function(e){
    e.preventDefault()

    closeModal();

    setTimeout(function(){
      $.login();
    }, 300);
  })
}

// need update for param ok and action
$.forgot = function (ok, action) {
  // alert(message)

  modalContainer.fadeIn()
  modalContainer.addClass('forgot')

  $(".btnInfoOk").unbind("click")

  $(".btnInfoOk").click(function (e) {

    e.preventDefault()

    if (ok !== undefined && typeof (ok) === 'function'){
      ok()
    }

    if (action !== undefined && typeof (action) === 'function'){
      action()
    }

    if (redir_url){

      $.redirect(redir_url)

    }

    closeModal()

  })
}

$.prompt = function (message, ok) {
	return prompt(message)
}

$.resetParsley = function () {
	$('form.parsley-validate').each(function () {
		if ($(this).parsley() != undefined)
			$(this).parsley().reset()
	})
}

$.clearForm = function (form) {
	$(form).find("input[type=number]")
		.val('')
	$(form).find("input[type=text]")
		.val('')
	$(form).find("input[type=file]")
		.val('')
	$(form).find("input[type=password]")
		.val('')
	$(form).find("textarea")
		.val('')
	$(form).find("select option")
		.removeAttr('selected')
	$(form).find("select").val('').trigger('change')
	$(form).find("input[type=checkbox]")
		.removeAttr('checked')
	$(form).find("input[type=radio]")
		.removeAttr('checked')
	$(form).find("input[type=radio]")
		.removeAttr('selected')
	$(form).find(".tinymce").each(function () {
		var id = $(this).attr('id')
		var editor = tinymce.get(id)
		if (editor != undefined) {
			var val = editor.setContent('')
		}
	})
	$(form).find(".tagitcontrol").each(function () {
		if ($.isFunction($.fn.tagit)) {
			$(this).tagit('removeAll')
		}
	})
}


function overlayin (){
    jQuery('body').css('height', '100vh').css('overflow-y', 'hidden');
   /* disableScrolling();*/

}

function overlayout (){
    jQuery('body').css('height', 'auto').css('overflow-y', 'scroll');
  /*  enableScrolling();*/

}

$(document).on('click','.radio-area label',function(){
    $('.radio-area label').removeClass('active')
    $(this).addClass('active')
})

$(document).on('click','.checkbox-area label',function(){
    $(this).toggleClass('active')
})


$(document).on('change','.upload-box input',function(){
  var target = []
  var $this = $(this)
  var filename = $(this).val().replace(/C:\\fakepath\\/i, '')
  if (this.files && this.files[0]) {
      var reader = new FileReader()

      reader.onload = function (e) {
          target.push(e.target.result)
      }
      reader.readAsDataURL(this.files[0])
  }
  setTimeout(function(){
      $this.parents('.upload-box').find('.file_name').val(filename)
  }, 100)
})

var max = 20

$(document).on('click','.qtyplus',function (e) {
    // Stop acting like a button
    e.preventDefault()
    // Get the field name
    var fieldName = $(this).parents('.qty-form').find('.qty')
    // Get its current value
    var currentVal = parseInt($(fieldName).val())
    // If is not undefined
    if (!isNaN(currentVal) && currentVal < max) {
        // Increment
        $(fieldName).val(currentVal + 1)
    } else {
        // Otherwise put a 0 there
        $(fieldName).val(max)
    }
    $(fieldName).change();
})
// This button will decrement the value till 0
$(document).on('click','.qtyminus',function (e) {
    // Stop acting like a button
    e.preventDefault()
    // Get the field name
    var fieldName = $(this).parents('.qty-form').find('.qty')
    // Get its current value
    var currentVal = parseInt($(fieldName).val())
    // If it isn't undefined or its greater than 0
    if (!isNaN(currentVal) && currentVal > 1) {
        // Decrement one
        $(fieldName).val(currentVal - 1)
    } else {
        // Otherwise put a 0 there
        $(fieldName).val(0)
    }
    $(fieldName).change();
})

function svgToImage(){
  $('img.svg-image').each(function(){
      var $img = $(this)
      var imgID = $img.attr('id')
      var imgClass = $img.attr('class')
      var imgURL = $img.attr('src')

      $.get(imgURL, function(data) {
          // Get the SVG tag, ignore the rest
          var $svg = $(data).find('svg')

          // Add replaced image's ID to the new SVG
          if(typeof imgID !== 'undefined') {
              $svg = $svg.attr('id', imgID)
          }
          // Add replaced image's classes to the new SVG
          if(typeof imgClass !== 'undefined') {
              $svg = $svg.attr('class', imgClass+' replaced-svg')
          }

          // Remove any invalid XML tags as per http://validator.w3.org
          $svg = $svg.removeAttr('xmlns:a')

          // Replace image with new SVG
          $img.replaceWith($svg)

      }, 'xml')
  })
}

$(document).on('click','.btn-js-action' , function(){
  var action = $(this).attr('data-action')
  console.log(action)
  if( action === 'open-modal'){
    overlayin()
  }
  if( action === 'close-modal'){
    overlayout()
    $(this).parents('.modal-overlay').removeClass('active')
  }
})

jQuery.fn.removeClassExcept = function (val) {
    return this.each(function () {
        $(this).removeClass().addClass(val);
    });
};


var renderStar = function() {
  var container = $('.planbox-rating.star-rating')

  container.each(function(){
    var Star = '<em class="fa fa-star" aria-hidden="true"></em>'
    var StarGrey = '<em class="fa fa-star" aria-hidden="true" style="color: #d5d5d5;"></em>'
    var Count = $(this).attr('data-star')
    var Gray = $(this).attr('data-grey')
    var StarContainer = $(this).find('.rating-container')
    var StarTemp = ''
    if(Gray == 'true'){
      for( var x = 0 ; x < 5 ; x++ ){
        if(x < Count){
          StarTemp = StarTemp + Star
        } else{
          StarTemp = StarTemp + StarGrey
        }
      }
    } else{
      for( var x = 0 ; x < Count ; x++ ){
        StarTemp = StarTemp + Star
      }
    }
    StarContainer.append(StarTemp)
  })
}


function initMap ( container ,  locations , callback ) {

	var location = locations
	var containers = container !== undefined ? container : 'map'
	var containerOuter = document.getElementById(containers)

	console.log(containerOuter)

	if ( containerOuter !== null){

		var map = new google.maps.Map( containerOuter , {
	          zoom: 4,
	          center: location
	  })

		var marker = new google.maps.Marker({
	          position: location ,
	          map: map
	  })

	}

  if (callback !== undefined){
    callback()
  }

}

// js for plan filter

// $(document).on('click','.modal-pd-filter .mpd-child',function(){

//   $(this).toggleClass('active')

// })

$(document).on('click','.js-open-filter',function(){
	$(this).toggleClass('active')
  $('.modal-pd-body').toggleClass('filter-show')
  $('.modal-filter-body').toggleClass('filter-show')
})

$(document).on('click','.js-close-filter',function(){
  $('.js-open-filter').removeClass('active')
  $('.modal-pd-body').removeClass('filter-show')
  $('.modal-filter-body').removeClass('filter-show')
})

$(document).on('click','.filter-menu-box',function(){

  var index = $(this).index()
  var target = $(this).parents('.modal-filter-body').find('.modal-child-filter .mcf-action')

  $('.filter-menu-box').removeClass('active')
  $(this).addClass('active')

  target.removeClass('active')
  target.eq(index).addClass('active')

})


$(window).on('load',function(){

  renderStar()

  svgToImage()

  $('.point-square-bottom').each(function(){

    var Connector = '<div class="point-connector"></div>'
    var Parents = $(this).parents('.itn-body-box')
    var Index = Parents.index() + 1
    var NextPoint = $('.itn-body-box').eq(Index)
    var CurPos = $(this).offset()
    var NextPos = NextPoint.find('.point-square-top').offset()

    if(NextPos !== undefined){
      var ConnectorH = NextPos.top - CurPos.top
      $(this).append(Connector)

      $(this).find('.point-connector').css('height' , ConnectorH)
    }

  })

})
