document.querySelectorAll('.comparison__toggle').forEach(toggle => {
  toggle.addEventListener('click', () => {
    const comparison = toggle.closest('.comparison');
    comparison.classList.toggle('open');
  });
});