let temporizador;
document.getElementById('buscador').addEventListener('input', e =>{
clearTimeout(temporizador);
temporizador  = setTimeout(()=>{
  document.getElementById('log').textContent = 'buscando; ' + e.target.value;
},500);
});