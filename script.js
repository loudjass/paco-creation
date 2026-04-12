document.addEventListener('DOMContentLoaded', () => {

    /* =============================================
       PRODUCT DATA — Single source of truth
       ============================================= */
    const products = [
        /* ── Coup de Cœur ─────────────────────────── */
        {
            id: 'poupee-bouquet',
            ref: 'PB001',
            title: 'Poupée Bouquet 2-en-1',
            category: 'Coup de Cœur',
            type: 'coup-de-coeur',
            description: 'Une création unique et magique qui se transforme d\'un magnifique bouquet de fleurs éternelles en une adorable poupée de chiffon. C\'est le cadeau idéal pour décorer une chambre et offrir un compagnon de jeu inoubliable.',
            images: [
                'public/images/poupee-bouquet-2-en-1-bouquet.jpg.jpg',
                'public/images/poupee-bouquet-2-en-1-pupee.jpg.jpg'
            ],
            details: {
                matiere: 'Coton',
                hauteur: '80 cm',
                entretien: 'Lavage délicat à la main'
            },
            price: 180,
            priceLabel: '180 €'
        },

        /* ── Sacs ──────────────────────────────────── */
        {
            id: 'sac-rouge-noir',
            ref: 'SAC 1',
            title: 'Sac Rouge & Noir',
            category: 'Sacs à Main',
            type: 'sac',
            description: 'Un sac structuré au contraste audacieux entre rouge vif et noir profond. Ses finitions crochetées et sa bandoulière en font un accessoire de caractère, idéal pour affirmer son style au quotidien.',
            images: [
                'public/images/sac-rouge-noir-01-devant.jpeg',
                'public/images/sac-rouge-noir-02-derriere.jpeg',
                'public/images/sac-rouge-noir-03-dessus-interieur.jpeg'
            ],
            details: {
                matiere: 'Polyester',
                dimensions: 'L 30 cm × H 23 cm',
                couleurs: 'Rouge et noir'
            },
            price: 28,
            priceLabel: '28 €'
        },
        {
            id: 'sac-violet',
            ref: 'SAC 2',
            title: 'Sac Violet',
            category: 'Sacs à Main',
            type: 'sac',
            description: 'Un sac aux teintes lilas et violettes, orné de motifs géométriques élégants. Sa bandoulière rose tressée et ses anses noires lui donnent un charme unique entre tradition et modernité.',
            images: [
                'public/images/sac-violet-01-devant.jpeg',
                'public/images/sac-violet-02-profil.jpeg',
                'public/images/sac-violet-03-devant-2.jpeg'
            ],
            details: {
                matiere: 'Polyester',
                dimensions: 'L 37 cm × H 33 cm',
                couleurs: 'Violet / lilas'
            },
            price: 30,
            priceLabel: '30 €'
        },
        {
            id: 'sac-bleu-rose',
            ref: 'SAC 3',
            title: 'Sac Bleu & Rose',
            category: 'Sacs à Main',
            type: 'sac',
            description: 'Spacieux et lumineux, ce sac bleu azur et rose poudré allie géométrie et douceur. Ses anses en bambou doré et son petit porte-clés peluche en font une pièce pleine de charme.',
            images: [
                'public/images/sac-bleu-rose-01-devant.jpeg',
                'public/images/sac-bleu-rose-02-dos.jpeg',
                'public/images/sac-bleu-rose-03-interieur.jpeg'
            ],
            details: {
                matiere: 'Polyester',
                dimensions: 'L 40 cm × H 35 cm',
                couleurs: 'Bleu et rose'
            },
            price: 30,
            priceLabel: '30 €'
        },
        {
            id: 'sac-orange',
            ref: 'SAC 4',
            title: 'Sac Orange',
            category: 'Sacs à Main',
            type: 'sac',
            description: 'Un sac au coloris chaud et ensoleillé, mêlant orange lumineux et noir. Son anse en bambou et sa structure géométrique en font un accessoire frais et original.',
            images: [
                'public/images/sac-orange-01.jpeg',
                'public/images/sac-orange-02.jpeg',
                'public/images/sac-orange-03.jpeg'
            ],
            details: {
                matiere: 'Polyester',
                dimensions: 'L 34 cm × H 30 cm',
                couleurs: 'Orange'
            },
            price: 30,
            priceLabel: '30 €'
        },
        {
            id: 'sac-rose',
            ref: 'SAC 5',
            title: 'Sac Rose',
            category: 'Sacs à Main',
            type: 'sac',
            description: 'Un sac rose tendre et féminin, parfait pour les journées douces. Sa fermeture soignée et sa taille pratique en font un compagnon idéal pour vos sorties.',
            images: [
                'public/images/sac-rose-01-devant-ferme.jpeg',
                'public/images/sac-rose-02-devant-ouvert.jpeg',
                'public/images/sac-rose-03-dos-ferme.jpeg',
                'public/images/sac-rose-04-dessus-interieur.jpeg'
            ],
            details: {
                matiere: 'Polyester',
                dimensions: 'L 29 cm × H 30 cm',
                couleurs: 'Rose'
            },
            price: 30,
            priceLabel: '30 €'
        },
        {
            id: 'sac-rose-perle',
            ref: 'SAC 6',
            title: 'Sac Rose Perle',
            category: 'Sacs à Main',
            type: 'sac',
            description: 'Un sac rose nacré à la forme originale, plus large en bas qu\'en haut. Sa silhouette douce et sa teinte perlée lui confèrent une élégance subtile et féminine.',
            images: [
                'public/images/sac-rose-perle-01-devant.jpeg',
                'public/images/sac-rose-perle-02-devant-2.jpeg',
                'public/images/sac-rose-perle-03-dessus-interieur.jpeg'
            ],
            details: {
                matiere: 'Polyester',
                dimensions: 'L bas 35 cm, L haut 22 cm × H 33 cm',
                couleurs: 'Rose',
                particularite: 'Plus large en bas qu\'en haut'
            },
            price: 25,
            priceLabel: '25 €'
        },
        {
            id: 'sac-gris-rose',
            ref: 'SAC 7',
            title: 'Sac Gris & Rose',
            category: 'Sacs à Main',
            type: 'sac',
            description: 'Un sac graphique aux rayures gris chiné et rose vif. Sa bandoulière lilas et sa fermeture à rabat en font un accessoire chic et moderne au look contemporain.',
            images: [
                'public/images/sac-gris-rose-01-devant-ferme.jpeg',
                'public/images/sac-gris-rose-02-devant-ouvert.jpeg',
                'public/images/sac-gris-rose-03-dos-ferme.jpeg',
                'public/images/sac-gris-rose-04-dessus-interieur.jpeg'
            ],
            details: {
                matiere: 'Polyester',
                dimensions: 'L 30 cm × H 20 cm',
                couleurs: 'Gris et rose'
            },
            price: 20,
            priceLabel: '20 €'
        },
        {
            id: 'sac-bleu',
            ref: 'SAC 8',
            title: 'Petit Sac Bleu',
            category: 'Sacs à Main',
            type: 'sac',
            description: 'Un petit sac bleu compact et pratique, parfait pour l\'essentiel. Son format malin et ses finitions soignées en font un accessoire stylé pour les balades légères.',
            images: [
                'public/images/sac-bleu-01-devant-ferme.jpeg',
                'public/images/sac-bleu-02-devant-ouvert.jpeg',
                'public/images/sac-bleu-03-dos-ferme.jpeg',
                'public/images/sac-bleu-04-dessus-interieur.jpeg'
            ],
            details: {
                matiere: 'Polyester',
                dimensions: 'L 26 cm × H 20 cm',
                couleurs: 'Bleu',
                particularite: 'Petit format'
            },
            price: 20,
            priceLabel: '20 €'
        },
        {
            id: 'sac-rouge-bleu-jaune',
            ref: 'SAC 9',
            title: 'Sac Rouge, Bleu & Jaune',
            category: 'Sacs à Main',
            type: 'sac',
            description: 'Un sac haut en couleurs, mêlant rouge, bleu et jaune dans un patchwork joyeux. Sa forme évasée et sa construction robuste en font un accessoire unique et plein de vie.',
            images: [
                'public/images/sac-rouge-bleu-jaune-01-devant.jpeg',
                'public/images/sac-rouge-bleu-jaune-02-dos.jpeg',
                'public/images/sac-rouge-bleu-jaune-03-dessus-interieur.jpeg',
                'public/images/sac-rouge-bleu-jaune-04-vue-trois-quarts.jpeg'
            ],
            details: {
                matiere: 'Polyester',
                dimensions: 'L bas 30 cm, L haut 25 cm × H 30 cm',
                couleurs: 'Rouge, bleu et jaune',
                particularite: 'Plus large en bas qu\'en haut'
            },
            price: 17,
            priceLabel: '17 €'
        },
        {
            id: 'sac-multicolore',
            ref: 'SAC 10',
            title: 'Petit Sac Multicolore',
            category: 'Sacs à Main',
            type: 'sac',
            description: 'Un petit sac multicolore plein de peps, tissé en fil T-shirt. Ses couleurs vives et son petit format en font un accessoire de sortie amusant et original.',
            images: [
                'public/images/sac-multicolore-01-devant.jpeg',
                'public/images/sac-multicolore-02-dos.jpeg',
                'public/images/sac-multicolore-03-dessus-interieur.jpeg'
            ],
            details: {
                matiere: 'Fil T-shirt',
                dimensions: 'L 28 cm × H 15 cm',
                couleurs: 'Multicolore (rose, bleu, blanc, noir, beige)',
                particularite: 'Petit format'
            },
            price: 10,
            priceLabel: '10 €'
        },
        {
            id: 'sac-octogonal-multicolore',
            ref: 'SAC 11',
            title: 'Sac Octogonal Multicolore',
            category: 'Sacs à Main',
            type: 'sac',
            description: 'Un sac à la forme octogonale originale, tissé en fil T-shirt multicolore. Sa silhouette géométrique unique et ses nuances harmonieuses en font une pièce de caractère.',
            images: [
                'public/images/sac-octogonal-multicolore-01-devant.jpeg',
                'public/images/sac-octogonal-multicolore-02-dos.jpeg',
                'public/images/sac-octogonal-multicolore-03-dessus-interieur.jpeg',
                'public/images/sac-octogonal-multicolore-04-vue-trois-quarts.jpeg'
            ],
            details: {
                matiere: 'Fil T-shirt',
                dimensions: 'L 26 cm × H 30 cm',
                couleurs: 'Noir, blanc, marron, beige, bleu clair, gris, rose',
                particularite: 'Forme octogonale type panneau stop'
            },
            price: 15,
            priceLabel: '15 €'
        },
        {
            id: 'sac-bleu-rond',
            ref: 'SAC 12',
            title: 'Sac Rond Bleu',
            category: 'Sacs à Main',
            type: 'sac',
            description: 'Un sac rond bleu bicolore agrémenté d\'un petit pompon, tissé en fil T-shirt. Sa forme arrondie et ses teintes bleutées en font un accessoire doux et élégant.',
            images: [
                'public/images/sac-bleu-rond-01-devant.jpeg',
                'public/images/sac-bleu-rond-02-dos.jpeg',
                'public/images/sac-bleu-rond-03-dessus-interieur.jpeg'
            ],
            details: {
                matiere: 'Fil T-shirt',
                dimensions: 'L 25 cm × H 30 cm',
                couleurs: 'Bleu foncé et bleu clair',
                particularite: 'Forme ronde, petit pompon'
            },
            price: 15,
            priceLabel: '15 €'
        },
        {
            id: 'sac-blanc-bleu-gris',
            ref: 'SAC 13',
            title: 'Sac Blanc, Bleu & Gris',
            category: 'Sacs à Main',
            type: 'sac',
            description: 'Un sac aux teintes douces blanc, bleu et gris, tissé en fil T-shirt. Spacieux et léger, il convient parfaitement aux journées décontractées.',
            images: [
                'public/images/sac-blanc-bleu-gris-01-devant.jpeg',
                'public/images/sac-blanc-bleu-gris-02-dos.jpeg',
                'public/images/sac-blanc-bleu-gris-03-dessus-interieur.jpeg'
            ],
            details: {
                matiere: 'Fil T-shirt',
                dimensions: 'L 45 cm × H 24 cm',
                couleurs: 'Blanc, bleu, gris'
            },
            price: 12,
            priceLabel: '12 €'
        },
        {
            id: 'sac-beige-ecru',
            ref: 'SAC 14',
            title: 'Sac Beige Écru',
            category: 'Sacs à Main',
            type: 'sac',
            description: 'Un grand sac beige écru au style naturel et raffiné. Ses anses en bois et sa chaîne tressée lui donnent une touche bohème chic, accompagné de ses breloques décoratives.',
            images: [
                'public/images/sac-beige-ecru-01-devant.jpeg',
                'public/images/sac-beige-ecru-02-dos.jpeg',
                'public/images/sac-beige-ecru-03-dessus-interieur.jpeg'
            ],
            details: {
                matiere: 'Polyester',
                dimensions: 'L 45 cm × H 35 cm',
                couleurs: 'Beige / écru'
            },
            price: 35,
            priceLabel: '35 €'
        },

        /* ── Doudous & Peluches ────────────────────── */
        {
            id: 'doudou-lapin-bleu',
            ref: 'DOUDOU 1',
            title: 'Doudou Lapin Bleu',
            category: 'Douceurs & Peluches',
            type: 'doudou',
            description: 'Un adorable lapin bleu royal et blanc, crocheté en fil de velours. Avec ses grandes oreilles tombantes et ses yeux expressifs, il deviendra vite le meilleur ami des tout-petits.',
            images: [
                'public/images/doudou-lapin-bleu-02-assis-face.jpeg',
                'public/images/doudou-lapin-bleu-01-assis-profil.jpeg',
                'public/images/doudou-lapin-bleu-03-allonge-face.jpeg'
            ],
            details: {
                matiere: 'Fil de velours',
                hauteur: '32 cm',
                couleurs: 'Bleu foncé et blanc'
            },
            price: 30,
            priceLabel: '30 €'
        },
        {
            id: 'doudou-lapin-rose',
            ref: 'DOUDOU 2',
            title: 'Doudou Lapin Rose',
            category: 'Douceurs & Peluches',
            type: 'doudou',
            description: 'Un doudou plat en forme de lapin, tout en douceur rose, blanc et noir. Idéal pour accompagner les premiers câlins de bébé avec sa texture coton toute douce.',
            images: [
                'public/images/doudou-lapin-rose-01-plie.jpeg',
                'public/images/doudou-lapin-rose-02-deplie.jpeg'
            ],
            details: {
                matiere: 'Coton',
                couleurs: 'Rose, blanc, noir'
            },
            price: 25,
            priceLabel: '25 €'
        },
        {
            id: 'doudou-etoile-bleue',
            ref: 'DOUDOU 3',
            title: 'Doudou Étoile Bleue',
            category: 'Douceurs & Peluches',
            type: 'doudou',
            description: 'Un doudou plat en forme d\'étoile, mêlant bleu et blanc dans un esprit tendre et apaisant. Son format plat est parfait pour les petites mains.',
            images: [
                'public/images/doudou-etoile-bleue-01-plie.jpeg',
                'public/images/doudou-etoile-bleue-02-deplie.jpeg'
            ],
            details: {
                matiere: 'Coton',
                couleurs: 'Bleu, bleu clair, blanc'
            },
            price: 25,
            priceLabel: '25 €'
        },
        {
            id: 'peluche-tortue-rose',
            ref: 'DOUDOU 4',
            title: 'Peluche Tortue Rose',
            category: 'Douceurs & Peluches',
            type: 'doudou',
            description: 'Une petite tortue rose pâle et écru, crochetée en fil chenille ultra doux. Sa carapace toute ronde et sa bouille attendrissante en font un compagnon irrésistible.',
            images: [
                'public/images/peluche-tortue-rose-02-dos.jpeg',
                'public/images/peluche-tortue-rose-01-face.jpeg'
            ],
            details: {
                matiere: 'Fil chenille',
                hauteur: '30 cm',
                couleurs: 'Rose pâle et beige / écru'
            },
            price: 25,
            priceLabel: '25 €'
        },
        {
            id: 'peluche-pieuvre-rose',
            ref: 'DOUDOU 5',
            title: 'Peluche Pieuvre Rose',
            category: 'Douceurs & Peluches',
            type: 'doudou',
            description: 'Une adorable petite pieuvre rose pâle crochetée en fil chenille. Compacte et toute douce, elle est parfaite pour les mains de bébé et les câlins de dernière minute.',
            images: [
                'public/images/peluche-pieuvre-rose-01-face.jpeg',
                'public/images/peluche-pieuvre-rose-02-dos.jpeg'
            ],
            details: {
                matiere: 'Fil chenille',
                hauteur: '10 cm',
                couleurs: 'Rose pâle'
            },
            price: 25,
            priceLabel: '25 €'
        },
        {
            id: 'doudou-lapin-marron',
            ref: 'DOUDOU 6',
            title: 'Doudou Lapin Marron',
            category: 'Douceurs & Peluches',
            type: 'doudou',
            description: 'Un petit doudou plat en forme de lapin, tout en coton marron naturel. Simple et doux, il est le cadeau de naissance idéal.',
            images: [
                'public/images/doudou-lapin-marron-01-face.jpeg',
                'public/images/doudou-lapin-marron-02-dos.jpeg'
            ],
            details: {
                matiere: 'Coton',
                couleurs: 'Marron'
            },
            price: 6,
            priceLabel: '6 €'
        },
        {
            id: 'doudou-lapin-vert',
            ref: 'DOUDOU 7',
            title: 'Doudou Lapin Vert',
            category: 'Douceurs & Peluches',
            type: 'doudou',
            description: 'Un doudou plat en forme de lapin aux tons naturels de vert sauge et marron. Sa douceur et ses teintes apaisantes en font un compagnon parfait pour les siestes.',
            images: [
                'public/images/doudou-lapin-vert-01-face.jpeg',
                'public/images/doudou-lapin-vert-02-dos.jpeg'
            ],
            details: {
                matiere: 'Coton',
                couleurs: 'Vert sauge et marron'
            },
            price: 6,
            priceLabel: '6 €'
        },
        {
            id: 'peluche-nounours-marron',
            ref: 'DOUDOU 8',
            title: 'Peluche Nounours Marron',
            category: 'Douceurs & Peluches',
            type: 'doudou',
            description: 'Un grand nounours marron et blanc crocheté en coton, portant une adorable écharpe blanche. Sa taille généreuse et son expression tendre en font le roi des câlins.',
            images: [
                'public/images/peluche-nounours-marron-01-face.jpeg',
                'public/images/peluche-nounours-marron-02-dos.jpeg'
            ],
            details: {
                matiere: 'Coton',
                hauteur: '60 cm',
                couleurs: 'Marron et blanc / écru',
                particularite: 'Écharpe blanche'
            },
            price: 18,
            priceLabel: '18 €'
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

            let msg = 'Bonjour, je souhaite commander les créations suivantes :\n\n';
            const bags = [];
            const doudous = [];

            cart.forEach(item => {
                const product = products.find(p => p.id === item.id);
                if (product) {
                    const line = `- ${product.title} — ${product.price * item.qty} €${item.qty > 1 ? ` (x${item.qty})` : ''}`;
                    if (product.type === 'sac') {
                        bags.push(line);
                    } else if (product.type === 'doudou' || product.type === 'coup-de-coeur') {
                        doudous.push(line);
                    } else {
                        // fallback pour tout autre type
                        doudous.push(line);
                    }
                }
            });

            if (bags.length > 0) {
                msg += '*[SACS / SACS À MAIN]*\n' + bags.join('\n') + '\n\n';
            }
            if (doudous.length > 0) {
                msg += '*[DOUDOUS / PELUCHES]*\n' + doudous.join('\n') + '\n\n';
            }

            msg += `Total : ${getCartTotal()} €\n\nMerci.`;
            window.open(`https://wa.me/33607877159?text=${encodeURIComponent(msg)}`, '_blank');
            saveCart([]);
            closeCartDrawer();
        });
    }

    // Init badge on load
    updateCartBadge();


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

    /* =============================================
       RENDER GALLERY — Product cards with Add-to-Cart
       ============================================= */
    const productGrid = document.getElementById('product-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const sortOptions = document.querySelectorAll('.sort-option');

    function renderGallery(filter = 'all', sort = 'default') {
        if (!productGrid) return;
        productGrid.innerHTML = '';
        
        let filtered = products.filter(p => p.id !== 'poupee-bouquet');
        
        if (filter !== 'all') {
            filtered = filtered.filter(p => p.type === filter);
        }

        if (sort === 'price-asc') {
            filtered.sort((a, b) => a.price - b.price);
        } else if (sort === 'price-desc') {
            filtered.sort((a, b) => b.price - a.price);
        } else if (sort === 'default') {
            filtered.sort((a, b) => products.indexOf(a) - products.indexOf(b));
        }

        let currentType = '';

        filtered.forEach(product => {
            // Inject visual divider if displaying all and in default order
            if (filter === 'all' && sort === 'default') {
                if (currentType !== product.type) {
                    currentType = product.type;
                    const divider = document.createElement('div');
                    divider.className = 'grid-divider reveal';
                    divider.innerHTML = `
                        <span class="divider-line"></span>
                        <h3 class="divider-title">${product.type === 'sac' ? 'Sacs à main' : 'Douceurs & Peluches'}</h3>
                        <span class="divider-line"></span>
                    `;
                    productGrid.appendChild(divider);
                }
            }

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

            card.querySelector('.card-image').addEventListener('click', () => openModal(product));
            card.querySelector('.card-title').addEventListener('click', () => openModal(product));
            card.querySelector('.add-to-cart-btn').addEventListener('click', (e) => {
                e.stopPropagation();
                addToCart(product.id);
            });

            productGrid.appendChild(card);
        });
        
        // Re-initialize intersection observers for new items
        initReveal();
    }

    if (productGrid) {
        renderGallery();

        if (filterBtns) {
            filterBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    filterBtns.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    const activeSort = document.querySelector('.sort-option.active')?.dataset.sort || 'default';
                    renderGallery(btn.dataset.filter, activeSort);
                });
            });
        }

        if (sortOptions) {
            sortOptions.forEach(opt => {
                opt.addEventListener('click', () => {
                    sortOptions.forEach(o => o.classList.remove('active'));
                    opt.classList.add('active');
                    const activeFilter = document.querySelector('.filter-btn.active')?.dataset.filter || 'all';
                    renderGallery(activeFilter, opt.dataset.sort);
                });
            });
        }
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
            hauteur: 'Hauteur',
            couleurs: 'Couleurs',
            particularite: 'Particularité',
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
