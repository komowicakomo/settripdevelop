function overlayin(){jQuery("body").css("height","100vh").css("overflow-y","hidden")}function overlayout(){jQuery("body").css("height","auto").css("overflow-y","scroll")}function svgToImage(){$("img.svg-image").each(function(){var a=$(this),t=a.attr("id"),e=a.attr("class"),o=a.attr("src");$.get(o,function(o){var n=$(o).find("svg");void 0!==t&&(n=n.attr("id",t)),void 0!==e&&(n=n.attr("class",e+" replaced-svg")),n=n.removeAttr("xmlns:a"),a.replaceWith(n)},"xml")})}$(document).on("click",".radio-area label",function(){$(".radio-area label").removeClass("active"),$(this).addClass("active")}),$(document).on("click",".checkbox-area label",function(){$(this).toggleClass("active")}),$(document).on("change",".upload-box input",function(){var a=[],t=$(this),e=$(this).val().replace(/C:\\fakepath\\/i,"");if(this.files&&this.files[0]){var o=new FileReader;o.onload=function(t){a.push(t.target.result)},o.readAsDataURL(this.files[0])}setTimeout(function(){t.parents(".upload-box").find(".file_name").val(e)},100)});var max=20;$(document).on("click",".qtyplus",function(a){a.preventDefault();var t=$(this).parents(".qty-form").find(".qty"),e=parseInt($(t).val());!isNaN(e)&&e<max?$(t).val(e+1):$(t).val(max)}),$(document).on("click",".qtyminus",function(a){a.preventDefault();var t=$(this).parents(".qty-form").find(".qty"),e=parseInt($(t).val());!isNaN(e)&&e>0?$(t).val(e-1):$(t).val(0)}),$(document).on("click",".btn-js-action",function(){var a=$(this).attr("data-action");console.log(a),"open-modal"===a&&overlayin(),"close-modal"===a&&(overlayout(),$(this).parents(".modal-overlay").removeClass("active"))}),jQuery.fn.removeClassExcept=function(a){return this.each(function(){$(this).removeClass().addClass(a)})},$(window).on("load",function(){svgToImage()});