const countBtn = document.querySelector('#countBtn');
const count = document.querySelector('#count');
let contador = 0;

countBtn.addEventListener('click', () => {
  contador += 1;
  count.textContent = contador;
});
