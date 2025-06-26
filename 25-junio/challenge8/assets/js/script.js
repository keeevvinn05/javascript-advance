const testimonials = [
  { text: '!serivio explendido', author: 'joseph' },
  { text: '!muy facil de usar', author: 'rúben' },
  { text: '!recomendado 100%', author: 'alex' },
  { text: 'no volvería a probar esta💩 de web', author: 'azucena' },
  { text: 'no me carga esta web 😡', author: 'carlos' },
  { text: 'no consigo aprender cómo funciona la página 😡', author: 'luis.D' },
  { text: 'el autor de esta web es el mejor', author: 'ElProfe' },
];

const block = document.getElementById('testimonials'); // donde va el texto
const auth = document.getElementById('author');         // donde va el autor
const btnPause = document.getElementById('pause');
const btnResume = document.getElementById('resume');

let idx = 0;
let intervalId = null;

function showTestimonial() {
  const t = testimonials[idx]; // ❌ antes pusiste "testimonial" (no existe)
  block.textContent = `"${t.text}"`;
  auth.textContent = `- ${t.author}`; // ❌ antes escribiste $[t.author] (incorrecto)
  idx = (idx + 1) % testimonials.length;
}

function startCarousel() {
  intervalId = setInterval(showTestimonial, 2000);
}

function stopCarousel() {
  clearInterval(intervalId); // ❌ antes escribiste "intervalid" (mal escrito)
}

btnPause.addEventListener('click', stopCarousel);
btnResume.addEventListener('click', startCarousel);

startCarousel(); // empieza automáticamente
