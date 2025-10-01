document.addEventListener('DOMContentLoaded', () => {
  const dropdown = document.querySelector('.has-dropdown');
  if (!dropdown) return;

  const link = dropdown.querySelector('.dropdown-link');
  const menu = dropdown.querySelector('.dropdown-menu');
  if (!link || !menu) return;

  link.addEventListener('click', (e) => {
    e.preventDefault();
    dropdown.classList.toggle('active');
  });

  document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove('active');
    }
  });
});
