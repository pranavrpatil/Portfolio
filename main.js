
document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const navList = document.querySelector('.navList');
    const navLinks = document.querySelectorAll('.navList a');
    const body = document.querySelector('body');
    
    menuIcon.addEventListener('click', function (event) {
        // event.stopPropagation();
        if (navList.style.display === 'block') {
            navList.style.display = 'none';
        } else {
            navList.style.display = 'block';
        }
    });

    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            navList.style.display = 'none';
        });
    });

    body.addEventListener('click', function (event) {
        if (navList.style.display === 'block' && !navList.contains(event.target) && event.target !== menuIcon) {
            navList.style.display = 'none';
        }
    });

});