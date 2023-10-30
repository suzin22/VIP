$(function(){
  // HD현대 in social swiper 
  function mainSocialSwiper() {
    var social_swiper = new Swiper(".main-social .social-swiper", {
      slidesPerView: 'auto',
      spaceBetween: 20,
      pagination: {
        el: ".social-progress-bar .swiper-pagination",
        type: "progressbar",
      },
    })
  }
  // HD현대 in social swiper 

  // main 주가정보
  const counterHtml = document.querySelector('.counter').innerHTML

  window.addEventListener('scroll',(e) => {
    const mainSocialOffsetTop = document.querySelector('.main-social').offsetTop
    if( window.scrollY + 500 <= mainSocialOffsetTop){
      document.querySelector('.counter').innerHTML = counterHtml
    }
  })
  
  $('.counter').counterUp({
    delay: 10,
    time: 1000,
  });
  // main 주가정보 e

  // 상단 이동 버튼 s
  function topBtnClick() {
    var topBtn = $('.top-btn');

    topBtn.on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop:0}, 300);
    })
  }
  // 상단 이동 버튼 e

  function accBtnClick() {
    var accBtn = $('.accordion');

    accBtn.on('click', function(e) {
      if (!$(this).parents('.acc-inner').is('.active')) {
        $('.acc-inner').removeClass('active');
        $('.acc-inner').find('.panel').slideUp();

        $(this).parents('.acc-inner').addClass('active');
        $(this).parents('.acc-inner').find('.panel').stop().slideDown();
      }else{
        $(this).parents('.acc-inner').removeClass('active');
        $(this).parents('.acc-inner').find('.panel').stop().slideUp();
      }
    })
  }

  $('.en-btn li').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
  })

  $('.menu-btn').click(function(e) {
    $(this).toggleClass('on');
    $('.header-wrap').toggleClass('active');

    return false;
  });

  topBtnClick();
  mainSocialSwiper();
  accBtnClick();
})