function menuSlide(){
  $('.menuBtn').toggleClass('on');
  $('.menu').toggle();
  $('.bgShadow').toggle();
};

function privacyPopupOpen(){
  if(!$('.privacyBox label').hasClass('on')){
    $('.privacyBox label').addClass('on');
    $('.privacyPopup').show();
  }else{
    $('.privacyBox label').removeClass('on');
  };
};

function privacyPopupClose(){
  $('.privacyPopup').hide();
};

function assentCheck(){
  if($('.privacyBox input').is(':checked')){
    $('.inquiryBtn').removeAttr('disabled');
  }else{
    $('.inquiryBtn').attr('disabled', '');
  };
};

$(function(){
  $('#contactForm').submit(function(e){
    e.preventDefault();
    
    var account = this.account.value;
    account = account.replaceAll('??', '');
    account = account.replaceAll('&', '/');
    var tel = this.tel.value;
    tel = tel.replaceAll('??', '');
    tel = tel.replaceAll('&', '/');
    var question = this.question.value;
    question = question.replaceAll(/(?:\r\n|\r|\n)/g, '%0A');
    question = question.replaceAll('??', '%0A');
    question = question.replaceAll('&', '/');
    const url = 'https://api.telegram.org/bot1705197010:AAH0cbhhcr9ov0Ddp8Hx-TYYWARZJHY-rTQ/sendMessage?chat_id=-1001470556159&text=';

    $.ajax({
      url:`${url}[인스타그램]%0A${account}%0A%0A[연락처]%0A${tel}%0A%0A[문의 내용]%0A${question}%0A%0A[담당자]%0A분배 예정`,
      type: "get",
      data: {
        account: account,
        tel: tel,
        question: question,
      },
      dataType: "json",
      error: function(err){
        console.log('문의 전송에 실패했습니다.');
      },
      success: function(result){
        location.assign(location.origin + "/thankyou.html");
      }
    });
  });
});
