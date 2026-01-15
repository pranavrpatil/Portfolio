document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const navList = document.querySelector('.navList');
    const navLinks = document.querySelectorAll('.navList a');
    const body = document.querySelector('body');
    const header = document.querySelector('header');

    // Function to check if the screen width is max 768px (mobile)
    function isMobile() {
        return window.matchMedia('(max-width: 768px)').matches;
    }

    // Mobile menu toggle
    menuIcon.addEventListener('click', function () {
        if (navList.style.display === 'block') {
            navList.style.display = 'none';
        } else {
            navList.style.display = 'block';
        }
    });

    // Add event listeners to hide the menu when a link is clicked, only for mobile
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

    // Add listener for resizing the window
    window.addEventListener('resize', function () {
        addMobileListeners();
    });

    // Header scroll effect
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Smooth scroll reveal animations
    const revealElements = document.querySelectorAll('.about, .skills, .experience, .services, .portfolio, .contact');

    function revealOnScroll() {
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('reveal', 'active');
            }
        });
    }

    // Initial check
    revealOnScroll();

    // Check on scroll
    window.addEventListener('scroll', revealOnScroll);

    // Active navigation highlighting removed as per user request

    // Smooth scrolling for anchor links
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add animation to skill items on hover
    const skillItems = document.querySelectorAll('.skills li');
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-10px) scale(1.05)';
        });

        item.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Parallax effect for home section
    window.addEventListener('scroll', function () {
        const scrolled = window.pageYOffset;
        const homeText = document.querySelector('.home-text');

        if (homeText && scrolled < window.innerHeight) {
            homeText.style.transform = `translateY(${scrolled * 0.5}px)`;
            homeText.style.opacity = 1 - (scrolled / 600);
        }
    });

});
