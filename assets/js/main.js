/* INICIO NAVBAR HAMBURGESA */
window.addEventListener('scroll', function() {
  const navbarHeight = document.querySelector('header').offsetHeight;
  const offcanvasContainer = document.querySelector('.offcanvas-container');
  if (window.pageYOffset > navbarHeight) {
    offcanvasContainer.classList.add('visible');
  } else {
    offcanvasContainer.classList.remove('visible');
  }
});

var links = document.querySelectorAll('.list-group-item a');
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function() {
    console.log('Haz hecho clic en un enlace');
    var offcanvas = document.querySelector('.offcanvas');
    var offcanvasBackdrop = document.querySelector('.offcanvas-backdrop');
    var offcanvasInstance = new bootstrap.Offcanvas(offcanvas);
    offcanvas.classList.remove('show'); // remove the "show" class from the offcanvas element
    offcanvasBackdrop.remove(); // remove the backdrop element
    offcanvasInstance.hide();
  });
}

/*INICIO CMABIAR COLOS HAMBURGESA */
const icono = document.querySelector('.navbar-toggler i');

function esClaro(valorLuminosidad) {
  if (valorLuminosidad > 0.5) {
    icono.style.color = 'black';
    icono.style.border = '3px solid black';
  } else {
    icono.style.color = 'white';
    icono.style.border = '2px solid white';
  }
}

function verificarColorFondo() {
  const cuadrado = document.querySelector('#cuadrado');
  const rect = cuadrado.getBoundingClientRect();
  const secciones = document.querySelectorAll('section');
  for (let i = 0; i < secciones.length; i++) {
    const seccionRect = secciones[i].getBoundingClientRect();
    if (rect.top >= seccionRect.top && rect.bottom <= seccionRect.bottom) {
      const computedStyle = getComputedStyle(secciones[i]);
      const backgroundColor = computedStyle.getPropertyValue('background-color');
      if (backgroundColor !== 'rgba(0, 0, 0, 0)' && backgroundColor !== 'transparent') {
        const valoresRGB = backgroundColor.match(/\d+/g);
        const luminosidad = (0.299 * valoresRGB[0] + 0.587 * valoresRGB[1] + 0.114 * valoresRGB[2]) / 255;
        esClaro(luminosidad);
      }
      break;
    }
  }
}

// Agregar el cuadrado imaginario al documento
const cuadrado = document.createElement('div');
cuadrado.setAttribute('id', 'cuadrado');
cuadrado.style.width = '50px';
cuadrado.style.height = '50px';
cuadrado.style.position = 'fixed';
cuadrado.style.top = '0';
cuadrado.style.right = '0';
cuadrado.style.backgroundColor = 'transparent';
document.body.appendChild(cuadrado);

verificarColorFondo();

window.addEventListener('scroll', verificarColorFondo);
/*FIN CMABIAR COLOS HAMBURGESA */
/* FIN NAVBAR HAMBURGESA */

const modalLinks = document.querySelectorAll('.modal-link');

const proyectos = [
  {
    id: 'proyecto1',
    title: '<b>PROYECTO 1</b>',
    body: '<img src="./assets/images/1.jpg" class="d-block w-100 object-fit-cover" alt="..."> <div class="row pt-4 ps-2"> <div class="col-12 col-xl-6"> <p> Proyecto 1 Proyecto 1 Proyecto 1 Proyecto 1 Proyecto 1 Proyecto 1 Proyecto 1 Proyecto 1 Proyecto 1 Proyecto 1 Proyecto 1 Proyecto 1 Proyecto 1 Proyecto 1 Proyecto 1 Proyecto 1 Proyecto 1 Proyecto 1 Proyecto 1 Proyecto 1 Proyecto 1 Proyecto 1 Proyecto 1 Proyecto 1 Proyecto 1 Proyecto 1 Proyecto 1 Proyecto 1 Proyecto 1 Proyecto 1 Proyecto 1 Proyecto 1 </p> </div> <div class="col-12 col-xl-6"> <img src="./assets/images/2.jpg" class="d-block w-100 object-fit-cover" alt="..."> </div> </div> ',
  },
  {
    id: 'proyecto2',
    title: '<b>PROYECTO 2</b>',
    body:' <img src="./assets/images/1.jpg" class="d-block w-100 object-fit-cover" alt="..."> <div class="row pt-4 ps-2"> <div class="col-12 col-xl-6"> <p> Proyecto 2 Proyecto 2 Proyecto 2 Proyecto 2 Proyecto 2 Proyecto 2 Proyecto 2 Proyecto 2 Proyecto 2 Proyecto 2 Proyecto 2 Proyecto 2 Proyecto 2 Proyecto 2 Proyecto 2 Proyecto 2 Proyecto 2 Proyecto 2 Proyecto 2 Proyecto 2 Proyecto 2 Proyecto 2 Proyecto 2 Proyecto 2 Proyecto 2 Proyecto 2 Proyecto 2 Proyecto 2 Proyecto 2 Proyecto 2 Proyecto 2 Proyecto 2 Proyecto 2 </p> </div> <div class="col-12 col-xl-6"> <img src="./assets/images/2.jpg" class="d-block w-100 object-fit-cover" alt="..."> </div> </div> ',
  },
  {
    id: 'proyecto3',
    title: '<b>PROYECTO 3</b>',
    body:' <img src="./assets/images/1.jpg" class="d-block w-100 object-fit-cover" alt="..."> <div class="row pt-4 ps-2"> <div class="col-12 col-xl-6"> <p> Proyecto 2 Proyecto 2 Proyecto 2 Proyecto 2 Proyecto 2 Proyecto 2 Proyecto 2 Proyecto 2 Proyecto 2 Proyecto 2 Proyecto 2 Proyecto 2 Proyecto 2 Proyecto 2 Proyecto 2 Proyecto 2 Proyecto 2 Proyecto 2 Proyecto 2 Proyecto 2 Proyecto 2 Proyecto 2 Proyecto 2 Proyecto 2 Proyecto 2 Proyecto 2 Proyecto 2 Proyecto 2 Proyecto 2 Proyecto 2 Proyecto 2 Proyecto 2 Proyecto 2 </p> </div> <div class="col-12 col-xl-6"> <img src="./assets/images/2.jpg" class="d-block w-100 object-fit-cover" alt="..."> </div> </div> ',
  }
];

function openModal(proyecto) {
  console.log('openModal');
  const modalTitle = document.querySelector('.modal-title');
  const modalBody = document.querySelector('.modal-body');
  
  modalTitle.innerHTML = proyecto.title;
  modalBody.innerHTML = proyecto.body;
  
  const modalElement = document.getElementById('exampleModal');
  const modal = new bootstrap.Modal(modalElement);
  
  const closeButton = modalElement.querySelector('.btn-close');
  closeButton.addEventListener('click', () => {
    modal.hide();

    const backdropElements = document.querySelectorAll('.modal-backdrop');
    backdropElements.forEach((element) => {
      element.remove();
    });

    document.body.style.overflow = 'initial'; // Elimina el estilo del body
  });

  modalElement.addEventListener('hidden.bs.modal', () => {
    modal.dispose();
    modalElement.classList.remove('modal-backdrop');
    document.body.style.overflow = 'initial'; // Elimina el estilo del body
  });
  
  modal.show();
  document.body.style.overflow = 'hidden';
}

modalLinks.forEach((modalLink) => {
  modalLink.addEventListener('click', () => {
    proyectoId = modalLink.dataset.customVariable; // Obtiene el id del proyecto del atributo data-custom-variable del elemento modalLink
    proyecto = proyectos.find((p) => p.id === proyectoId); // Busca el objeto proyecto correspondiente en el arreglo de proyectos
    openModal(proyecto);
  });
});