
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


// JS sticky Side Bar
/* document.addEventListener("scroll", function() {
    const navBar = document.getElementById("navContainer");
    const sideBar = document.querySelector(".sideArt");
    const navBarHeight = navBar.offsetHeight;
    const sideBarPosition = sideBar.getBoundingClientRect().top;
    const viewportTop = window.scrollY;
    if (sideBarPosition <= navBarHeight) {
        navBar.style.position = "absolute";
        navBar.style.top = `${viewportTop + sideBarPosition - navBarHeight}`;
    } else {
        navBar.style.position = "sticky";
        navBar.style.top = "0";
    }
}); */