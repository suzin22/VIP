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

  // cursor mouse event
  let section1 = document.querySelector('.section-1'),
    section2 = document.querySelector('.section-2'),
    section3 = document.querySelector('.section-3'),
    section4 = document.querySelector('.section-4'),
    section5 = document.querySelector('.section-5');

  section1.addEventListener('mouseover', () => {
    Tc.classList.remove('type-1');
    Tc.classList.remove('type-2');
  })

  section2.addEventListener('mouseover', () => {
    Tc.classList.add('type-1');
    Tc.classList.remove('type-2');
  })

  section3.addEventListener('mouseover', () => {
    Tc.classList.add('type-1');
    Tc.classList.remove('type-2');
  })

  section4.addEventListener('mouseover', () => {
    Tc.classList.remove('type-1');
    Tc.classList.add('type-2');
  })

  section5.addEventListener('mouseover', () => {
    Tc.classList.remove('type-1');
    Tc.classList.remove('type-2');
  })
  // //마우스커서
}, 200)