const $scroll = $('html, body');

function menuSlide(){
  $('.menuBtn').toggleClass('on');
  $('.menuBtn').toggleClass('animated');
  $('.menu').toggle();
  $('.bgShadow').toggle();
  $('.kakao').attr('data-animated', 'false');
  if(!$('.kakao').hasClass('fixedOn')){
    $('.kakao').addClass('fixedOn');
  }else if($(window).scrollTop() == 0){
    $('.kakao').removeClass('fixedOn');
  };
};

function contactPopupClose(){
  $('.contactPopup').hide();
  $('#account').val('');
  $('#tel').val('');
  $('#question').val('');
};

function privacyCheck(){
  !$('.privacyBox label').hasClass('on') ? $('.privacyBox label').addClass('on') : $('.privacyBox label').removeClass('on');
};

function privacyPopupClose() {
  $('.privacyPopup').hide();
};

function assentCheck(){
  if ($('.privacyBox input').is(':checked')) {
    $('.inquiryBtn').removeAttr('disabled');
  } else {
    $('.inquiryBtn').attr('disabled', '');
  };
};

$(function(){
  var windowWidth = $(window).width();
  var scrollMT = 80;
  var scrollNum

  /*모바일 초기값*/
  function mobileInit(){
    if(windowWidth >= 768){
      scrollMT = 80;
      $('.kakao').text('카카오톡 상담');
      $('.visual .txtBox').addClass('wow fadeIn');
      $('.smartphone').addClass('wow slideInRight');
      $('.service .serviceIntro .imgBox img:first-child').addClass('wow fadeInUpBig');
      $('.service .serviceIntro .imgBox img:not(:first-child)').addClass('wow fadeIn');
    }else{
      scrollMT = 59;
      $('.kakao').text('바로 상담하기');
      $('.visual .txtBox').removeClass('wow fadeIn');
      $('.smartphone').removeClass('wow slideInRight');
      $('.service .serviceIntro .imgBox img:first-child').removeClass('wow fadeInUpBig');
      $('.service .serviceIntro .imgBox img:not(:first-child)').removeClass('wow fadeIn');
    };
    if(windowWidth <= 768 && $(window).scrollTop() > 0){
      $('.kakao').addClass('fixedOn');
    }else if(windowWidth <= 768 && $(window).scrollTop() <= 0){
      $('.kakao').attr('data-animated', 'true');
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
      scrollMT = 59;
      $('.kakao').text('바로 상담하기');
    };
  });

  /*MENU*/
  $('.menu li a').click(function(e){
    e.preventDefault();
    if(windowWidth <= 768){
      $('.menuBtn').removeClass('on');
      $('.menu').hide();
      $('.bgShadow').hide();
    };
    const menuMove = $(this).attr('href');
    const scrollValue = $(menuMove).offset().top;
    $scroll.stop().animate({'scrollTop': `${scrollValue - scrollMT}px`}, 1000, function(){
      $('.menuBtn').removeClass('animated');
    });
  });
  
  /*GRAPH*/
  $(window).scroll(function(){
    $('.kakao').attr('data-animated', 'true');
    scrollNum = $(this).scrollTop();
    const $circle = $('.insta .imgBox .graph svg circle');
    if(scrollNum >= 500){
      $circle.animate({'stroke-dashoffset': '32.5px'}, 1200);
    };
    if(scrollNum > 0 && !$('.menuBtn').hasClass('animated')){
      $('.kakao').addClass('fixedOn');
    }else if(scrollNum <= 0 && !$('.menuBtn').hasClass('animated')){
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

  /*CONTACT*/
  var expService;

  $('.expBtn').click(function(){
    $('.contactPopup').show();
    expService = $(this).data('exp');
    $('.user_choose').text(expService);

    return expService = $(this).data('exp');
  });

  $('.privacyPopupOpen').click(function(e){
    e.preventDefault();
    $('.privacyPopup').show();
  });

  $('.contactPopup .bg').click(function(){
    if($('.privacyPopup').is(':visible')){
      $('.privacyPopup').hide();
    }else{
      $('.contactPopup').hide();
      $('#account').val('');
      $('#tel').val('');
      $('#question').val('');
    };
  });
  
  $('#contactForm').submit(function(e){
    e.preventDefault();

    var account = this.account.value;
    var tel = this.tel.value;
    var question = this.question.value;
    
    var message = `[체험 서비스]\n${expService}\n\n[인스타그램]\n${account}\n\n[연락처]\n${tel}\n\n[문의 내용]\n${question}\n\n[담당자]\n분배 예정`;
    var chat_id = -582605434
    
    var settings = {
      "url": "https://api.telegram.org/bot1759168713:AAFUFoh_UBj31iug02djJxwlq-JSK5cDpWg/sendMessage",
      "method": "POST",
      "timeout": 0,
      "headers": {
        "Content-Type": "application/json"
      },
      "data": JSON.stringify({
        "chat_id": -1001316142800,
        "text": message
      }),
    };

    $.ajax(settings).done(function (response) {
      location.assign(location.origin + "/thankyou.html");
    });
  });

  /*WOW MASTER*/
  new WOW().init();
});