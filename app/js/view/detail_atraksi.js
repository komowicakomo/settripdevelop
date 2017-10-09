

 $(document).ready(function () {

   var galleryTop = new Swiper('.gallery-top', {
       effect : 'fade'
   });

   var galleryThumbs = new Swiper('.gallery-thumbs', {
       spaceBetween: 20,
       slidesPerView: 5,
       slideToClickedSlide: true,
       centeredSlides: true,
       nextButton: '.swiper-button-next',
       prevButton: '.swiper-button-prev',
   });
   galleryTop.params.control = galleryThumbs;
   galleryThumbs.params.control = galleryTop;

   initMap({lat: -25.363, lng: 131.044})

 })
