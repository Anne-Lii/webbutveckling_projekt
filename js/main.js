"use strict";

//hämtar element från  HTML-kod
const openMenuButton = document.getElementById("openMenu");
const closeMenuButton = document.getElementById("closeMenu");

//eventlistener
openMenuButton.addEventListener("click", menuToggle);
closeMenuButton.addEventListener("click", menuToggle);

//funktion som kollar om stylingen på menyn är display none eller block och ändrar vid klick
function menuToggle() {

    const navMenuDropEl = document.getElementById("navMenuDrop");

    let style = window.getComputedStyle(navMenuDropEl);

    if (style.display === "none") {
        navMenuDropEl.style.display = "block";
    } else {
        navMenuDropEl.style.display = "none";
    }

}