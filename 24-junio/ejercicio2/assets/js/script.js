// seleccionamos los elementos del formulario y sus campos por su id
const form = document.querySelector('#regform');
const user = document.querySelector('#user');
const email = document.querySelector('#email');
const pwd = document.querySelector('#pwd');
const pwd2 = document.querySelector('#pwd2');
const result = document.querySelector('#result');

// elementos para mostrar errores junto a cada campo
const erruser = document.querySelector('#erruser');
const erremail = document.querySelector('#erremail');
const errpwd = document.querySelector('#errpwd');
const errpwd2 = document.querySelector('#errpwd2');

// añadimos un listener al evento submit
form.addEventListener('submit', e => {
  e.preventDefault();
  // limpiar mensajes de error y resultado anterior
  [erruser, erremail, errpwd, errpwd2].forEach(el => el.textContent = '');
  result.textContent = '';

  let ok = true;

  // validación usuario: mínimo 3 caracteres
  if (user.value.trim().length < 3) {
    erruser.textContent = 'Mínimo 3 caracteres.';
    ok = false;
  }

  // validación email
  if (!email.checkValidity()) {
    erremail.textContent = 'Email no válido.';
    ok = false;
  }

  // validación contraseña: mínimo 8 caracteres
  if (pwd.value.length < 8) {
    errpwd.textContent = 'La contraseña debe tener al menos 8 caracteres.';
    ok = false;
  }

  // validación confirmación de contraseña
  if (pwd2.value !== pwd.value) {
    errpwd2.textContent = 'Las contraseñas no coinciden.';
    ok = false;
    
   
  }

  // mostrar mensaje de éxito si todo es correcto
  if (ok) {
    result.textContent = 'Registro correcto';
    result.style.color = 'yellow';
  }
});
