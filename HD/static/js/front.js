$(document).ready(function(){

  let _width = window.innerWidth;
  let _height = window.innerHeight;
  let isMaximized = false;
  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  window.addEventListener("resize", reportWindowSize);

  function reportWindowSize() {
      _width = window.innerWidth;
      _height = window.innerHeight;
  }

  window.addEventListener("resize", () => {
      if(!isMobile){
          let vh = window.innerHeight * 0.01;
          document.documentElement.style.setProperty("--vh", `${vh}px`);
          if (_width === screen.width && _height === screen.height) {
              isMaximized = true;
          } else {
              isMaximized = false;
              location.reload();
          }
      }
  });

  $(window).on( "orientationchange", function( event ) { // �쒕툝由� 諛⑺뼢 媛먯�
      location.reload();
  });


  // main_section_03
  $(window).on('resize',function(){
      var pc= matchMedia("screen and (min-width:1281px)"); 

      if(pc.matches){
          var width = $(window).width();
          var height = $(window).height();
          $(window).on('resize', function() {
              if ($(this).width() !== width || $(this).height() !== height) {
              width = $(this).width();
              height = $(this).height();
              setTimeout(() => {
                  location.reload();
              }, 400);
              }
          });
          
          gsap.registerPlugin(ScrollTrigger);

          // main visual
          let mainVisual = gsap.timeline({
              scrollTrigger: { 
                  trigger: '.visual',
                  start: "top top",
                  scrub: true,
                  markers: false,
                  pin: true,
              },
          });
          
          mainVisual.addLabel("label1")
          .to('.main .visual .txt',{xPercent: 0, yPercent: 0,duration: 6},'start0')
          .to('.main .visual .txt1',{'left':'130rem','top':'160rem',duration: 6},'start0')
          .to('.main .visual .txt2',{'left': 'calc(100% - 360rem)', 'top': 'calc(100% - 200rem)',duration: 6},'start0')
          .to('.main .visual .mainLine',{'width':'960rem', duration: 6},'start0')
          .to('.main .visual .txt span',{'opacity':'1',duration: 6},'start0')
          .to('.main .visual',{duration: 6},'start1')
          .to('.main .visual .mainLine',{'width':'560rem', xPercent: -50, yPercent: -50, y:0, rotation: -90, duration: 3},'start2')
          .to('.main .visual .contentWrap',{xPercent: -50, yPercent: -50, y:0, rotation: 0, 'height': '560rem', 'opacity' : '1', duration: 3},'start2')
          .to('.main .visual .txt',{'opacity' : '0', duration: 7},'start3')
          .to('.main .visual .mainLine',{'opacity':'0', duration: 7},'start3')
          .to('.main .visual .contentWrap',{'width':'100%', 'height':'100%', duration: 7},'start4')
          .to('.main .visual .textWrap',{'opacity':'1', duration: 3},'start5')
          .to('.main .visual',{duration: 3},'start6')

          let _window = $(window).innerWidth();
          let _section03Slide = $('.main_section_03 .slide > .flex').outerWidth();
          var _scrollbarWidth = $('.main_section_03 .scrollbar').width();
          var _scrollbarLeft = $('.main_section_03 .scrollbar').position().left;
          var _scrollbar = _window - (_scrollbarWidth + _scrollbarLeft);
          var startTiming  = 3;
          var duration = 20;

          let main_section_03 = gsap.timeline({
              scrollTrigger: { 
                  trigger: '.main_section_03',
                  start: "top top",
                  scrub: true,
                  markers: false,
                  pin: '.pinWrap',
              },
          });
          
          main_section_03.addLabel("label1")
          .to('.main_section_03',{duration: startTiming},'start0')
          .to('.main_section_03 .slide > .flex',{'x': '-' + (_section03Slide - _window), duration: duration}, 'start1')
          .to('.main .main_section_03 .scrollbar',{'left': _scrollbar + 'px', duration: duration}, 'start1')
          .to('.main_section_03',{duration: startTiming},'start2')

          ScrollTrigger.config({ 
              limitCallbacks: true,
              ignoreMobileResize: true
          });

      }else{

          //main_section_03
          var main_section_03 = new Swiper(".main_section_03 .m-slide", {
              slidesPerView: 1.1,
              slidesPerGroup:1,
              spaceBetween: 25,
              simulateTouch: true,
              loop: false,
              speed: 600,
              scrollbar: {
                  el: '.main_section_03 .scrollbar',
                  draggable: true,
              },
              on:{
                  slideChange : function(){
                      main_section_03.update();
                      main_section_03.scrollbar.setTranslate();
                  },
              },
          });
      }
  }).trigger('resize');

});
