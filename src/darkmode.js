// darkmode.js
const darkModeToggle = document.getElementById("dark-mode-toggle-checkbox");
const toggleIcon = document.getElementById("toggle-icon");

darkModeToggle.addEventListener("change", () => {
    if (darkModeToggle.checked) {
        // Dark Mode is enabled
        document.body.classList.add("dark-mode");
        toggleIcon.src = "./src/images/moon.png"; // Replace with your moon icon
    } else {
        // Dark Mode is disabled
        document.body.classList.remove("dark-mode");
        toggleIcon.src = "./src/images/sun.png"; // Replace with your sun icon
    }
});