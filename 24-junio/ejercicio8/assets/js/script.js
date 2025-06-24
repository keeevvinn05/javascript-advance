
const slider = document.querySelector('#volumen');
const valor = document.querySelector('#valor');

slider.addEventListener('input', () => {
  const v = slider.value;
  valor.textContent = v;
  // Escala de gris: 255 - (v*2.55)
  const g = 255 - Math.round(v * 2.55);
  document.body.style.backgroundColor = `rgb(${g},${g},${g})`;
});

