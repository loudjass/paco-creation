document.addEventListener('DOMContentLoaded', () => {
    /* --- Intersection Observer for Scroll Animations --- */
    const reveals = document.querySelectorAll('.reveal');
    
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    };

    const revealObserver = new IntersectionObserver(revealCallback, {
        threshold: 0.1
    });

    reveals.forEach(reveal => {
        revealObserver.observe(reveal);
    });

    /* --- Mobile Menu --- */
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    menuBtn.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '80px';
        navLinks.style.left = '0';
        navLinks.style.width = '100vw';
        navLinks.style.backgroundColor = 'rgba(253, 250, 245, 0.95)';
        navLinks.style.padding = '20px';
        navLinks.style.textAlign = 'center';
        navLinks.style.zIndex = '1001';
    });

    /* --- Form Submission (Mailto) --- */
    const contactForm = document.getElementById('paco-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            const subject = encodeURIComponent(`Demande de création de la part de ${name}`);
            const body = encodeURIComponent(
                `Nom: ${name}\n` +
                `Email: ${email}\n\n` +
                `Projet:\n${message}`
            );
            
            // Replace with actual email if provided by user
            const pacoEmail = "contact@paco-creations.com"; 
            
            window.location.href = `mailto:${pacoEmail}?subject=${subject}&body=${body}`;
            
            alert("Votre client mail va s'ouvrir pour envoyer votre message. Merci de votre confiance !");
            contactForm.reset();
        });
    }

    /* --- Smooth Scrolling --- */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (window.innerWidth <= 768) {
                    navLinks.style.display = 'none';
                }
            }
        });
    });
});
