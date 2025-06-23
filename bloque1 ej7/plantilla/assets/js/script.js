const form = document.querySelector('#myform');
const input = document.querySelector('#textInput');
const output = document.querySelector('#output');

//añade un listener al formulario

form.addEventListener('submit', e =>{
  //evita que el formulario recargue la pagina
e.preventDefault
//obtiene el valor del input u elimina los esspacios al inicio y al fin
const texto = input.ariaValueMax.trim();
if (texto){
output.textContent = 'has escrito: ${texto}';
input.value = '';
}else{
  output.textContent = 'porfavor, escribe algo';
}
});