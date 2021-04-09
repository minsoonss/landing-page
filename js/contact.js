function menuSlide() {
  $('.menuBtn').toggleClass('on');
  $('.menu').toggle();
  $('.bgShadow').toggle();
};

function privacyPopupOpen() {
  if (!$('.privacyBox label').hasClass('on')) {
    $('.privacyBox label').addClass('on');
    $('.privacyPopup').show();
  } else {
    $('.privacyBox label').removeClass('on');
  };
};

function privacyPopupClose() {
  $('.privacyPopup').hide();
};

function assentCheck() {
  if ($('.privacyBox input').is(':checked')) {
    $('.inquiryBtn').removeAttr('disabled');
  } else {
    $('.inquiryBtn').attr('disabled', '');
  };
};

$(function () {
  $('#contactForm').submit(function (e) {
    e.preventDefault();

    var account = this.account.value;
    var tel = this.tel.value;
    var question = this.question.value;

    const url = 'https://api.telegram.org/bot1759168713:AAER07C-Yr5UiJhKSJlIWjkKjbC4fCUCcXg/sendMessage';
    var message = `[인스타그램]\n${account}\n\n[연락처]\n${tel}\n\n[문의 내용]\n${question}\n\n[담당자]\n분배 예정`;
    var chat_id = -582605434

    // $.ajax({
    //   url:`${url}[인스타그램]%0A${account}%0A%0A[연락처]%0A${tel}%0A%0A[문의 내용]%0A${question}%0A%0A[담당자]]%0A분배 예정`,
    //   type: "get",
    //   data: {
    //     account: account,
    //     tel: tel,
    //     question: question,
    //   },
    //   dataType: "json",
    //   error: function(err){
    //     console.log('문의 전송에 실패했습니다.');
    //   },
    //   success: function(result){
    //     location.assign(location.origin + "/thankyou.html");
    //   }
    // });

    var settings = {
      "url": "https://api.telegram.org/bot1759168713:AAER07C-Yr5UiJhKSJlIWjkKjbC4fCUCcXg/sendMessage",
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
});
