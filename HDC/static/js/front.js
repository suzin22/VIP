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

      tg.style.color = "hotpink";

      window.onscroll = (e) => {
        let windowTop = window.scrollY;

        if ( windowTop > 60 ){
          tg.classList.add('on')
        } else {
          tg.classList.remove('on')
        }
      }
		}
	};

	window.headerMenu = headerMenu;
}(window));

headerMenu.initialize();