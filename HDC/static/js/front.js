if (window.console == undefined) { console = { log: () => { } } }

/* header */
(function (window, undefined) {
	"use strict";
	/**
	 * @description header menu
	 * @modify
			@20231121 추가
	*/
	var headerMenu = {
		/** 플러그인명 */
		bind: headerMenu,
		/** 기본 옵션값 선언부 */
		defaults: {
		},
		initialize: function () {
			const me = this;

      me._scroll();
		},
		_scroll: () => {

      const tg = document.querySelector('[data-event="header"]');

      // window.onscroll = (e) => {
      //   let windowTop = window.scrollY;

      //   if ( windowTop > 120 ){
      //     tg.classList.add('on')
      //   } else {
      //     tg.classList.remove('on')
      //   }
      // }

			ScrollTrigger.create({
				start: "top top",
				end: 99999,
				onUpdate: (self) => {
					window.onscroll = (e) => {
						let windowTop = window.scrollY;
						
						if ( windowTop > 120 ) {
							self.direction === -1 ? tg.classList.add('up') : (tg.classList.add('on'), tg.classList.remove('up'));
						} else {
							tg.classList.remove('on');
							tg.classList.remove('up');
						}
					}
				}
			});
		}
	};

	window.headerMenu = headerMenu;
}(window));

headerMenu.initialize();

// 우측 하단 top btn
if( document.querySelector('.right-bottom-fixed') ){
  document.querySelector('.right-bottom-fixed').addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  })

  window.addEventListener('scroll', () => {
    if( window.scrollY >= 500 ){
      document.querySelector('.right-bottom-fixed').style.opacity = '1'
    }else{
      document.querySelector('.right-bottom-fixed').style.opacity = '0'
    }
  })
}