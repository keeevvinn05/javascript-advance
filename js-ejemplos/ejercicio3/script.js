// esta funcion se ejecuta automaticamente cuando la pagina ha terminado de caragarse
window.onload = () => {
const divs = document.getElementsByTagName("div");
if (divs.length >= 2){
  const segundoDiv = divs[1]

  const listaP = segundoDiv.getElementsByTagName("p");
  alert("numero de parrafos en el segundop <div> en la pagina: " + listaP.length);
}else{
  alert("no hay al menos dos <div> en la pagina");
}
};