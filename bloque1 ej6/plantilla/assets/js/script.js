const sendBtn = document.querySelector('#sendBTN');
let clicks = 0;

sendBtn.addEventListener('click', () => {
  clicks++;

  if (clicks > 3) {
    alert('calmate wey');
  } else {
    sendBtn.textContent = 'Enviado';

    // Espera 1 segundo y desactiva el botón
    setTimeout(() => {
      sendBtn.disabled = true;
    }, 1000);
  }
});
