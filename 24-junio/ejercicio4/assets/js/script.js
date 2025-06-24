
const subForm = document.querySelector('#subForm');
const sEmail = document.querySelector('#sEmail');
const agree = document.querySelector('#agree');
const errS = document.querySelector('#errSEmail');
const errA = document.querySelector('#errAgree');
const subResult = document.querySelector('#subResult');

subForm.addEventListener('submit', e => {
  e.preventDefault();
  errS.textContent = '';
  errA.textContent = '';
  subResult.textContent = '';

  let valid = true;
  if (!sEmail.checkValidity()) {
    errS.textContent = 'Email no válido.';
    valid = false;
  }
  if (!agree.checked) {
    errA.textContent = 'Debes aceptar los términos.';
    valid = false;
  }
  if (valid) {
    subResult.textContent = '¡Gracias por suscribirte!';
  }
});

