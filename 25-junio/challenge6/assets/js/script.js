// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
  const spinner = document.getElementById('spinner'); // Referencia al spinner
  const welcome = document.getElementById('welcome'); // Referencia al mensaje de bienvenida

  setTimeout(() => {
    spinner.classList.add('hidden');       // Oculta el spinner
    welcome.classList.remove('hidden');    // Muestra el mensaje de bienvenida
  }, 3000); // Espera 3 segundos
});
