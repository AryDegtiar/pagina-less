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
/*
// Seleccionar el carousel
var carousel = document.querySelector('#carouselExampleCaptions');

// Crear el evento de cambio de slide
var slideEvent = new Event('slide.bs.carousel');

// Función para cambiar de slide
function cambiarSlide() {
    // Obtener el índice del slide activo
    var indice = carousel.querySelector('.carousel-item.active').dataset.bsTarget;
    
    // Obtener el índice del siguiente slide
    var siguienteIndice = parseInt(indice) + 1;
    if (siguienteIndice >= carousel.querySelectorAll('.carousel-item').length) {
        siguienteIndice = 0;
    }
    
    // Disparar el evento de cambio de slide
    carousel.querySelector('[data-bs-slide-to="' + siguienteIndice + '"]').dispatchEvent(slideEvent);
}

// Iniciar el cambio de slides automático
var intervalo = setInterval(cambiarSlide, 100);


// Detener el cambio de slides automático al hacer hover sobre el carousel
carousel.addEventListener('mouseover', function() {
    clearInterval(intervalo);
});

// Reanudar el cambio de slides automático al quitar el hover sobre el carousel
carousel.addEventListener('mouseout', function() {
    intervalo = setInterval(cambiarSlide, 100);
});
*/
