document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const main = document.querySelector('main');

    // Check if dark mode is saved in local storage
    if (localStorage.getItem('darkMode') === 'enabled') {
        main.classList.add('dark-mode');
    }

    // Toggle dark mode on button click
    darkModeToggle.addEventListener('click', function () {
        main.classList.toggle('dark-mode');
        
        // Save dark mode preference to local storage
        if (main.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', null);
        }
    });
});
