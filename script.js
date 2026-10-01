const root = document.documentElement;
const themeToggle = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("anushka-theme");
if (savedTheme === "light") root.classList.add("light");
themeToggle.textContent = root.classList.contains("light") ? "☾" : "☼";

themeToggle.addEventListener("click", () => {
  root.classList.toggle("light");
  const light = root.classList.contains("light");
  localStorage.setItem("anushka-theme", light ? "light" : "dark");
  themeToggle.textContent = light ? "☾" : "☼";
});

document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const form = e.currentTarget;
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();
  const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
  const body = encodeURIComponent(`Hi Anushka,\n\n${message}\n\nName: ${name}\nEmail: ${email}`);
  window.location.href = `mailto:email-anushkasangal15@gmail.com?subject=${subject}&body=${body}`;
});
