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
    console.log('se hizo click y se entro en modallink');
    console.log(modalLink.dataset.customVariable);
    proyectoId = modalLink.dataset.customVariable; // Obtiene el id del proyecto del atributo data-custom-variable del elemento modalLink
    proyecto = proyectos.find((p) => p.id === proyectoId); // Busca el objeto proyecto correspondiente en el arreglo de proyectos
    console.log(proyecto);
    openModal(proyecto);
  });
});


