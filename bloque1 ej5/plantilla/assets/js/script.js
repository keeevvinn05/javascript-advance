const ul = document.querySelector('#itemList');

ul.addEventListener('click', e => {
  if (e.target.tagName === 'LI') {
    // alterna la clase selected en ese li
    e.target.classList.toggle('selected');
  }
});

ul.addEventListener('dblclick', e => {
  if (e.target.tagName === 'LI') {
    // elimina ese li
    e.target.remove();
  }
});
