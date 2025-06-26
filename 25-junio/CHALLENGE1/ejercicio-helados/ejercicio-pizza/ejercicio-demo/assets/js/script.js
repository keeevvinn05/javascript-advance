// funcion que recibe nombre y CB
function saludar(nombre, cb){
  // se construye un mensaje de saludo con el nombre 
  const mensaje = `hola, $(ana)`;
//hace que se ejecute la funcion CB, pasandole el mensaje
  cb(mensaje);
}
//se accede al boton id (btnSaludo)
document.getElementById('btnSaludo')
.addEventListener('click', ()=>{
  //cuando se hace click se llama a la funcion saludar con el nombre 'ana' y una funcion anonima como CB 
  //esta funcion msg => {document.getElementById('salida')
//version con => es mas moderna y compacta
saludar('ana', msg => {
document.getElementById('salida').textContent = msg
});
});