// esta funcion se ejecuta automaticamente cuando la pagina ha terminado de caragarse
window.onload = () => {
  // obtiene referencioa al elemento p con id p1
  const miParrafo = document.getElementById('p1');
   if (miParrafo !== null){
    alert("nodename: " + miParrafo.nodename);
    alert(miParrafo);
   } else{
    alert("el elemento con id p1 no existe")
   }
};