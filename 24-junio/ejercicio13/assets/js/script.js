js
CopiarEditar
const form22  = document.querySelector('#form22');
const email22 = document.querySelector('#email22');
const msg22   = document.querySelector('#msg22');

form22.addEventListener('submit', e => {
  e.preventDefault();
  if (email22.checkValidity()) {
    msg22.textContent = 'Email correcto';
  }
  // Si no es válido, el navegador ya mostrará el mensaje
});

