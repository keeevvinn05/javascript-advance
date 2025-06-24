js
CopiarEditar
const pwd24    = document.querySelector('#pwd24');
const toggle24 = document.querySelector('#toggle24');

toggle24.addEventListener('change', () => {
  pwd24.type = toggle24.checked ? 'text' : 'password';
});

