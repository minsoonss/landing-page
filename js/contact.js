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

function thanksPopupOpen(){
  $('html, body').css({overflow: 'hidden'});
  $('.thanksPopup').show();
};

function thanksPopupClose(){
  document.location.reload(true);
};

let countNum = 5;

function countDown(){
  countNum--;
  countNum == 0 ? document.location.reload(true) : $('.count').text(countNum);
};

$(function(){
  $('#contactForm').submit(function(e){
    e.preventDefault();
    
    var account = this.account.value;
    if(account == '없음'){
      account = '고객'
    }
    const tel = this.tel.value;
    var question = this.question.value;
    question = question.replace(/(?:\r\n|\r|\n)/g, '%0A');
    const url = 'https://api.telegram.org/bot1705197010:AAH-lFSv5f38F7Ah0P3vOGm0xxcNMra9Uto/sendMessage?chat_id=-1001470556159&text=';

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
        console.log('문의가 전송되었습니다.');
      }
    });

    $('.userName').text(account);
    thanksPopupOpen();
    setInterval(countDown, 1000);
  });
});