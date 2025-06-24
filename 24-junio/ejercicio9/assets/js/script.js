
const pm = document.querySelector('#phoneMask');

pm.addEventListener('input', () => {
  // Eliminar todo lo no numérico
  let nums = pm.value.replace(/\D/g, '');
  // Limitar a 9 dígitos
  nums = nums.substring(0, 9);
  // Formatear
  const part1 = nums.substring(0, 3);
  const part2 = nums.substring(3, 6);
  const part3 = nums.substring(6, 9);
  let formatted = '';
  if (part1) formatted = `(${part1}`;
  if (part1 && part1.length === 3) formatted += `) `;
  if (part2) formatted += part2;
  if (part2 && part2.length === 3) formatted += '-';
  if (part3) formatted += part3;
  pm.value = formatted;
});

