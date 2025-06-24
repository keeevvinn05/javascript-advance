js
CopiarEditar
const emailsDiv = document.querySelector('#emails');
const addEmail = document.querySelector('#addEmail');
const multiForm = document.querySelector('#multiEmailForm');
const emailList = document.querySelector('#emailList');

addEmail.addEventListener('click', () => {
  const wrapper = document.createElement('div');
  const input = document.createElement('input');
  input.type = 'email';
  input.required = true;
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.textContent = 'Eliminar';
  btn.addEventListener('click', () => wrapper.remove());
  wrapper.append(input, btn);
  emailsDiv.appendChild(wrapper);
});

multiForm.addEventListener('submit', e => {
  e.preventDefault();
  emailList.innerHTML = '';
  const inputs = emailsDiv.querySelectorAll('input');
  inputs.forEach(i => {
    const li = document.createElement('li');
    li.textContent = i.value;
    emailList.appendChild(li);
  });
});

