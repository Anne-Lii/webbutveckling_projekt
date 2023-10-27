"use strict";

//hämtar element från HTML-kod
const openMenuButton = document.getElementById("openMenu");
const closeMenuButton = document.getElementById("closeMenu");

//eventlistener
openMenuButton.addEventListener("click", menuToggle);
closeMenuButton.addEventListener("click", menuToggle);

//funktion som kollar om stylingen på menyn är display none eller block och ändrar vid klick
function menuToggle() {

    const navMenuDropEl = document.getElementById("navMenuDrop");

    let style = window.getComputedStyle(navMenuDropEl);//kontrollerar om stylingen display är none eller block just nu

    if (style.display === "none") {
        navMenuDropEl.style.display = "block";//är display none nu så ändras det till block
    } else {
        navMenuDropEl.style.display = "none";//tvärtom här
    }

}