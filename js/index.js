const $scroll = $('html, body');
var num = 0;

function menuSlide(){
  $('.menuBtn').toggleClass('on');
  $('.menu').toggle();
  $('.bgShadow').toggle();
};

$(function(){
  /*MENU*/
  $('.menu li:not(:last-child) a').click(function(){
    const menuMove = $(this).attr('href');
    const scrollValue = $(menuMove).offset().top;
    $scroll.stop().animate({'scrollTop': `${scrollValue - 80}px`}, 1000)
  });
  
  /*GRAPH*/
  $(window).scroll(function(){
    const scrollNum = $(this).scrollTop();
    const $circle = $('.insta .imgBox .graph svg circle');
    if(scrollNum >= 500){
      $circle.animate({'stroke-dashoffset': '32.5px'}, 1200);
    };
  });
  
  /*SWIPER*/
  var swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    loop: true,
  });
  
  /*WOW MASTER*/
  new WOW().init();
});