$(document).ready(function() {
  $(window).scroll(function() {
    const test = $(this).scrollTop() > 900;
    $('#nav').toggleClass('down', test);
    $('.nav-item').toggleClass('down-item', test);
  });

  $('.nav-item:not(.brand)').click(function() {
    if (!$(this).hasClass('brand')) {
      $(this).addClass('active');
    }
    $(this).siblings().removeClass('active');
  });

  $('.brand').click(() => {
    $('.nav-item').removeClass('active');
  });

  $('.nav-item').click(function() {
    const { link } = $(this).data();
    const offset = $(`.${link}`).offset();
    $('body, html').animate({
      scrollTop: offset.top,
    }, 'slow');
  });
});