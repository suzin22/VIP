$(document).ready(function(){

  // scroll fade animation s
  let $window = $(window)
  $window.on('scroll', function(event) {
    let $windowScrollTop = $window.scrollTop()

    document.querySelectorAll('.fadeAni').forEach((e, index) => {
      // console.log(e.className)
      // console.log(`${e.offsetTop} + ${index}`)

      if( $windowScrollTop + 1000 >= e.offsetTop){
        e.classList.add('on')
      }else{
        e.classList.remove('on')
      }
    })
  });
  // scroll fade animation e

  // main business 스크롤 이벤트 s
  gsap.set(".bs-box .box-tit", {'opacity':'0', y:100});

  let splitPin = gsap.timeline({
    scrollTrigger: {
      trigger: ".main-business",
      start: "top top",
      end: "+=2000", // 속도 조절
      scrub: true,
      pin: true,
      smooth: 1,
      // markers: true,
    }
  });

  splitPin.addLabel("label1")
  .to(".split-tit .wrap-1", {yPercent:-100, duration: 3}, 'start0')
  .to(".split-tit .wrap-1 img", {'bottom':'-300px', duration: 3}, 'start0')
  .to(".split-tit .wrap-2", {yPercent:100, duration: 3}, 'start0')
  .to(".split-tit .wrap-2 img", {'top':'-300px', duration: 3}, 'start0')
  .to(".bs-box", {yPercent: -75, duration: 3}, 'start0')
  .to(".bs-box .box-tit", {opacity: 1, y: 0, duration: 7}, 'start0')
  .to(".split-tit", {opacity: 0, duration: 3}, 'start1')
  .to(".bs-box", {yPercent: -88, duration: 1}, 'start1')
  // .to(".bs-pin ")
  // main business 스크롤 이벤트 e

  // main media 애니메이션 s
  let state = '.list .item' // start class target

  const scrollFunction = (e) => {
    gsap.set(".item", {opacity: 0, y: 24});
    e.style = {}

    document.querySelectorAll(e).forEach((e) => {
      e.style.display = 'block'
    })

    ScrollTrigger.batch(e, {
      onEnter: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: 0.05}),
      start: "top bottom",
      end: "bottom 20%",
      // markers: true
    });
  }

  scrollFunction(state) // ScrollTrigger start

  const restart = (name) => {
    name == 'all' ? state = '.list .item' : state = '.list .' + name

    document.querySelectorAll(state).forEach((e) => {
      const name = e.className
      e.style = {} // abc click style 초기화
      e.style.display = 'none'
    })

    setTimeout(() => {
      scrollFunction(state)
      console.log("setTimeout trigger 실행")
    }, 300)
  }

  document.querySelectorAll('.menu-list .btn').forEach((e) => {
    e.addEventListener("click", function(){
      document.querySelectorAll('.item').forEach((e) => {
        e.style.display = 'none'
      })
      setTimeout(() => {restart(e.getAttribute('id'))}, 100)
    })
  })
  // main media 애니메이션 e

  // main media 탭버튼 s
  let clickSt = "0"
  var $btns = $('.btn').click(function(e){
    if (this.id == 'all') {
      $('.list > li').show()
    }else{
      var $el = $('.' + this.id).show();
      $('.list > li').not($el).hide()
    }
    $btns.removeClass('active');
    $(this).addClass('active');
  })
  // main media 탭버튼 e

  // main group esg 스크롤 이벤트 s
  gsap.set(".esg-pin .box1 .img-wrap", {'width':'100%'});
  gsap.set(".esg-pin .box1 .text-wrap", {'width':'0%'});

  let esgPin = gsap.timeline({
    scrollTrigger: {
      trigger: ".esg-pin",
      start: "center center",
      end: "+=4000", // 속도 조절
      scrub: true,
      pin: true,
      smooth: true,
      // markers: true,
    }
  });

  esgPin.addLabel("label1")
  .to(".esg-pin .box1 .img-wrap", {'width':'calc(50% - 20px)', duration: 3}, 'start0')
  .to(".esg-pin .box1 .text-wrap", {'width':'calc(50% - 20px)', duration: 3}, 'start0')
  .to(".esg-pin .box1 .text-wrap .num", {opacity: 0.2, duration: 3}, 'start1')
  .to(".esg-pin .box2", {yPercent: -91.2, duration: 3}, 'start1')
  .to(".esg-pin .box2 .text-wrap .num", {opacity: 0.2, duration: 3}, 'start2')
  .to(".esg-pin .box3", {yPercent: -182.7, duration: 3}, 'start2')
  // main group esg 스크롤 이벤트 e

  // HD현대 in social swiper 
  function mainSocialSwiper() {
    var social_swiper = new Swiper(".main-social .social-swiper", {
      slidesPerView: 'auto',
      pagination: {
        el: ".social-progress-bar .swiper-pagination",
        type: "progressbar",
      },
    })
  }
  // HD현대 in social swiper 

  // main 주가정보 s
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