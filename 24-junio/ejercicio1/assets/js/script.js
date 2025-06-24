const form = document.querySelector('#loginForm');
const email = document.querySelector('#email');
const pwd = document.querySelector('#password');
const msg = document.querySelector('#LoginMsg');

form.addEventListener('submit', e => {
    e.preventDefault();

    const correo = email.value.trim();
    const clave = pwd.value;

    if (!correo.includes('@')) {
        msg.textContent = 'Introduce un correo valido.';
        return;
    }

    if (clave.length < 6) {
        msg.textContent = 'La contraseña debe tener al menos 6 caracteres.';
        return;
    }

    msg.textContent = `Bienvenido, ${correo}`;
});
