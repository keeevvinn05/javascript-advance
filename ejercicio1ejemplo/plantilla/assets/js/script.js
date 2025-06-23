//selecciona el boton con el id(showBtn) y lo guarda en la constante btn
const btn = document.querySelector('#showBtn');
//selecciona el parrafo con id (msg) 
const msg = document.querySelector('#msg');
//añade un listener al boton que, al hacer clickm, canmbia el texto del parrafo
btn.addEventListener('click', () => {
  msg.textContent = 'hola k ase';
});
//selecciona el div con la clase "hover-box" y lo guarda en la constante box
const box = document.querySelector('.hover-box');
//añade un listener que detecta cuando el raton entra en el area de el div
box.addEventListener('mouseover', () =>{
//cambia el texto del div para indicar que hay hover
box.textContent = 'me estas haciendo cover papu 😉';
});
//añade un listener que detecta cuando el raton sale del area del div
box.addEventListener('mouseout', ()=>{
  //restablece el texto original del div
box.textContent = 'pasa el raton por aqui';
})