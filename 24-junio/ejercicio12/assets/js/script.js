js
CopiarEditar
const form21 = document.querySelector('#form21');
const name21 = document.querySelector('#name21');
const msg21  = document.querySelector('#msg21');

form21.addEventListener('submit', e => {
  e.preventDefault();
  if (name21.value.trim() === '') {
    msg21.textContent = 'El nombre es obligatorio';
  } else {
    msg21.textContent = `Hola, ${name21.value.trim()}!`;
  }
});

