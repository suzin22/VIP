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
  // //HD현대 in social swiper 

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

  // 메인 상단 동영상 gsap 셋팅
  var item = gsap.utils.toArray(".kv-pin")

  const itemMotion = (panel, i) => {
    document.querySelectorAll('.kv-pin').forEach((e, index) => {
      e.classList.remove('is-active')
      document.querySelector('.main-kv .top').classList.remove('is-' + index)
      document.querySelector('.main-kv .bottom').classList.remove('is-' + index)
      document.querySelector('.main-kv .bottom-text').classList.remove('is-' + index)
    })

    document.querySelector('.main-kv .top').classList.add('is-' + i)
    document.querySelector('.main-kv .bottom').classList.add('is-' + i)
    document.querySelector('.main-kv .bottom-text').classList.add('is-' + i)

    $(panel).addClass('is-active')
  }

  item.forEach((panel, i) => {
    ScrollTrigger.create({
      trigger: panel,
      start: "top top",
      pin: true, 
      pinSpacing: false,
      markers: false,

      onEnter: () => {
        itemMotion(panel, i)
      },
      onEnterBack: () => {
        itemMotion(panel, i)
      }
    });
  });

  // main business 스크롤 이벤트 s
  gsap.set(".split-tit .wrap-1 img", {'bottom':'78px', y:100}) // 타이틀
  gsap.set(".split-tit .wrap-2 img", {'top':'-124px', y:100}) // 타이틀

  // 상단 ~ 조선해양
  let splitPin = gsap.timeline({
    scrollTrigger: {
      trigger: ".gsap-box-1",
      start: "top top",
      scrub: 2, // 숫자가 커질수록 부드러워짐
      pin: true, // pin: '.selector'시 특정 엘리먼트가 고정
      smooth: 1,
      pinSpacing: false,
      // markers: true,
    }
  });

  splitPin.addLabel("label1")
  .to(".split-tit .wrap-1", {yPercent:-100, duration: 3}, 'start0')
  .to(".split-tit .wrap-1 img", {'bottom':'-300px', duration: 3}, 'start0')
  .to(".split-tit .wrap-2", {yPercent:100, duration: 3}, 'start0')
  .to(".split-tit .wrap-2 img", {'top':'-300px', duration: 3}, 'start0')

  // BUSINESS ITEM
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.7,
    spaceBetween: 57,
    centeredSlides: true,
    loop: false,
  });

  // $('html, body').animate({scrollTop:3800}, 300);
})
// //BUSINESS ITEM