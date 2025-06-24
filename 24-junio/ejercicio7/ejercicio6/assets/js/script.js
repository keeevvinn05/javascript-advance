
const form = document.querySelector('#wizardForm');
const steps = Array.from(form.querySelectorAll('.step'));
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');
const submitBtn = document.querySelector('#submitBtn');
const summary = document.querySelector('#summary');
const result = document.querySelector('#result');
let current = 0;

function showStep(i) {
  steps.forEach((s, idx) => s.style.display = idx === i ? '' : 'none');
  prevBtn.style.display = i === 0 ? 'none' : '';
  nextBtn.style.display = i === steps.length - 1 ? 'none' : '';
  submitBtn.style.display = i === steps.length - 1 ? '' : 'none';
  if (i === steps.length - 1) {
    // Resumir datos
    summary.textContent = `
      Nombre: ${firstName.value} ${lastName.value}
      Email: ${email.value}
      Teléfono: ${phone.value}
    `;
  }
}

prevBtn.addEventListener('click', () => {
  current--;
  showStep(current);
});

nextBtn.addEventListener('click', () => {
  // Validar campos del paso actual
  const inputs = steps[current].querySelectorAll('input');
  const valid = Array.from(inputs).every(i => i.checkValidity());
  if (!valid) {
    inputs.forEach(i => i.reportValidity());
    return;
  }
  current++;
  showStep(current);
});

form.addEventListener('submit', e => {
  e.preventDefault();
  result.textContent = '¡Registro completado!';
});

showStep(current);

