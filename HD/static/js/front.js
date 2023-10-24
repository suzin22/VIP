

$(document).ready(function(){

  function topBtnClick() {
    var topBtn = $('.top-btn');

    topBtn.on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop:0}, 300);
    })
  }

  topBtnClick();
})