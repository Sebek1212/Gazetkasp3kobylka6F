
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    themeToggle.textContent = 'Tryb jasny';
  } else {
    themeToggle.textContent = 'Tryb czarny';
  }
});
