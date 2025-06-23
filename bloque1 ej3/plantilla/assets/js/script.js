const spans = document.querySelectorAll('p span');

spans.forEach(span =>{
span.addEventListener('click',() => {
  const estilo = window.getComputedStyle(span);
const size = parseFloat(estilo.fontSize);
span.style.fontSize = (size +2) + 'px';
});
}); 