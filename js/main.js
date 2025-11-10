const toggleButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".global-nav");

toggleButton.addEventListener("click", () => {
  nav.classList.toggle("active");
});
