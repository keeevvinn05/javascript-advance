// esta funcion se ejecuta automaticamente cuando la pagina ha terminado de caragarse
window.onload = () => {
//1. primer div se busca el elemento con id intro
const divIntro = document.getElementById("intro");
// si el div con id="intro" se le asigna color de fondo amarillo
if (divIntro){
  divIntro.style.backgroundColor="yellow";
}
const segundoDiv = divIntro?.nextElementSibling;
if (segundoDiv){
  segundoDiv.style.color = 'blue'
}
};