
const postForm = document.querySelector('#postForm');
const spinner = document.querySelector('#spinner');
const postResult = document.querySelector('#postResult');

postForm.addEventListener('submit', async e => {
  e.preventDefault();
  spinner.style.display = '';
  postResult.textContent = '';
  const data = {
    name: name.value.trim(),
    email: emailPost.value.trim()
  };
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(data)
    });
    const json = await res.json();
    postResult.textContent = `Enviado con ID: ${json.id}`;
  } catch (err) {
    postResult.textContent = 'Error al enviar.';
  } finally {
    spinner.style.display = 'none';
  }
});

