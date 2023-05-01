/* modal */
function openModal(title, body, customVariable) {
    console.log('openModal');
    const modalTitle = document.querySelector('.modal-title');
    const modalBody = document.querySelector('.modal-body');
  
    modalTitle.innerHTML = title;
    modalBody.innerHTML = body + "<p>Variable personalizada: " + customVariable + "</p>";
  
    const modalElement = document.getElementById('exampleModal');
    const modal = new bootstrap.Modal(modalElement);
  
    const closeButton = modalElement.querySelector('.btn-close');
    closeButton.addEventListener('click', () => {
      modal.hide();
  
      const backdropElements = document.querySelectorAll('.modal-backdrop');
      backdropElements.forEach((element) => {
        element.remove();
      });
    });
  
    modalElement.addEventListener('hidden.bs.modal', () => {
      modal.dispose();
      modalElement.classList.remove('modal-backdrop');
    });
  
    modal.show();
  }
  
  const launchDemoModal = document.querySelector('.modal-link');
  launchDemoModal.addEventListener('click', (event) => {
    event.preventDefault();
    const modalTitle = 'Modal title desde js';
    const modalBody = `
      <img src="./images/1.jpg" class="d-block w-100 tamanio-carousel" alt="...">
      <p>Modal body text goes here.</p>
    `;
    const customVariable = launchDemoModal.getAttribute('data-custom-variable');
  
    openModal(modalTitle, modalBody, customVariable);
  });
  
  
