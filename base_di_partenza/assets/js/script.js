
//Animazione di cambio colore Nav Bar & Nar Bar Button

window.addEventListener("scroll", function() {
    const navBarScrolled = document.getElementById("navContainer");
    const navButtonScrolled = document.getElementById("navButton");
    const targetDiv = document.getElementsByClassName("hero")[0];
    const targetPosition = targetDiv.getBoundingClientRect().top;
    if (targetPosition < 0) {
        navBarScrolled.classList.add("scrolledNavBar");
        navButtonScrolled.classList.add("scrolledButton"); 
    } else {
        navBarScrolled.classList.remove("scrolledNavBar");
        navButtonScrolled.classList.remove("scrolledButton");
    }
});
