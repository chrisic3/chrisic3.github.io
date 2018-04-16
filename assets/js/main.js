$('[href^="#"').on('click', function(event) {
  var target = $(this.getAttribute('href'));

  $('html, body').animate({
    scrollTop: target.offset().top
  }, 1000);
});