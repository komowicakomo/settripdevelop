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
    if (!isNaN(currentVal) && currentVal > 0) {
        // Decrement one
        $(fieldName).val(currentVal - 1)
    } else {
        // Otherwise put a 0 there
        $(fieldName).val(0)
    }
})
