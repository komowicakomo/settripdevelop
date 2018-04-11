

 $(document).ready(function () {

   var galleryTop = new Swiper('.gallery-top', {
       effect : 'fade'
   });

   var galleryThumbs = new Swiper(".gallery-thumbs", {
     spaceBetween: 20,
     slidesPerView: 5,
     slideToClickedSlide: true,
     centeredSlides: true,
     nextButton: ".swiper-button-next",
     prevButton: ".swiper-button-prev",
     breakpoints: {
       580: {
         initialSlide: 0,
         slidesPerView: 2
       }
     }
   });
   galleryTop.params.control = galleryThumbs;
   galleryThumbs.params.control = galleryTop;

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

   $(".js-value").click(function() {
       $(".detail-price").toggleClass('active');
       $(".detail-price__overlay").toggleClass("active");
   })

 })
