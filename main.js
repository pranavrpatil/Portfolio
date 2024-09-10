
document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const navList = document.querySelector('.navList');
    const navLinks = document.querySelectorAll('.navList a');

    
    function closeNav() {
        navList.classList.remove('active');
    }

    
    menuIcon.addEventListener('click', function () {
        navList.classList.toggle('active');
    });

   
    navLinks.forEach(function (link) {
        link.addEventListener('click', closeNav);
    });
});
