document.addEventListener('DOMContentLoaded', () => {

    /* =============================================
       PRODUCT DATA — Single source of truth
       ============================================= */
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
            price: 49,
            priceLabel: '49 €'
        },
        {
            id: 'sac-franges',
            ref: 'SA001',
            title: 'Sac Franges & Lilas',
            category: 'Accessoire Bohème',
            description: 'Ce sac en crochet allie la pureté du blanc à l\'élégance du lilas. Ses franges généreuses lui donnent un mouvement gracieux, parfait pour une balade estivale ou une soirée bohème.',
            images: ['public/images/sac-blanc-violet-franges.jpg.jpg'],
            details: {
                matiere: 'Coton crocheté',
                entretien: 'Lavage délicat à la main'
            },
            price: 42,
            priceLabel: '42 €'
        },
        {
            id: 'peluche-lapin',
            ref: 'LA001',
            title: 'Lapinot Rose Poudré',
            category: 'Douceur Enfant',
            description: 'Un petit lapin au crochet d\'une douceur infinie. Avec ses longues oreilles et sa couleur rose poudré, il deviendra vite le meilleur ami des petits (et des grands).',
            images: ['public/images/peluche-lapin-rose.jpg.jpg'],
            details: {
                matiere: 'Coton doux',
                dimensions: 'Environ 22cm'
            },
            price: 28,
            priceLabel: '28 €'
        },
        {
            id: 'sac-rayures',
            ref: 'SA002',
            title: 'Sac Rayures Pastel',
            category: 'Mode Printanière',
            description: 'Un sac spacieux et robuste aux rayures harmonieuses. Un mélange de lilas, crème et rose qui sent bon le printemps et les journées ensoleillées.',
            images: ['public/images/sac-raye-violet-creme.jpg.jpg'],
            details: {
                matiere: 'Coton crocheté'
            },
            price: 38,
            priceLabel: '38 €'
        },
        {
            id: 'sac-geometrique',
            ref: 'SA003',
            title: 'Sac Géométrique Violet',
            category: 'Contemporain',
            description: 'Un design moderne aux motifs géométriques jouant sur les contrastes de violet et de crème. Idéal pour un look structuré et original.',
            images: ['public/images/sac-geometrique-violet-creme.jpg.jpg'],
            details: {
                matiere: 'Coton crocheté'
            },
            price: 36,
            priceLabel: '36 €'
        },
        {
            id: 'panier-douceur',
            ref: 'PA001',
            title: 'Panier Douceur',
            category: 'Rangement Chic',
            description: 'Un petit panier de rangement à la fois pratique et esthétique. Idéal pour organiser vos accessoires de beauté ou vos fils de coton avec une touche de couleur tendre.',
            images: ['public/images/panier-creme-rose.jpg.jpg'],
            details: {
                matiere: 'Coton crocheté'
            },
            price: 22,
            priceLabel: '22 €'
        },
        {
            id: 'sac-passion',
            ref: 'SA004',
            title: 'Sac Ruban & Passion',
            category: 'Édition Classique',
            description: 'Le contraste classique du rouge et du blanc pour un sac qui ne passe pas inaperçu. Sa texture travaillée et ses finitions soignées en font un accessoire de caractère.',
            images: ['public/images/sac-rouge-blanc-crochet.jpg.jpg'],
            details: {
                matiere: 'Coton crocheté'
            },
            price: 34,
            priceLabel: '34 €'
        },
        {
            id: 'panier-printemps',
            ref: 'PA002',
            title: 'Panier Printemps',
            category: 'Féerie Florale',
            description: 'Un panier fleuri qui apporte immédiatement de la gaieté. Ses nuances de rose et ses motifs délicats en font une pièce de décoration unique pour votre intérieur.',
            images: ['public/images/panier-rose-multicolore.jpg.jpg'],
            details: {
                matiere: 'Coton crocheté'
            },
            price: 24,
            priceLabel: '24 €'
        }
    ];


    /* =============================================
       CART SYSTEM — localStorage-backed, clean API
       ============================================= */
    const CART_KEY = 'paco_cart';

    function getCart() {
        try {
            return JSON.parse(localStorage.getItem(CART_KEY)) || [];
        } catch { return []; }
    }

    function saveCart(cart) {
        localStorage.setItem(CART_KEY, JSON.stringify(cart));
        updateCartBadge();
        renderCartDrawer();
    }

    function addToCart(productId, qty = 1) {
        const product = products.find(p => p.id === productId);
        if (!product) return;
        const cart = getCart();
        const existing = cart.find(item => item.id === productId);
        if (existing) {
            existing.qty += qty;
        } else {
            cart.push({ id: productId, qty });
        }
        saveCart(cart);
        showCartNotification(product.title);
    }

    function removeFromCart(productId) {
        const cart = getCart().filter(item => item.id !== productId);
        saveCart(cart);
    }

    function updateCartQty(productId, qty) {
        const cart = getCart();
        const item = cart.find(i => i.id === productId);
        if (item) {
            item.qty = Math.max(1, qty);
        }
        saveCart(cart);
    }

    function getCartTotal() {
        const cart = getCart();
        return cart.reduce((sum, item) => {
            const product = products.find(p => p.id === item.id);
            return sum + (product ? product.price * item.qty : 0);
        }, 0);
    }

    function getCartItemCount() {
        return getCart().reduce((sum, item) => sum + item.qty, 0);
    }

    /* --- Cart Badge in Nav --- */
    function updateCartBadge() {
        const badge = document.getElementById('cart-count');
        const count = getCartItemCount();
        if (badge) {
            badge.textContent = count;
            badge.style.display = count > 0 ? 'flex' : 'none';
        }
    }

    /* --- Cart Notification Toast --- */
    function showCartNotification(title) {
        // Remove existing
        const existing = document.querySelector('.cart-toast');
        if (existing) existing.remove();

        const toast = document.createElement('div');
        toast.className = 'cart-toast';
        toast.innerHTML = `
            <span class="cart-toast-icon">✓</span>
            <span class="cart-toast-text"><strong>${title}</strong> ajouté au panier</span>
        `;
        document.body.appendChild(toast);

        requestAnimationFrame(() => toast.classList.add('visible'));
        setTimeout(() => {
            toast.classList.remove('visible');
            setTimeout(() => toast.remove(), 400);
        }, 2600);
    }

    /* --- Cart Drawer --- */
    const cartDrawer = document.getElementById('cart-drawer');
    const cartOverlay = document.getElementById('cart-overlay');
    const cartClose = document.getElementById('cart-close');
    const cartToggle = document.getElementById('cart-toggle');

    function openCartDrawer() {
        if (cartDrawer && cartOverlay) {
            renderCartDrawer();
            cartDrawer.classList.add('open');
            cartOverlay.classList.add('open');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeCartDrawer() {
        if (cartDrawer && cartOverlay) {
            cartDrawer.classList.remove('open');
            cartOverlay.classList.remove('open');
            document.body.style.overflow = '';
        }
    }

    if (cartToggle) cartToggle.addEventListener('click', openCartDrawer);
    if (cartClose) cartClose.addEventListener('click', closeCartDrawer);
    if (cartOverlay) cartOverlay.addEventListener('click', closeCartDrawer);

    function renderCartDrawer() {
        const cartItems = document.getElementById('cart-items');
        const cartTotalEl = document.getElementById('cart-total');
        const cartEmpty = document.getElementById('cart-empty');
        const cartFooter = document.querySelector('.cart-drawer-footer');
        if (!cartItems) return;

        const cart = getCart();
        cartItems.innerHTML = '';

        if (cart.length === 0) {
            if (cartEmpty) cartEmpty.style.display = 'block';
            if (cartFooter) cartFooter.style.display = 'none';
            return;
        }

        if (cartEmpty) cartEmpty.style.display = 'none';
        if (cartFooter) cartFooter.style.display = 'block';

        cart.forEach(item => {
            const product = products.find(p => p.id === item.id);
            if (!product) return;

            const el = document.createElement('div');
            el.className = 'cart-item';
            el.innerHTML = `
                <img src="${product.images[0]}" alt="${product.title}" class="cart-item-img">
                <div class="cart-item-info">
                    <h4 class="cart-item-title">${product.title}</h4>
                    <span class="cart-item-ref">${product.ref}</span>
                    <div class="cart-item-bottom">
                        <div class="cart-qty-controls">
                            <button class="qty-btn qty-minus" data-id="${product.id}" aria-label="Réduire">−</button>
                            <span class="qty-value">${item.qty}</span>
                            <button class="qty-btn qty-plus" data-id="${product.id}" aria-label="Augmenter">+</button>
                        </div>
                        <span class="cart-item-price">${product.price * item.qty} €</span>
                    </div>
                </div>
                <button class="cart-item-remove" data-id="${product.id}" aria-label="Supprimer">×</button>
            `;
            cartItems.appendChild(el);
        });

        // Cart total
        if (cartTotalEl) {
            cartTotalEl.textContent = getCartTotal() + ' €';
        }

        // Bind quantity buttons
        cartItems.querySelectorAll('.qty-minus').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = btn.dataset.id;
                const cart = getCart();
                const item = cart.find(i => i.id === id);
                if (item && item.qty > 1) {
                    updateCartQty(id, item.qty - 1);
                } else {
                    removeFromCart(id);
                }
            });
        });

        cartItems.querySelectorAll('.qty-plus').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = btn.dataset.id;
                const cart = getCart();
                const item = cart.find(i => i.id === id);
                if (item) updateCartQty(id, item.qty + 1);
            });
        });

        cartItems.querySelectorAll('.cart-item-remove').forEach(btn => {
            btn.addEventListener('click', () => {
                removeFromCart(btn.dataset.id);
            });
        });
    }

    // Cart checkout button — WhatsApp with full cart summary
    const cartCheckoutBtn = document.getElementById('cart-checkout');
    if (cartCheckoutBtn) {
        cartCheckoutBtn.addEventListener('click', () => {
            const cart = getCart();
            if (cart.length === 0) return;

            let msg = 'Bonjour ! Je souhaite commander les créations suivantes :\n\n';
            cart.forEach(item => {
                const product = products.find(p => p.id === item.id);
                if (product) {
                    msg += `• ${product.title} (Réf: ${product.ref}) × ${item.qty} — ${product.price * item.qty} €\n`;
                }
            });
            msg += `\nTotal : ${getCartTotal()} €\n\nMerci !`;
            window.open(`https://wa.me/33607877159?text=${encodeURIComponent(msg)}`, '_blank');
        });
    }

    // Init badge on load
    updateCartBadge();


    /* =============================================
       RENDER GALLERY — Product cards with Add-to-Cart
       ============================================= */
    const productGrid = document.getElementById('product-grid');
    if (productGrid) {
        products.forEach((product) => {
            if (product.id === 'poupee-bouquet') return;
            
            const card = document.createElement('div');
            card.className = 'card reveal';
            card.innerHTML = `
                <div class="card-image">
                    <img src="${product.images[0]}" alt="${product.title}" loading="lazy">
                </div>
                <div class="card-info">
                    <span class="product-sku">${product.ref}</span>
                    <span class="category">${product.category}</span>
                    <h3 class="card-title">${product.title}</h3>
                    <p class="card-desc">${product.description.substring(0, 90)}…</p>
                    <div class="card-footer">
                        <span class="card-price">${product.priceLabel}</span>
                        <button class="add-to-cart-btn" data-id="${product.id}" aria-label="Ajouter au panier">
                            <span class="atc-icon">+</span> Ajouter
                        </button>
                    </div>
                </div>
            `;

            // Click card image → open modal
            card.querySelector('.card-image').addEventListener('click', () => openModal(product));
            card.querySelector('.card-title').addEventListener('click', () => openModal(product));

            // Add to cart button
            card.querySelector('.add-to-cart-btn').addEventListener('click', (e) => {
                e.stopPropagation();
                addToCart(product.id);
            });

            productGrid.appendChild(card);
        });
    }


    /* =============================================
       OPEN FEATURED FROM VIEWS
       ============================================= */
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


    /* =============================================
       MODAL LOGIC — Product sheet with Add-to-Cart
       ============================================= */
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
        const modalAddCart = document.getElementById('modal-add-cart');
        const detailSpecs = document.getElementById('detail-specs');

        // Set basic info
        modalTitle.textContent = product.title;
        modalCategory.textContent = product.category;
        if (modalSku) modalSku.textContent = `Réf. ${product.ref}`;
        modalDesc.textContent = product.description;
        modalPrice.textContent = product.priceLabel;

        // WhatsApp dynamic link
        if (modalWhatsApp) {
            const waMessage = encodeURIComponent(`Bonjour, je souhaite commander la création "${product.title}" (Réf : ${product.ref}) — ${product.priceLabel}.`);
            modalWhatsApp.href = `https://wa.me/33607877159?text=${waMessage}`;
        }

        // Add to cart button in modal
        if (modalAddCart) {
            modalAddCart.onclick = () => {
                addToCart(product.id);
            };
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
                thumb.innerHTML = `<img src="${imgSrc}" alt="${product.title} vue ${idx + 1}">`;
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
            detailSpecs.innerHTML = '<p style="font-style: italic; opacity: 0.6; font-size: 0.9rem;">Détails supplémentaires à venir…</p>';
        }

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
    
    // Close on overlay click
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    }

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (modal && modal.classList.contains('active')) closeModal();
            if (cartDrawer && cartDrawer.classList.contains('open')) closeCartDrawer();
        }
    });


    /* =============================================
       INTERSECTION OBSERVER — Scroll Animations
       ============================================= */
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
    });

    function initReveal() {
        document.querySelectorAll('.reveal').forEach(el => {
            revealObserver.observe(el);
        });
    }
    initReveal();


    /* =============================================
       MOBILE MENU — CSS-based toggle
       ============================================= */
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const nav = document.querySelector('nav');

    function closeMobileMenu() {
        if (navLinks && menuBtn) {
            navLinks.classList.remove('active');
            menuBtn.classList.remove('open');
        }
    }

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            const isOpen = navLinks.classList.contains('active');
            if (isOpen) {
                closeMobileMenu();
            } else {
                navLinks.classList.add('active');
                menuBtn.classList.add('open');
            }
        });
    }


    /* =============================================
       FORM SUBMISSION — Email + WhatsApp
       ============================================= */
    const sendEmailBtn = document.getElementById('send-email');
    const sendWhatsappBtn = document.getElementById('send-whatsapp');
    
    if (sendEmailBtn) {
        sendEmailBtn.onclick = (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            if (!name || !email || !message) {
                alert("Merci de remplir tous les champs avant l'envoi.");
                return;
            }
            
            const subject = encodeURIComponent(`Demande Paco Créations - ${name}`);
            const body = encodeURIComponent(`Bonjour,\n\nJe souhaite me renseigner sur une création vue sur votre site.\n\nNom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
            
            window.location.href = `mailto:pja60@live.fr?subject=${subject}&body=${body}`;
        };
    }

    if (sendWhatsappBtn) {
        sendWhatsappBtn.onclick = (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value.trim();
            const message = document.getElementById('message').value.trim();
            
            if (!name || !message) {
                alert("Merci de remplir au moins votre nom et votre message pour WhatsApp.");
                return;
            }
            
            const text = encodeURIComponent(`Bonjour, je souhaite me renseigner sur une création vue sur votre site.\n\nJe suis ${name}. Ma demande : ${message}`);
            window.open(`https://wa.me/33607877159?text=${text}`, '_blank');
        };
    }


    /* =============================================
       SMOOTH SCROLLING
       ============================================= */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                
                // Close mobile menu after navigation
                if (window.innerWidth <= 768) {
                    closeMobileMenu();
                }
            }
        });
    });


    /* =============================================
       SCROLL BEHAVIOR — Nav state
       ============================================= */
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        // Nav visual feedback on scroll
        if (currentScrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
        
        // Hide/Show nav on mobile scroll
        if (window.innerWidth <= 768) {
            if (currentScrollY > lastScrollY && currentScrollY > 150) {
                nav.classList.add('nav-hidden');
            } else {
                nav.classList.remove('nav-hidden');
            }
        }
        
        lastScrollY = currentScrollY;
    }, { passive: true });

});
