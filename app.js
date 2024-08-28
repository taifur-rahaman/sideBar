const menu = document.querySelector(".bx-menu");
const sidebar = document.querySelector(".sidebar");
const closeMenu = document.querySelector(".fa-x");

menu.addEventListener("click", () => {
  sidebar.classList.toggle("show");
});

closeMenu.addEventListener("click", () => {
  sidebar.classList.remove("show");
});
