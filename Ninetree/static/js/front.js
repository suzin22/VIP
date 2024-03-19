setTimeout(() => {
  // 마우스커서
  gsap.set(".window-cursor", { xPercent: -50, yPercent: -50 });

  const Tc = document.querySelector(".window-cursor"),
    Pc = document.querySelectorAll("a, button");

  let xTo = gsap.quickTo(".window-cursor", "x", { duration: 0.6, ease: "power3" }),
    yTo = gsap.quickTo(".window-cursor", "y", { duration: 0.6, ease: "power3" });

  window.addEventListener("mousemove", e => {
    xTo(e.clientX);
    yTo(e.clientY);
  });

  document.addEventListener("mouseenter", (function () {
    Tc.style.opacity = 1
  }
  ));
  document.addEventListener("mouseleave", (function () {
    Tc.style.opacity = 0
  }
  ));

  // main swiper-button hover
  let swiperPrev = document.querySelector('.box-main-kv .swiper-button-prev'),
    swiperNext = document.querySelector('.box-main-kv .swiper-button-next');

  if (document.querySelectorAll('.box-main-kv').length) {
    swiperPrev.addEventListener('mouseover', () => {
      Tc.classList.add('main-swiperButton-prev');
    })
    swiperPrev.addEventListener('mouseleave', () => {
      Tc.classList.remove('main-swiperButton-prev');
    })
    swiperNext.addEventListener('mouseover', () => {
      Tc.classList.add('main-swiperButton-next');
    })
    swiperNext.addEventListener('mouseleave', () => {
      Tc.classList.remove('main-swiperButton-next');
    })
  }
  // //마우스커서
}, 500);