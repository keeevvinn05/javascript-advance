
const imgInput = document.querySelector('#imgInput');
const preview = document.querySelector('#preview');

imgInput.addEventListener('change', () => {
  const file = imgInput.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    preview.src = reader.result;
    preview.style.display = '';
  };
  reader.readAsDataURL(file);
});

