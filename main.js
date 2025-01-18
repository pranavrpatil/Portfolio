
document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const navList = document.querySelector('.navList');
    const navLinks = document.querySelectorAll('.navList a');

    menuIcon.addEventListener('click', function () {
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

});