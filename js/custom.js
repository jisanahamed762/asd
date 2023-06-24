$(function(){
  
  // service-slider section =========>
$('.service-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows:false,
    autoplaySpeed: 2500,
    speed:1000,
  });
  // gallery filter========>
  var containerEl = document.querySelector('.filters');

  var mixer = mixitup(containerEl);
  // video section =========>
  $('.venobox').venobox(); 
  // counter section =========>
  $('.counter').counterUp({
    delay: 10,
    time: 5000
});
  // photo-slider section =========>
  $('.photo-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows:false,
    autoplaySpeed: 2500,
    speed:1000,
  });
  // back-to-top section =========>
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop:0}, 1500);
    });
    
    $(window).scroll(function(){
      var scrolling = $(this).scrollTop();
      if(scrolling > 300){
        $('.back-to-top').fadeIn(500);
      }
      else {
        $('.back-to-top').fadeOut(500);
      }
    });
  // video section =========>
  // video section =========>
});