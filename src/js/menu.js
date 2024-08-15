const menuIcon = document.querySelector(".hambergur-menu");
const menu = document.querySelector(".menu")
const closeBtn = menu.querySelector("#closeBtn");
menuIcon.addEventListener("click", () => {
    menu.classList.add("show")
})
closeBtn.addEventListener("click", () => {
    menu.classList.remove("show")
})
