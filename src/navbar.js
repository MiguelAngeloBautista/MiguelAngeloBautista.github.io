const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > navbar.offsetTop) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
});