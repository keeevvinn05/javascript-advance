// esta funcion se ejecuta automaticamente cuando la pagina ha terminado de caragarse
window.onload = () => {
  // obtiene referencioa al elemento p con id p1
  const miParrafo = document.getElementById('p1');
  //se muestra la alarma del nodo, en este caso sera p
  alert("nodename: " + miParrafo.nodename);
//se muestra en una alerta el objeto del parrafo completo
  alert(miParrafo);
};