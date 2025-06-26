const editor = document.getElementById('editor');
const statusDiv = document.getElementById('status');
let timerId;
editor.addEventListener('input', ()=>{
statusDiv.textContent = 'escribiendo...'
clearTimeout(timerId);
timerId = setTimeout(()=>{
console.log('guardado:', editor.value);
statusDiv.textContent = 'borrador guardado'
},2000);
});