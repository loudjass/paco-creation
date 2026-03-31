document.addEventListener('DOMContentLoaded', () => {
    /* --- Product Data --- */
    const products = [
        {
            id: 'poupee-bouquet',
            ref: 'PB001',
            title: 'La Poupée Bouquet 2-en-1',
            category: 'Coup de Cœur',
            description: 'Une création unique et magique qui se transforme d\'un magnifique bouquet de fleurs éternelles en une adorable poupée de chiffon. C\'est le cadeau idéal pour décorer une chambre et offrir un compagnon de jeu inoubliable.',
            images: [
                'public/images/poupee-bouquet-2-en-1-bouquet.jpg.jpg',
                'public/images/poupee-bouquet-2-en-1-pupee.jpg.jpg'
            ],
            details: {
                matiere: 'Coton & Velours doux',
                dimensions: 'Environ 30cm',
                entretien: 'Lavage délicat à la main'
            },
            price: 'Sur demande'
        },
        {
            id: 'sac-franges',
            ref: 'SA001',
            title: 'Sac Franges & Lilas',
            category: 'Accessoire Bohème',
            description: 'Ce sac en crochet allie la pureté du blanc à l\'élégance du lilas. Ses franges généreuses lui donnent un mouvement gracieux, parfait pour une balade estivale ou une soirée bohème.',
            images: ['public/images/sac-blanc-violet-franges.jpg.jpg'],
            details: {},
            price: 'Création sur demande'
        },
        {
            id: 'peluche-lapin',
            ref: 'LA001',
            title: 'Lapinot Rose Poudré',
            category: 'Douceur Enfant',
            description: 'Un petit lapin au crochet d\'une douceur infinie. Avec ses longues oreilles et sa couleur rose poudré, il deviendra vite le meilleur ami des petits (et des grands).',
            images: ['public/images/peluche-lapin-rose.jpg.jpg'],
            details: {},
            price: 'Création sur demande'
        },
        {
            id: 'sac-rayures',
            ref: 'SA002',
            title: 'Sac Rayures Pastel',
            category: 'Mode Printanière',
            description: 'Un sac spacieux et robuste aux rayures harmonieuses. Un mélange de lilas, crème et rose qui sent bon le printemps et les journées ensoleillées.',
            images: ['public/images/sac-raye-violet-creme.jpg.jpg'],
            details: {},
            price: 'Création sur demande'
        },
        {
            id: 'sac-geometrique',
            ref: 'SA003',
            title: 'Sac Géométrique Violet',
            category: 'Contemporain',
            description: 'Un design moderne aux motifs géométriques jouant sur les contrastes de violet et de crème. Idéal pour un look structuré et original.',
            images: ['public/images/sac-geometrique-violet-creme.jpg.jpg'],
            details: {},
            price: 'Création sur demande'
        },
        {
            id: 'panier-douceur',
            ref: 'PA001',
            title: 'Panier Douceur',
            category: 'Rangement Chic',
            description: 'Un petit panier de rangement à la fois pratique et esthétique. Idéal pour organiser vos accessoires de beauté ou vos fils de coton avec une touche de couleur tendre.',
            images: ['public/images/panier-creme-rose.jpg.jpg'],
            details: {},
            price: 'Création sur demande'
        },
        {
            id: 'sac-passion',
            ref: 'SA004',
            title: 'Sac Ruban & Passion',
            category: 'Édition Classique',
            description: 'Le contraste classique du rouge et du blanc pour un sac qui ne passe pas inaperçu. Sa texture travaillée et ses finitions soignées en font un accessoire de caractère.',
            images: ['public/images/sac-rouge-blanc-crochet.jpg.jpg'],
            details: {},
            price: 'Création sur demande'
        },
        {
            id: 'panier-printemps',
            ref: 'PA002',
            title: 'Panier Printemps',
            category: 'Féerie Florale',
            description: 'Un panier fleuri qui apporte immédiatement de la gaieté. Ses nuances de rose et ses motifs délicats en font une pièce de décoration unique pour votre intérieur.',
            images: ['public/images/panier-rose-multicolore.jpg.jpg'],
            details: {},
            price: 'Création sur demande'
        }
    ];

    /* --- Render Gallery --- */
    const productGrid = document.getElementById('product-grid');
    if (productGrid) {
        products.forEach((product, index) => {
            if (product.id === 'poupee-bouquet') return; // Skip featured in main gallery if desired, or keep it. Let's keep it.
            
            const card = document.createElement('div');
            card.className = 'card reveal';
            card.innerHTML = `
                <div class="card-image">
                    <img src="${product.images[0]}" alt="${product.title}">
                </div>
                <div class="card-info">
                    <span class="product-sku">${product.ref}</span>
                    <span class="category">${product.category}</span>
                    <h3 class="card-title">${product.title}</h3>
                    <p class="card-desc">${product.description.substring(0, 100)}...</p>
                </div>
            `;
            card.addEventListener('click', () => openModal(product));
            productGrid.appendChild(card);
        });
    }

    /* --- Open Featured From Views --- */
    const viewBouquet = document.getElementById('view-bouquet');
    const viewPupee = document.getElementById('view-pupee');
    
    if (viewBouquet) {
        viewBouquet.addEventListener('click', () => {
            const featuredProduct = products.find(p => p.id === 'poupee-bouquet');
            if (featuredProduct) openModal(featuredProduct, 0);
        });
    }
    if (viewPupee) {
        viewPupee.addEventListener('click', () => {
            const featuredProduct = products.find(p => p.id === 'poupee-bouquet');
            if (featuredProduct) openModal(featuredProduct, 1);
        });
    }

    /* --- Featured Product Link (CTA) --- */
    const featuredLink = document.querySelector('#vedette .cta-btn');
    if (featuredLink) {
        featuredLink.addEventListener('click', (e) => {
            e.preventDefault();
            const featuredProduct = products.find(p => p.id === 'poupee-bouquet');
            if (featuredProduct) openModal(featuredProduct, 0);
        });
    }

    /* --- Modal Logic --- */
    const modal = document.getElementById('product-modal');
    const closeModalBtn = document.querySelector('.close-modal');
    
    function openModal(product, startIndex = 0) {
        const modalMainImage = document.getElementById('modal-main-image');
        const modalThumbnails = document.getElementById('modal-thumbnails');
        const modalTitle = document.getElementById('modal-title');
        const modalCategory = document.getElementById('modal-category');
        const modalSku = document.getElementById('modal-sku');
        const modalDesc = document.getElementById('modal-description');
        const modalPrice = document.getElementById('modal-price');
        const modalWhatsApp = document.getElementById('modal-whatsapp');
        const detailSpecs = document.getElementById('detail-specs');

        // Set basic info
        modalTitle.textContent = product.title;
        modalCategory.textContent = product.category;
        if (modalSku) modalSku.textContent = `Référence : ${product.ref}`;
        modalDesc.textContent = product.description;
        modalPrice.textContent = product.price;

        // WhatsApp dynamic link
        if (modalWhatsApp) {
            const waMessage = encodeURIComponent(`Bonjour, je souhaite commander la création ${product.title} (Réf : ${product.ref}).`);
            modalWhatsApp.href = `https://wa.me/33607877159?text=${waMessage}`;
        }

        // Set main image (based on startIndex)
        const activeIdx = (startIndex < product.images.length) ? startIndex : 0;
        modalMainImage.src = product.images[activeIdx];
        modalMainImage.alt = product.title;

        // Set thumbnails
        modalThumbnails.innerHTML = '';
        if (product.images.length > 1) {
            product.images.forEach((imgSrc, idx) => {
                const thumb = document.createElement('div');
                thumb.className = `thumb ${idx === activeIdx ? 'active' : ''}`;
                thumb.innerHTML = `<img src="${imgSrc}" alt="${product.title} view ${idx + 1}">`;
                thumb.addEventListener('click', () => {
                    modalMainImage.src = imgSrc;
                    document.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
                    thumb.classList.add('active');
                });
                modalThumbnails.appendChild(thumb);
            });
        }

        // Set details (Material, Dimensions, etc.)
        detailSpecs.innerHTML = '';
        const detailsMap = {
            matiere: 'Matière',
            dimensions: 'Dimensions',
            entretien: 'Entretien'
        };

        let hasDetails = false;
        for (const [key, label] of Object.entries(detailsMap)) {
            if (product.details[key]) {
                hasDetails = true;
                const row = document.createElement('div');
                row.className = 'detail-row';
                row.innerHTML = `<span class="detail-label">${label}</span><span>${product.details[key]}</span>`;
                detailSpecs.appendChild(row);
            }
        }

        if (!hasDetails) {
            detailSpecs.innerHTML = '<p style="font-style: italic; opacity: 0.6; font-size: 0.9rem;">Détails supplémentaires à venir...</p>';
        }

        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scroll
    }

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

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
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    function initReveal() {
        document.querySelectorAll('.reveal').forEach(reveal => {
            revealObserver.observe(reveal);
        });
    }
    initReveal();

    /* --- Mobile Menu --- */
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const nav = document.querySelector('nav');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            const isOpen = navLinks.classList.contains('active');
            
            if (!isOpen) {
                navLinks.classList.add('active');
                menuBtn.classList.add('open');
                
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '90px';
                navLinks.style.left = '0';
                navLinks.style.width = '100vw';
                navLinks.style.backgroundColor = 'rgba(255, 252, 249, 0.98)';
                navLinks.style.padding = '40px 20px';
                navLinks.style.textAlign = 'center';
                navLinks.style.zIndex = '1001';
                navLinks.style.boxShadow = '0 10px 20px rgba(58, 42, 42, 0.1)';
                
                menuBtn.children[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                menuBtn.children[1].style.opacity = '0';
                menuBtn.children[2].style.transform = 'rotate(-45deg) translate(7px, -8px)';
            } else {
                navLinks.classList.remove('active');
                menuBtn.classList.remove('open');
                navLinks.style.display = 'none';
                
                menuBtn.children[0].style.transform = 'none';
                menuBtn.children[1].style.opacity = '1';
                menuBtn.children[2].style.transform = 'none';
            }
        });
    }

    /* --- Form Submission (Mailto) --- */
    const contactForm = document.getElementById('paco-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            const subject = encodeURIComponent(`Demande de création de la part de ${name}`);
            const body = encodeURIComponent(`Nom: ${name}\nEmail: ${email}\n\nProjet:\n${message}`);
            
            window.location.href = `mailto:pja60@live.fr?subject=${subject}&body=${body}`;
            alert("Votre message a bien été préparé ! Votre application de messagerie va s'ouvrir pour l'envoyer.");
            contactForm.reset();
        });
    }

    /* --- Smooth Scrolling --- */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 90;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                
                if (window.innerWidth <= 768 && navLinks) {
                    navLinks.classList.remove('active');
                    navLinks.style.display = 'none';
                    menuBtn.children[0].style.transform = 'none';
                    menuBtn.children[1].style.opacity = '1';
                    menuBtn.children[2].style.transform = 'none';
                }
            }
        });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.padding = '5px 0';
            nav.style.backgroundColor = 'rgba(255, 252, 243, 0.95)';
        } else {
            nav.style.padding = '0';
            nav.style.backgroundColor = 'rgba(255, 252, 243, 0.85)';
        }
        
        // Hide/Show Header on scroll for mobile
        if (window.innerWidth <= 768) {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 150) {
                // Scrolling down
                nav.classList.add('nav-hidden');
            } else {
                // Scrolling up
                nav.classList.remove('nav-hidden');
            }
            lastScrollY = currentScrollY;
        }
    });

    let lastScrollY = window.scrollY;
});
