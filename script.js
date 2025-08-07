const yearElement = document.getElementById("year");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear().toString();
}

const themeToggleButton = document.getElementById("theme-toggle");
const STORAGE_KEY = "mini-site-theme";

function applyStoredThemePreference() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "light") document.documentElement.style.colorScheme = "light";
  if (stored === "dark") document.documentElement.style.colorScheme = "dark";
}

applyStoredThemePreference();

if (themeToggleButton) {
  themeToggleButton.addEventListener("click", () => {
    const current = document.documentElement.style.colorScheme;
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.style.colorScheme = next;
    localStorage.setItem(STORAGE_KEY, next);
  });
}


