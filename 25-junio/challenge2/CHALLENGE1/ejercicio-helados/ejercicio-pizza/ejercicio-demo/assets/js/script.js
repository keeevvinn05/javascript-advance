// Añadimos un 'escuchador de eventos' al botón con id="btnMensaje"
  document.getElementById('btnMensaje').addEventListener('click', () => {

    // Al hacer clic, cambia el texto del elemento con id="retardo" a '...pensando...'
    document.getElementById('retardo').textContent = '...pensando...';

    // Después de 2 segundos (2000 milisegundos) se ejecuta esta función
    setTimeout(() => {
      // Cambia el texto del mismo elemento a 'ya esta listo'
      document.getElementById('retardo').textContent = 'ya esta listo';
    }, 2000); // Tiempo de espera: 2000 milisegundos (2 segundos)

  });