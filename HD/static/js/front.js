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

  if( document.querySelectorAll('.bs-box').length > 0 ){

    // main business 스크롤 이벤트 s
    gsap.set(".bs-box .box-tit", {'opacity':'0', y:100}) // 타이틀
    //gsap.set(".set-1 .bs-card-wrap", {yPercent:0}) // 조선해양
    gsap.set(".set-2 .bs-card-wrap", {yPercent:0}) // 에너지
    gsap.set(".set-3 .bs-card-wrap", {yPercent:0}) // 기계 로봇
    gsap.set(".set-1 .en-text", {opacity:0, y: 50})
    gsap.set(".set-1 .ko-text", {opacity:0, y: 100})
    gsap.set(".set-2 .en-text", {opacity:0, y: 50})
    gsap.set(".set-2 .ko-text", {opacity:0, y: 100})
    gsap.set(".set-3 .en-text", {opacity:0, y: 50})
    gsap.set(".set-3 .ko-text", {opacity:0, y: 100})

    // 상단 ~ 조선해양
    let splitPin = gsap.timeline({
      scrollTrigger: {
        trigger: ".gsap-box-1",
        start: "top top",
        end: "+=6000", // 속도 조절
        scrub: 2, // 숫자가 커질수록 부드러워짐
        pin: true, // pin: '.selector'시 특정 엘리먼트가 고정
        smooth: 1,
        anticipatePin: 1,
        markers: false,
        onUpdate:(self) => {
          let result = '';
          let target = $('.set-1 .bs-card-wrap').css('transform');
          let sResult = target.split(',');
          let length = sResult.length;
          //result += parseInt(sResult[length-2]) + " " + parseInt(sResult[length-1]) + " " + parseInt(sResult[length-3]);
          result += -(parseInt(sResult[length-2]));

          if( result < 200 ){
            $('.gsap-box-1 .card').removeClass('is-active')
            $('.gsap-box-1 .card-1').addClass('is-active')
          }else if( result < 900 ){
            $('.gsap-box-1 .card').removeClass('is-active')
            $('.gsap-box-1 .card-2').addClass('is-active')
          }else if( result < 1600 ){
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

    .to(".set-1 .bs-card-wrap", {'transform': 'translate(0px, 0)', duration: 3}, 'start1')
    .to(".set-1 .bs-card-wrap", {'transform': 'translate(-790px, 0)', duration: 3}, 'start2')
    .to(".set-1 .bs-card-wrap", {'transform': 'translate(-1700px, 0)', duration: 3}, 'start7')

    // 에너지
    let splitPin2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".gsap-box-2",
        start: "-1040 top",
        end: "+=6000", // 속도 조절
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

          //console.log(result)

          if( result < 200 || result < 599 ){
            $('.gsap-box-2 .card').removeClass('is-active')
            $('.gsap-box-2 .card-1').addClass('is-active')
          }else if( result > 600 && result < 1299 ){
            $('.gsap-box-2 .card').removeClass('is-active')
            $('.gsap-box-2 .card-2').addClass('is-active')
          }else if( result > 1400 && result < 1800 ){
            $('.gsap-box-2 .card').removeClass('is-active')
            $('.gsap-box-2 .card-3').addClass('is-active')
          }else if( result > 1700 && result < 2690 ){
            $('.gsap-box-2 .card').removeClass('is-active')
            $('.gsap-box-2 .card-4').addClass('is-active')
          }else if( result > 2700 && result < 3300 ){
            $('.gsap-box-2 .card').removeClass('is-active')
            $('.gsap-box-2 .card-5').addClass('is-active')
          }
        }
      }
    });

    splitPin2.addLabel("label2")

    .to(".set-2 .en-text", {y: 0, opacity: 1, duration: 1}, 'start1')
    .to(".set-2 .ko-text", {y: 0, opacity: 1, duration: 1}, 'start1')
    //.to(".set-2 .bs-card-wrap", {xPercent: -610, duration: 3}, 'start2')

    .to(".set-2 .bs-card-wrap", {'transform': 'translate(0px, 0)', duration: 3}, 'start1')
    .to(".set-2 .bs-card-wrap", {'transform': 'translate(-861px, 0)', duration: 3}, 'start2')
    .to(".set-2 .bs-card-wrap", {'transform': 'translate(-1721px, 0)', duration: 3}, 'start3')
    .to(".set-2 .bs-card-wrap", {'transform': 'translate(-2581px, 0)', duration: 3}, 'start4')
    .to(".set-2 .bs-card-wrap", {'transform': 'translate(-3441px, 0)', duration: 3}, 'start5')

    // 기계 로봇
    let splitPin3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".gsap-box-3",
        start: "-1040 top",
        end: "+=2000", // 속도 조절
        scrub: 2, // 숫자가 커질수록 부드러워짐
        pin: true, // pin: '.selector'시 특정 엘리먼트가 고정
        smooth: 1,
        pinSpacing: false,
        markers: false,
        id: 'gsap-box-3',
        onUpdate:(self) => {
          let result = '';
          let target = $('.set-3 .bs-card-wrap').css('transform');
          let sResult = target.split(',');
          let length = sResult.length;
          //result += parseInt(sResult[length-2]) + " " + parseInt(sResult[length-1]) + " " + parseInt(sResult[length-3]);
          result += -(parseInt(sResult[length-2]));
          
          if( result < 200 || result < 460 ){
            $('.gsap-box-3 .card').removeClass('is-active')
            $('.gsap-box-3 .card-1').addClass('is-active')
          }else if( result > 500 && result < 700 ){
            $('.gsap-box-3 .card').removeClass('is-active')
            $('.gsap-box-3 .card-2').addClass('is-active')
          }else if( result > 1000 && result < 1800 ){
            $('.gsap-box-3 .card').removeClass('is-active')
            $('.gsap-box-3 .card-3').addClass('is-active')
          }
        }
      }
    });

    $('html, body').animate({scrollTop:20600}, 300);

    splitPin3.addLabel("label3")
    .to(".set-3 .en-text", {y: 0, opacity: 1, duration: 1}, 'start1')
    .to(".set-3 .ko-text", {y: 0, opacity: 1, duration: 1}, 'start1')
    //.to(".set-3 .bs-card-wrap", {xPercent: -305, duration: 3}, 'start2')

    .to(".set-3 .bs-card-wrap", {'transform': 'translate(0px, 0)', duration: 3}, 'start1')
    .to(".set-3 .bs-card-wrap", {'transform': 'translate(-861px, 0)', duration: 3}, 'start2')
    .to(".set-3 .bs-card-wrap", {'transform': 'translate(-1721px, 0)', duration: 3}, 'start3')
  }

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
    if( document.querySelectorAll('.main-social').length > 0 ){// 메인
      const mainSocialOffsetTop = document.querySelector('.main-social').offsetTop
      if( window.scrollY + 500 <= mainSocialOffsetTop){
        document.querySelector('.counter').innerHTML = counterHtml
      }
    }

    if( document.querySelectorAll('.sub-inner').length > 0 ){ // 서브
      if( window.scrollY <= 300){
        document.querySelector('.counter').innerHTML = counterHtml
      }
    }

    // 서브 탑 배너 이미지 영역 scroll event
    if( document.querySelectorAll('.banner-visual').length > 0 ){
      const item = document.querySelector('.banner-visual img'),
            cnt = (window.scrollY / 1500) * 100
      
      window.addEventListener('scroll', () => {
        if( window.scrollY <= 700 ){
          item.style.transform = 'translate3d(0px, -' + (cnt * 0.50) + '%, 0px)'
        }else{
          item.style.transform = 'translate3d(0px, -20%, 0px)'
        }
      })
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

  $('.all-menu').click(function(e) {
    $(this).toggleClass('on');
    $('.all-menu-inner').slideToggle(300);
    $('.gnb-wrap').toggleClass('hidden');

    // close img 리셋
    setTimeout(() => {
      !$(this).is('.on') ? document.querySelector('.header .header-inner .all-menu-inner .wrap .img .list-0').style.display = 'block' : document.querySelector('.gnb-list').style.display = 'none'
    }, 300)
    return false;
  });

  $('.gnb-wrap li a').each(function(i){
    $(this).click(function(e){
      e.preventDefault();
      
    })
  })

  // 햄버거 메뉴 뎁스 hover 시 img change
  document.querySelectorAll('.all-menu-inner .wrap .list > li').forEach((e, index) => {
    e.addEventListener("mouseover", function(){
      document.querySelectorAll('.header .header-inner .all-menu-inner .wrap .img img').forEach((e) => {
        e.style.display = 'none'
      })
      document.querySelector('.header .header-inner .all-menu-inner .wrap .img .list-' + index).style.display = 'block'
    })
  })

  // header 1뎁스 mouseover 시 메뉴 show
  document.querySelectorAll('.gnb-wrap li a').forEach((e, index) => {
    e.addEventListener('mouseover', (e) => {
      document.querySelector('.gnb-list').style.display = 'block'
      document.querySelectorAll('.gnb-list > li').forEach((e, index2) => {
        if(index == index2){
          e.style.display = 'block'
        }else{
          e.style.display = 'none'
        }
      })
    })
  });

  // header mouseleave 시 메뉴 hide
  document.querySelector('.header-inner').addEventListener('mouseleave', (e) => {
    document.querySelector('.gnb-list').style.display = 'none'
  })

  topBtnClick();
  mainSocialSwiper();

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

  // Dark, White mode : 텍스트 애니메이션
  gsap.to('.modeBtn', {
    scrollTrigger: {
      trigger: '.main-business',
      start: "top 20%",
      end: "bottom 10%",
      scrub: true,
      markers: false,
      id: "box7",
      onEnter: () => {
        document.querySelector('.modeBtn').classList.add('active')
      },
      onLeaveBack: () => {
        document.querySelector('.modeBtn').classList.remove('active')
      }
    }
  });
})