const thumbs = document.querySelectorAll('.thumb');

thumbs.forEach(img => {
  img.addEventListener('mouseover', () => {
    img.style.opacity = '0.5';
  });
  
  img.addEventListener('mouseout', () => {
    img.style.opacity = '1';
  });
});
