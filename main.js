document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const navList = document.querySelector('.navList');
    const navLinks = document.querySelectorAll('.navList a');
    const body = document.querySelector('body');
    
    // Function to check if the screen width is max 768px (mobile)
    function isMobile() {
        return window.matchMedia('(max-width: 768px)').matches;
    }

    menuIcon.addEventListener('click', function () {
        if (navList.style.display === 'block') {
            navList.style.display = 'none';
        } else {
            navList.style.display = 'block';
        }
    });

    // Add event listeners to hide the menu when a link is clicked, only for mobile (max-width: 768px)
    function addMobileListeners() {
        if (isMobile()) {
            navLinks.forEach(function (link) {
                link.addEventListener('click', function () {
                    navList.style.display = 'none';
                });
            });

            // Close the menu if clicking outside of it
            body.addEventListener('click', function (event) {
                if (navList.style.display === 'block' && !navList.contains(event.target) && event.target !== menuIcon) {
                    navList.style.display = 'none';
                }
            });
        }
    }

    // Check if it's mobile on page load
    addMobileListeners();

    // Optionally, add a listener for resizing the window to handle changes in screen size
    window.addEventListener('resize', function () {
        addMobileListeners();
    });

});


