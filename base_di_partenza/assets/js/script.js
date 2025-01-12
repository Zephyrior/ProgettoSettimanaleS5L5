
//Animazione di cambio colore Nav Bar & Nar Bar Button

/*window.addEventListener("scroll", function() {
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
});*/


window.addEventListener("scroll", function() {
    console.log("Scroll event fired");
    console.log("Window scrollY:", window.scrollY); // This will give us the scroll position

    const navBarScrolled = document.getElementById("navContainer");
    const navButtonScrolled = document.getElementById("navButton");
    const targetDiv = document.querySelector(".hero"); // Use querySelector for a more reliable selection

    if (!targetDiv) {
        console.log("Hero div not found!");
        return;
    }

    // Get the position of the hero section relative to the viewport
    const targetPosition = targetDiv.getBoundingClientRect().top;
    console.log("Hero div position relative to viewport:", targetPosition);

    // If the page is scrolled more than 260px, add the styles
    if (window.scrollY > 375) {
        navBarScrolled.classList.add("scrolledNavBar");
        navButtonScrolled.classList.add("scrolledButton");
    } else {
        navBarScrolled.classList.remove("scrolledNavBar");
        navButtonScrolled.classList.remove("scrolledButton");
    }
});