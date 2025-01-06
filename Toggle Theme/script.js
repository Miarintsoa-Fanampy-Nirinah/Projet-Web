// Sélecteurs pour les éléments
const themeToggle = document.getElementById('theme-toggle');

// Theme functionality
function toggleTheme() {
  const body = document.body;
  if (themeToggle.checked) {
    body.setAttribute('data-theme', 'dark');
  } else {
    body.setAttribute('data-theme', 'light');
  }
}

// Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  // Event listener for theme toggle
  themeToggle.addEventListener('change', toggleTheme);
});
