const readMoreBtn = document.querySelector('.read__more');
const hiddenText = document.querySelectorAll('.hidden__text');
const hiddenPoint = document.querySelector('.hidden__point');

readMoreBtn.addEventListener('click', () => {
  const isOpen = readMoreBtn.classList.toggle('open');

  hiddenText.forEach(text => {
    text.classList.toggle('hidden__text--open', isOpen);
  });

  hiddenPoint.style.display = isOpen ? 'none' : 'inline';

  readMoreBtn.textContent = isOpen ? 'show less' : 'show more';
});
