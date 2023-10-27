$(document).ready(function(){

  document.addEventListener('scroll', () => {
    //console.log(`스크롤 위치 ${window.scrollY}`)
  })

  // scroll fade animation s
  let $window = $(window)
  $window.on('scroll', function(event) {
    let $windowScrollTop = $window.scrollTop()

    document.querySelectorAll('.fadeAni').forEach((e, index) => {
      // console.log(e.className)
      // console.log(`${e.offsetTop} + ${index}`)

      if($('#main').length) {
        if($windowScrollTop + 1000 >= e.offsetTop){
          e.classList.add('on')
        }else{
          e.classList.remove('on')
        }
      }else{
        if($windowScrollTop >= e.offsetTop){
          e.classList.add('on')
        }else{
          e.classList.remove('on')
        }
      }
    })
  });
  // scroll fade animation e

  // main business 스크롤 이벤트 s
  gsap.set(".bs-box .box-tit", {'opacity':'0', y:100}) // 타이틀
  gsap.set(".set-1 .bs-card-wrap", {yPercent:0}) // 조선해양
  gsap.set(".set-2 .bs-card-wrap", {yPercent:0}) // 에너지
  gsap.set(".set-3 .bs-card-wrap", {yPercent:0}) // 기계 로봇
  gsap.set(".set-1 .en-text", {opacity:0, y: 50})
  gsap.set(".set-1 .ko-text", {opacity:0, y: 100})
  gsap.set(".set-2 .en-text", {opacity:0, y: 50})
  gsap.set(".set-2 .ko-text", {opacity:0, y: 100})
  gsap.set(".set-3 .en-text", {opacity:0, y: 50})
  gsap.set(".set-3 .ko-text", {opacity:0, y: 100})

  //gsap.set(".bg-fff", {'opacity':'1'}) // bg fff

  // 상단 ~ 조선해양
  let splitPin = gsap.timeline({
    scrollTrigger: {
      trigger: ".gsap-box-1",
      start: "top top",
      end: "3000", // 속도 조절
      scrub: 2, // 숫자가 커질수록 부드러워짐
      pin: true, // pin: '.selector'시 특정 엘리먼트가 고정
      smooth: 1,
      // markers: true,
      onUpdate:(self) => {
        let result = '';
        let target = $('.set-1 .bs-card-wrap').css('transform');
        let sResult = target.split(',');
        let length = sResult.length;
        //result += parseInt(sResult[length-2]) + " " + parseInt(sResult[length-1]) + " " + parseInt(sResult[length-3]);
        result += -(parseInt(sResult[length-2]));
        
        if(result == 0){
          $('.gsap-box-1 .card').removeClass('is-active')
          $('.gsap-box-1 .card-1').addClass('is-active')
        }
        
        if( result >= 790 ){
          $('.gsap-box-1 .card').removeClass('is-active')
          $('.gsap-box-1 .card-2').addClass('is-active')
        }
        
        if( result >= 1550 ){
          $('.gsap-box-1 .card').removeClass('is-active')
          $('.gsap-box-1 .card-3').addClass('is-active')
        }
      }
    }
  });

  splitPin.addLabel("label1")
  .to(".split-tit .wrap-1", {yPercent:-100, duration: 3}, 'start0')
  .to(".split-tit .wrap-1 img", {'bottom':'-300px', duration: 3}, 'start0')
  .to(".split-tit .wrap-2", {yPercent:100, duration: 3}, 'start0')
  .to(".split-tit .wrap-2 img", {'top':'-300px', duration: 3}, 'start0')
  .to(".bs-box", {yPercent: -75, duration: 3}, 'start0')
  .to(".bs-box .box-tit", {opacity: 1, y: 0, duration: 7}, 'start0')
  //.to(".bg-fff", {opacity: 0, duration: 1}, 'start1')
  .to(".split-tit", {opacity: 0, duration: 3}, 'start1')
  .to(".set-1", {yPercent: -88, duration: 1}, 'start1')
  .to(".set-1 .en-text", {y: 0, opacity: 1, duration: 3}, 'start1.5')
  .to(".set-1 .ko-text", {y: 0, opacity: 1, duration: 3}, 'start1.5')


  .to(".set-1 .bs-card-wrap", {xPercent: -295, duration: 3}, 'start2')

  // 에너지
  let splitPin2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".gsap-box-2",
      start: "-1040 top",
      end: "2000", // 속도 조절
      scrub: 2, // 숫자가 커질수록 부드러워짐
      pin: true, // pin: '.selector'시 특정 엘리먼트가 고정
      smooth: 1,
      //markers: true,
      onUpdate:(self) => {
        let result = '';
        let target = $('.set-2 .bs-card-wrap').css('transform');
        let sResult = target.split(',');
        let length = sResult.length;
        //result += parseInt(sResult[length-2]) + " " + parseInt(sResult[length-1]) + " " + parseInt(sResult[length-3]);
        result += -(parseInt(sResult[length-2]));
        
        if(result == 0){
          $('.set-2 .card').removeClass('is-active')
          $('.set-2 .card-1').addClass('is-active')
        }
        
        if( result >= 790 ){
          $('.set-2 .card').removeClass('is-active')
          $('.set-2 .card-2').addClass('is-active')
        }
        
        if( result >= 1550 ){
          $('.set-2 .card').removeClass('is-active')
          $('.set-2 .card-3').addClass('is-active')
        }

        if( result >= 2516 ){
          $('.set-2 .card').removeClass('is-active')
          $('.set-2 .card-4').addClass('is-active')
        }

        if( result >= 3300 ){
          $('.set-2 .card').removeClass('is-active')
          $('.set-2 .card-5').addClass('is-active')
        }
      }
    }
  });

  splitPin2.addLabel("label2")

  .to(".set-2 .en-text", {y: 0, opacity: 1, duration: 1}, 'start1')
  .to(".set-2 .ko-text", {y: 0, opacity: 1, duration: 1}, 'start1')
  .to(".set-2 .bs-card-wrap", {xPercent: -610, duration: 3}, 'start2')

  // 기계 로봇
  let splitPin3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".gsap-box-3",
      start: "-1040 top",
      end: "+=2000", // 속도 조절
      scrub: 2, // 숫자가 커질수록 부드러워짐
      pin: true, // pin: '.selector'시 특정 엘리먼트가 고정
      smooth: 1,
      //markers: true,
      onUpdate:(self) => {
        let result = '';
        let target = $('.set-3 .bs-card-wrap').css('transform');
        let sResult = target.split(',');
        let length = sResult.length;
        //result += parseInt(sResult[length-2]) + " " + parseInt(sResult[length-1]) + " " + parseInt(sResult[length-3]);
        result += -(parseInt(sResult[length-2]));

        console.log(result)
        
        if(result == 0){
          $('.gsap-box-3 .card').removeClass('is-active')
          $('.gsap-box-3 .card-1').addClass('is-active')
        }
        
        if( result >= 790 ){
          $('.gsap-box-3 .card').removeClass('is-active')
          $('.gsap-box-3 .card-2').addClass('is-active')
        }
        
        if( result >= 1550 ){
          $('.gsap-box-3 .card').removeClass('is-active')
          $('.gsap-box-3 .card-3').addClass('is-active')
        }
      }
    }
  });

  splitPin3.addLabel("label3")
  .to(".set-3 .en-text", {y: 0, opacity: 1, duration: 1}, 'start1')
  .to(".set-3 .ko-text", {y: 0, opacity: 1, duration: 1}, 'start1')
  .to(".set-3 .bs-card-wrap", {xPercent: -305, duration: 3}, 'start2')



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
      scrub: 2,
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

  $('.all-menu').click(function() {
    $(this).toggleClass('on');
    $('.all-menu-inner').slideToggle(300);
    return false;
  });

  $('.gnb-wrap li a').each(function(i){
    $(this).click(function(e){
      e.preventDefault();
      
    })
  })

  topBtnClick();
  mainSocialSwiper();
})