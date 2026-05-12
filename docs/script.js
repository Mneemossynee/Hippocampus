// ===== SMOOTH SCROLLING FOR NAVIGATION LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== PLUGIN CARD TOGGLE =====
function togglePlugin(button) {
    const details = button.nextElementSibling;
    const isHidden = details.style.display === 'none';
    
    if (isHidden) {
        details.style.display = 'block';
        button.textContent = 'Show Less';
        button.style.background = 'linear-gradient(135deg, #A8C5A3 0%, #D4A5D4 100%)';
    } else {
        details.style.display = 'none';
        button.textContent = 'Learn More';
        button.style.background = 'linear-gradient(135deg, #A8C5A3 0%, #D4A5D4 100%)';
    }
}

// ===== INTERSECTION OBSERVER FOR SCROLL ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all cards for animation on scroll
document.querySelectorAll('.philosophy-card, .plugin-card').forEach(card => {
    observer.observe(card);
});

// ===== NAVBAR BACKGROUND ON SCROLL =====
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
    }
});

// ===== ACTIVE LINK HIGHLIGHTING =====
window.addEventListener('scroll', function() {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.style.opacity = '0.6';
            link.style.borderBottom = '2px solid white';
        } else {
            link.style.borderBottom = 'none';
            link.style.opacity = '1';
        }
    });
});

// ===== PAGE LOAD ANIMATIONS =====
document.addEventListener('DOMContentLoaded', function() {
    // Fade in hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        setTimeout(() => {
            heroContent.style.opacity = '1';
            heroContent.style.transition = 'opacity 0.8s ease';
        }, 100);
    }
});

// ===== BUTTON RIPPLE EFFECT =====
document.querySelectorAll('.cta-button, .learn-more').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

console.log('🌿 Welcome to Hippocampus - Your holistic wellness companion');
