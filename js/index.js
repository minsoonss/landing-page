const $scroll = $('html, body');

function menuSlide(){
  $('.menuBtn').toggleClass('on');
  $('.menu').toggle();
  $('.bgShadow').toggle();
  if(!$('.kakao').hasClass('fixedOn')){
    $('.kakao').addClass('fixedOn');
    $('.kakao').css({transition: 'none'});
  }else if($(window).scrollTop() == 0){
    $('.kakao').removeClass('fixedOn');
    $('.kakao').css({transition: 'none'});
  };
};

$(function(){
  var windowWidth = $(window).width();
  var scrollMT = 80;

  /*모바일 초기값*/
  function mobileInit(){
    if(windowWidth >= 768){
      scrollMT = 80;
      $('.kakao').text('카카오톡 상담');
      $('.visual .txtBox').addClass('wow fadeIn');
      $('.smartphone').addClass('wow slideInRight');
    }else{
      scrollMT = 60;
      $('.kakao').text('바로 상담하기');
      $('.visual .txtBox').removeClass('wow fadeIn');
      $('.smartphone').removeClass('wow slideInRight');
    };
    if(windowWidth <= 768 && $(window).scrollTop() > 0){
      $('.kakao').addClass('fixedOn');
      $('.kakao').css({transition: 'none'});
    };
  };

  mobileInit();

  /*RESIZE*/
  $(window).resize(function(){
    windowWidth = $(this).width();
    if(windowWidth >= 768){
      scrollMT = 80;
      $('.kakao').text('카카오톡 상담');
    }else{
      scrollMT = 60;
      $('.kakao').text('바로 상담하기');
    };
  });

  /*MENU*/
  $('.menu li:not(:last-child) a').click(function(){
    const menuMove = $(this).attr('href');
    const scrollValue = $(menuMove).offset().top;
    $scroll.stop().animate({'scrollTop': `${scrollValue - scrollMT}px`}, 1000);
  });
  
  /*GRAPH*/
  $(window).scroll(function(){
    const scrollNum = $(this).scrollTop();
    const $circle = $('.insta .imgBox .graph svg circle');
    if(scrollNum >= 500){
      $circle.animate({'stroke-dashoffset': '32.5px'}, 1200);
    };
    if(scrollNum > 0 && !$('.menuBtn').hasClass('on')){
      $('.kakao').addClass('fixedOn');
      $('.kakao').css({transition: 'all 0.4s ease-in-out'})
    }else if(scrollNum == 0 && !$('.menuBtn').hasClass('on')){
      $('.kakao').removeClass('fixedOn');
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