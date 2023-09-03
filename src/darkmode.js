const body = document.getElementById('body');
const darkModeButton = document.getElementById('dark-mode-button');

darkModeButton.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        // Switch to Light Mode
        body.classList.remove('dark-mode');
    } else {
        // Switch to Dark Mode
        body.classList.add('dark-mode');
    }
});
