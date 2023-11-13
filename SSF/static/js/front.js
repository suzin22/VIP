if (window.console == undefined) { console = { log: () => { } } }

/* review-swiper */
(function (window, undefined) {
	"use strict";
	var reviewAtype = {
		bind: reviewAtype,
		initialize: function () {
			const me = this;

			me._init();
		},
		_init: () => {
			var reviewAtype = new Swiper(".review-swiper", {
        slidesPerView: 1.05,
				slidesPerGroup: 1,
				spaceBetween: 20,
				simulateTouch: true,
				loop: false,
				speed: 800,
			});

			document.querySelector('[data-event="slickToGo"]').addEventListener('click', (e) => {
				document.querySelector('[data-event="slickToGo"]').classList.toggle('a');
				console.log(document.querySelector('[data-event="slickToGo"]').classList.contains('a'));
				if(document.querySelector('[data-event="slickToGo"]').classList.contains('a')){
					reviewAtype.slideTo((1), (1000), false)
				}else{
					reviewAtype.slideTo((0), (1000), false)
				}
			})
		}
	};

	window.reviewAtype = reviewAtype;
}(window));

(function (window, undefined) {
	"use strict";
	var reviewBtype = {
		bind: reviewBtype,
		initialize: function () {
			const me = this;

			me._init();
		},
		_init: () => {
			var reviewBtype = new Swiper(".review-swiper", {
				slidesPerView: 1,
				slidesPerGroup: 1,
				spaceBetween: 24,
				simulateTouch: true,
				loop: false,
				speed: 800,
			});
		}
	};

	window.reviewBtype = reviewBtype;
}(window));