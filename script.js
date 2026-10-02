const root = document.documentElement;

const themeToggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("anushka-theme");

if (savedTheme === "light") {
  root.classList.add("light");
}

themeToggle.textContent =
  root.classList.contains("light") ? "☾" : "☼";


themeToggle.addEventListener("click", () => {

  root.classList.toggle("light");

  const light = root.classList.contains("light");

  localStorage.setItem(
    "anushka-theme",
    light ? "light" : "dark"
  );

  themeToggle.textContent =
    light ? "☾" : "☼";

});