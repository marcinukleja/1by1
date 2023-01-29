window.onload = function () {
    console.log("loaded")
    const menuButtonElement = document.getElementById("chapterTitle");
    menuButtonElement.addEventListener("click", toggleMenu);
    const mainElement = document.getElementsByTagName('main')[0];
    console.log("MAIN:", mainElement)
    mainElement.addEventListener("click", closeMenu)
}

function closeMenu() {
    console.log("Close Menu")
    const navElement = document.getElementById("navigation");
    navElement.className = ""
}

function toggleMenu() {
    console.log("toggle")
    const navElement = document.getElementById("navigation");
    navElement.classList.toggle("expanded")
}