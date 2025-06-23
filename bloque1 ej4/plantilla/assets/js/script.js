const btnTooggle = document.querySelector('#toogleMenu');
const nav = document.querySelector('#mainNav');

btnTooggle.addEventListener('click', () => {
  const abierto = nav.style.display === 'block';
  nav.style.display = abierto ? 'none' : 'block';
  btnTooggle.textContent = abierto ? 'mostrar menu' : 'ocultar menu';
});
