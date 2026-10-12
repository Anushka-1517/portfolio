
const root = document.documentElement;
const themeToggle = document.getElementById("themeToggle");

// Restore the user's saved theme.
const savedTheme = localStorage.getItem("anushka-theme");

if (savedTheme === "light") {
  root.classList.add("light");
} else {
  root.classList.remove("light");
}

// Keep the theme button icon in sync with the active theme.
function updateThemeIcon() {
  if (!themeToggle) return;

  const isLight = root.classList.contains("light");

  themeToggle.textContent = isLight ? "☾" : "☼";
  themeToggle.setAttribute(
    "aria-label",
    isLight ? "Switch to dark theme" : "Switch to light theme"
  );
  themeToggle.setAttribute(
    "title",
    isLight ? "Switch to dark theme" : "Switch to light theme"
  );
}

updateThemeIcon();

// Toggle and save the selected theme.
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    root.classList.toggle("light");

    const isLight = root.classList.contains("light");

    localStorage.setItem(
      "anushka-theme",
      isLight ? "light" : "dark"
    );

    updateThemeIcon();
  });
}

// Automatically keep the footer year current.
const currentYear = document.getElementById("currentYear");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}
