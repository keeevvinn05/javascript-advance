const span = document.getElementById('contador'); // Referencia al <span> donde se muestra el conteo

let seg = 0; // ¡Faltaba declarar esta variable!

const id = setInterval(() => {
  seg++; // Aumenta el contador cada segundo
  span.textContent = seg; // Muestra el valor actualizado en el <span>
}, 1000);

// Corregimos la sintaxis del addEventListener (faltaban los paréntesis antes de la función)
document.getElementById('btnDetener').addEventListener('click', () => {
  clearInterval(id); // Detiene el intervalo cuando se hace clic en el botón
});
