$(document).ready(function() {
    $(window).scroll(function() {
      var scrollTop = $(window).scrollTop();
      var windowHeight = $(window).height();
      var parallaxHeight = $('.parallax').outerHeight();
      var offset = $('.parallax').offset().top;
      var percentScrolled = (scrollTop + windowHeight - offset) / (parallaxHeight + windowHeight);
      var parallaxPosition = Math.round((percentScrolled - 0.5) * 100);
      $('.parallax').css('background-position', '50% ' + parallaxPosition + '%');
    });
  });