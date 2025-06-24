js
CopiarEditar
const form25 = document.querySelector('#form25');

form25.addEventListener('submit', e => {
  if (!confirm('¿Seguro que quieres eliminar la cuenta?')) {
    e.preventDefault();
  }
});

