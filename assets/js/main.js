$('[href^="#"]').on('click', function(event) {
  var target = $(this.getAttribute('href'));

  $('html, body').animate({
    scrollTop: target.offset().top
  }, 1000);
});

$('.ui.right.sidebar').sidebar({transition: 'overlay'});

$('.ui.right.sidebar')
  .sidebar('attach events', '.toc.item');

// $('.toc.item')
//   .removeClass('disabled');

$('.ui.right.sidebar .item').on('click', function(event) {
  $('.ui.right.sidebar').sidebar('toggle')
});