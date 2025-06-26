// Función que simula una operación asíncrona, como cargar datos de un servidor
function simularCarga() {
  return new Promise((resolve, reject) => {

    // Simula una espera de 1.5 segundos antes de "responder"
    setTimeout(() => {

      // Genera un número aleatorio entre 0 y 1
      // Si el número es mayor que 0.3 (70% de probabilidad), se considera que la carga fue exitosa
      const ok = Math.random() > 0.3;

      // Si ok es true → resolvemos la promesa con un objeto que simula un usuario
      // Si ok es false → rechazamos la promesa con un mensaje de error
      ok
        ? resolve({ usuario: 'kevin', edad: 20 }) 
        : reject('error en la carga');

    }, 1500); // Espera de 1500 milisegundos (1.5 segundos)

  });
}



// Selecciona el botón con id="btnCargar" y le añade un evento al hacer clic
document.getElementById('btnCargar').addEventListener('click', () => {

  // Al hacer clic, cambia el contenido del elemento con id="datos" a 'cargando...'
  // para que el usuario vea que algo está ocurriendo
  document.getElementById('datos').textContent = 'cargando...';

  // Llama a la función simularCarga que devuelve una promesa
  simularCarga()

    // Si la promesa se resuelve correctamente (resolve), ejecuta esta función
    .then(info => {
      // Muestra los datos del "usuario" dentro del elemento con id="datos"
      document.getElementById('datos').textContent = `usuario: ${info.usuario}\nedad : ${info.edad}`;
    })

    // Si la promesa se rechaza (reject), captura el error y lo muestra
    .catch(err => {
      document.getElementById('datos').textContent = err;
    });

});
