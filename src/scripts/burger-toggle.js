const menu = document.querySelector('.menu');
const toggle = document.querySelector('.burger__toggle');
const icon = toggle.querySelector('img');
const burger = './assets/icons/burger.svg';
const close = './assets/icons/close.svg';

toggle.addEventListener('click', () => {
  const isOpen = toggle.classList.toggle('active');
  icon.src = isOpen ? close : burger;
});

const closeMenu = () => {
  menu.classList.remove('menu--open');
  toggle.setAttribute('aria-expanded', false);
};

toggle.addEventListener('click', (e) => {
  e.stopPropagation();
  const isOpen = menu.classList.toggle('menu--open');
  toggle.setAttribute('aria-expanded', isOpen);
});

document.addEventListener('click', (e) => {
  if (!menu.contains(e.target) && !toggle.contains(e.target)) {
    closeMenu();
  }
});

let scrollTimeout;
window.addEventListener('scroll', () => {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(closeMenu, 10);
});