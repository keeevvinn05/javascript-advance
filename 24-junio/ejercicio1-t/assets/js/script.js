// 1) Selección de elementos del DOM
const form    = document.querySelector('#loginForm');     // Referencia al formulario con id="loginForm"
const email   = document.querySelector('#email');         // Referencia al campo de correo
const pwd     = document.querySelector('#password');      // Referencia al campo de contraseña
const msg     = document.querySelector('#loginMsg');      // Referencia al contenedor donde mostramos mensajes
const inputs  = form.querySelectorAll('input');          // Todos los inputs dentro del formulario
const display = document.querySelector('#timerDisplay');  // Elemento donde mostraremos la cuenta atrás

// 2) Variables para controlar el temporizador
const TOTAL_SECONDS = 30;    // Duración total en segundos del contador
let timeLeft        = TOTAL_SECONDS; // Segundos restantes (inicialmente igual a TOTAL_SECONDS)
let timeoutId,      // ID que devuelve setTimeout para poder cancelarlo
    intervalId;     // ID que devuelve setInterval para poder cancelarlo

// 3) Función que se ejecuta cuando el tiempo se agota
function onTimeout() {
  msg.textContent = 'Tiempo agotado. Recarga la página.'; // Mostrar mensaje de tiempo expirado
  inputs.forEach(i => i.disabled = true);                // Deshabilitar todos los inputs
  form.querySelector('button').disabled = true;          // Deshabilitar el botón de envío
  clearInterval(intervalId);                             // Detener el interval que actualiza el contador
}

// 4) Función que reinicia tanto el countdown (interval) como el timeout final
function resetTimers() {
  clearTimeout(timeoutId);   // Cancelar cualquier timeout pendiente
  clearInterval(intervalId); // Cancelar cualquier interval pendiente

  timeLeft = TOTAL_SECONDS;  // Resetear los segundos restantes a la duración total
  display.textContent = timeLeft; // Mostrar el valor inicial en pantalla

  // Cada segundo decrementa timeLeft y actualiza display
  intervalId = setInterval(() => {
    timeLeft--;                     // Restar un segundo
    display.textContent = timeLeft; // Actualizar el texto del contador
    if (timeLeft <= 0) {            // Si llega a cero...
      clearInterval(intervalId);    //   detener el interval (no queremos valores negativos)
    }
  }, 1000); // 1000 ms = 1 segundo

  // Programar la función onTimeout() para que se ejecute tras TOTAL_SECONDS segundos
  timeoutId = setTimeout(onTimeout, TOTAL_SECONDS * 1000);
}

// 5) Al cargar la página, arrancamos el temporizador por primera vez
resetTimers();

// 6) Cada vez que el usuario interactúa con cualquiera de los inputs,
//    reiniciamos los temporizadores para empezar la cuenta de nuevo
inputs.forEach(input => {
  // 1. Recorremos todos los elementos <input> almacenados en la NodeList `inputs`
  
  ['input', 'keydown', 'focus'].forEach(evt =>
    // 2. Para cada uno de estos tres nombres de evento:
    //    - 'input'   (cuando cambia el valor del campo)
    //    - 'keydown' (cuando se pulsa una tecla)
    //    - 'focus'   (cuando el campo recibe el foco)
    
    input.addEventListener(evt, resetTimers)
    // 3. Añadimos un listener que ejecuta resetTimers() cada vez que ocurra ese evento en el input
  );
});

// 7) Manejo del envío del formulario y validaciones
form.addEventListener('submit', e => {
  e.preventDefault(); // Prevenir el envío normal para manejarlo con JS

  const correo = email.value.trim(); // Leer y recortar espacios del email
  const clave  = pwd.value;          // Leer la contraseña (sin trim para respetar espacios)

  // Validación del correo: debe contener "@"
  if (!correo.includes('@')) {
    msg.textContent = 'Introduce un correo válido.'; 
    resetTimers();  // Si falla, reiniciamos el temporizador
    return;         // Salimos sin continuar
  }

  // Validación de la contraseña: al menos 6 caracteres
  if (clave.length < 6) {
    msg.textContent = 'La contraseña debe tener al menos 6 caracteres.';
    resetTimers();  // Si falla, reiniciamos el temporizador
    return;         // Salimos sin continuar
  }

  // Si ambas validaciones pasan:
  clearTimeout(timeoutId);    // Cancelar el timeout final
  clearInterval(intervalId);  // Cancelar el interval del countdown
  msg.textContent = `¡Bienvenido, ${correo}!`; // Mensaje de bienvenida

  // Aquí podrías enviar el formulario con AJAX o con form.submit()
});







