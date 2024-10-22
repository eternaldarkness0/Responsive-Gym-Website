const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');
const menuBtnIcon = document.querySelector('i');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    const isActive = navLinks.classList.contains('active');
    menuBtnIcon.setAttribute('class', isActive ? 'ri-close-line' : 'ri-menu-line');
})

navLinks.addEventListener('click', () => {
    navLinks.classList.remove('active');
    menuBtnIcon.setAttribute('class', 'ri-menu-line');
})

const options = {
    origin: 'bottom',
    distance: '60px',
    duration: 800,
};

ScrollReveal().reveal('.main-image img', {
    ...options,
    origin: 'right',
});

ScrollReveal().reveal('.main-content h1', {
    ...options,
    delay: 400,
});

ScrollReveal().reveal('.main-content h2', {
    ...options,
    delay: 800,
});

ScrollReveal().reveal('.main-content p', {
    ...options,
    delay: 1200,
});

ScrollReveal().reveal('.main-btn', {
    ...options,
    delay: 1600,
});

ScrollReveal().reveal('.about-image img', {
    ...options,
    origin: 'left',
});

ScrollReveal().reveal('.about-content h2', {
    ...options,
    delay: 400,
});

ScrollReveal().reveal('.about-content p', {
    ...options,
    delay: 800,
});

ScrollReveal().reveal('.about-btn', {
    ...options,
    delay: 1200,
});

ScrollReveal().reveal('.service-card', {
    duration: 700,
    interval: 400,
});

ScrollReveal().reveal('.facility-content h2', {
    ...options,
});

ScrollReveal().reveal('.facility-content p', {
    ...options,
    delay: 400,
});

ScrollReveal().reveal('.mentor-card', {
    ...options,
    interval: 450,
});

ScrollReveal().reveal('.banner-content h2', {
    ...options,
});

ScrollReveal().reveal('.banner-content p', {
    ...options,
    delay: 400,
});
