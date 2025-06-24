
const cities = ['Madrid','Barcelona','Valencia','Sevilla','Zaragoza',
                'Málaga','Murcia','Palma','Bilbao','Alicante'];
const search = document.querySelector('#search');
const sugg = document.querySelector('#suggestions');

search.addEventListener('input', () => {
  const term = search.value.toLowerCase();
  sugg.innerHTML = '';
  if (!term) return;
  cities
    .filter(ci => ci.toLowerCase().startsWith(term))
    .slice(0, 5)
    .forEach(ci => {
      const li = document.createElement('li');
      li.textContent = ci;
      sugg.appendChild(li);
    });
});

