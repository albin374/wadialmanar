document.addEventListener('DOMContentLoaded', () => {
    // Hero slideshow logic
    const slides = document.querySelectorAll('.hero-slide');
    if (slides.length > 0) {
        let currentSlide = 0;
        
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 5000); // Change slide every 5 seconds
    }

    // Hamburger Menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }
    // Mobile Dropdown Toggle
    const dropdowns = document.querySelectorAll('.nav-dropdown');
    dropdowns.forEach(dropdown => {
        const toggleBtn = dropdown.querySelector('.mobile-toggle');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                dropdown.classList.toggle('open');
                if (dropdown.classList.contains('open')) {
                    toggleBtn.textContent = '-';
                } else {
                    toggleBtn.textContent = '+';
                }
            });
        }
    });

    // Sticky Navbar on Scroll
    const navbar = document.querySelector('.premium-nav');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                navbar.classList.add('nav-scrolled');
            } else {
                navbar.classList.remove('nav-scrolled');
            }
        });
    }
});
