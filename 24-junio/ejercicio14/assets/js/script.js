js
CopiarEditar
const last23  = document.querySelector('#last23');
const count23 = document.querySelector('#count23');

last23.addEventListener('input', () => {
  const max = Number(last23.getAttribute('maxlength'));
  const used = last23.value.length;
  count23.textContent = `Caracteres restantes: ${max - used}`;
});

