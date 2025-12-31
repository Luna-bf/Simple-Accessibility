// Mes éléments
let increment = document.getElementById("increment");
let changeTheme = document.getElementById("change-theme-btn");
let decrement = document.getElementById("decrement");
let resetAll = document.getElementById("resetAll");

/* Accessibilité */
increment.addEventListener("click", () => {
    document.querySelector("body").style.fontSize = "24px";
});

decrement.addEventListener("click", () => {
    document.querySelector("body").style.fontSize = "16px";
});

resetAll.addEventListener("click", () => {
    document.querySelector("body").style.fontSize = "16px";
    elements.darkMode = disableDarkMode();
});