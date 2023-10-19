$(document).ready(function () {
  $(window).on("orientationchange", function (event) {
    // �쒕툝由� 諛⑺뼢 媛먯�
    location.reload();
  });

  // main_section_03
  $(window)
    .on("resize", function () {
      gsap.registerPlugin(ScrollTrigger);

      // main visual
      let mainVisual = gsap.timeline({
        scrollTrigger: {
          trigger: ".visual",
          start: "top top",
          scrub: true,
          markers: false,
          pin: true,
        },
      });

      mainVisual
        .addLabel("label1")
        .to(".main .visual", { duration: 3 }, "start6")
        .to(".main .visual", { duration: 6 }, "start1")

        .to(".main .visual .txt",{ xPercent: 0, yPercent: 0, duration: 6 }, "start0")
        .to(".main .visual .txt", { opacity: "0", duration: 7 }, "start3")
        .to(".main .visual .txt span", { opacity: "1", duration: 6 }, "start0")

        .to(".main .visual .txt1",{ left: "130rem", top: "160rem", duration: 6 },"start0")
        .to(".main .visual .txt2",{ left: "calc(100% - 360rem)", top: "calc(100% - 200rem)", duration: 6}, "start0")

        .to(".main .visual .mainLine",{ width: "960rem", duration: 6 }, "start0")
        .to(".main .visual .mainLine",{ width: "560rem", xPercent: -50, yPercent: -50, y: 0, rotation: -90, duration: 6,}, "start2")
        .to(".main .visual .mainLine",{ opacity: "0", duration: 7 }, "start3")

        .to(".main .visual .contentWrap",{ width: "100%", height: "100%", duration: 7 }, "start4")
        .to(".main .visual .contentWrap",{ xPercent: -50, yPercent: -50, y: 0, rotation: 0, height: "560rem", opacity: "1", duration: 3}, "start2")

        .to(".main .visual .textWrap", { opacity: "1", duration: 3 }, "start5")
    })
    .trigger("resize");
});
