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

  topBtnClick();
  mainSocialSwiper();
})