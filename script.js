const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const profileImg = document.getElementById('profile-img');

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    
    if (body.classList.contains('light-mode')) {
        themeToggle.textContent = "🌙";
        profileImg.src = "images/logo.png";
    } else {
        themeToggle.textContent = "☀️";
        profileImg.src = "images/logo2.png";
    }
});

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    if (navLinks.classList.contains('active')) {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '70px';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = 'var(--bg)';
        navLinks.style.padding = '20px';
    } else {
        navLinks.style.display = 'none';
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Message Received! Talk soon, Jehann.");
    this.reset();
});