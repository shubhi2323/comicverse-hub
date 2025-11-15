// Main JavaScript - Carousel, Navigation, Modal System

// Update cart badge on page load
function updateCartBadge() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const badge = document.getElementById('cartBadge');
    if (badge) {
        badge.textContent = totalItems;
        badge.style.display = totalItems > 0 ? 'flex' : 'none';
    }
}

// Make function globally available
window.updateCartBadge = updateCartBadge;

// Initialize cart badge
updateCartBadge();

// Navbar scroll effect
const navbar = document.getElementById('navbar');
if (navbar) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Carousel functionality
const carousel = {
    currentSlide: 0,
    slides: [],
    controls: null,
    
    init() {
        const carouselEl = document.getElementById('heroCarousel');
        if (!carouselEl) return;
        
        this.slides = carouselEl.querySelectorAll('.carousel-slide');
        
        // Skip carousel initialization if no slides (static hero collage)
        if (this.slides.length === 0) return;
        
        this.controls = document.getElementById('carouselControls');
        
        // Create dots
        if (this.controls) {
            this.slides.forEach((_, index) => {
                const dot = document.createElement('div');
                dot.className = `carousel-dot ${index === 0 ? 'active' : ''}`;
                dot.addEventListener('click', () => this.goToSlide(index));
                this.controls.appendChild(dot);
            });
        }
        
        // Navigation buttons
        const prevBtn = document.getElementById('carouselPrev');
        const nextBtn = document.getElementById('carouselNext');
        
        if (prevBtn) prevBtn.addEventListener('click', () => this.prevSlide());
        if (nextBtn) nextBtn.addEventListener('click', () => this.nextSlide());
        
        // Auto-play (disabled for static hero)
        this.startAutoPlay();
    },
    
    goToSlide(index) {
        this.slides[this.currentSlide].classList.remove('active');
        this.currentSlide = index;
        this.slides[this.currentSlide].classList.add('active');
        
        // Update dots
        if (this.controls) {
            const dots = this.controls.querySelectorAll('.carousel-dot');
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
        }
    },
    
    nextSlide() {
        const next = (this.currentSlide + 1) % this.slides.length;
        this.goToSlide(next);
    },
    
    prevSlide() {
        const prev = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.goToSlide(prev);
    },
    
    startAutoPlay() {
        // Auto-play disabled for static hero collage
        // setInterval(() => {
        //     this.nextSlide();
        // }, 5000);
    }
};

// Modal system
const modal = {
    element: null,
    title: null,
    message: null,
    closeBtn: null,
    
    init() {
        this.element = document.getElementById('modal');
        this.title = document.getElementById('modalTitle');
        this.message = document.getElementById('modalMessage');
        this.closeBtn = document.getElementById('modalClose');
        
        if (this.closeBtn) {
            this.closeBtn.addEventListener('click', () => this.close());
        }
        
        if (this.element) {
            this.element.addEventListener('click', (e) => {
                if (e.target === this.element) {
                    this.close();
                }
            });
        }
    },
    
    show(title, message, closeText = 'Close') {
        if (this.title) this.title.textContent = title;
        if (this.message) this.message.textContent = message;
        if (this.closeBtn) this.closeBtn.textContent = closeText;
        if (this.element) this.element.classList.add('active');
    },
    
    close() {
        if (this.element) this.element.classList.remove('active');
    }
};

// Make modal globally available
window.modal = modal;

// Render comic card
function renderComicCard(comic) {
    return `
        <div class="comic-card" onclick="window.location.href='comic-detail.html?id=${comic.id}'">
            <img src="${comic.image}" alt="${comic.title}" class="comic-cover">
            <div class="comic-info">
                <h3 class="comic-title">${comic.title}</h3>
                <p class="comic-publisher">${comic.publisher}</p>
                <p class="comic-price">$${comic.price.toFixed(2)}</p>
            </div>
        </div>
    `;
}

// Footer button handlers
function initFooterButtons() {
    const hero = document.getElementById('heroCarousel');
    const newReleases = document.getElementById('newReleases');
    
    // Home button - scroll to hero carousel (or top of page)
    document.getElementById('footerHome')?.addEventListener('click', () => {
        if (hero) {
            hero.scrollIntoView({ behavior: "smooth" });
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    });
    
    // Star button - scroll to new releases (or top of page)
    document.getElementById('footerNew')?.addEventListener('click', () => {
        if (newReleases) {
            newReleases.scrollIntoView({ behavior: "smooth" });
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    });
    
    // Grid button - navigate to browse page
    document.getElementById('footerBrowse')?.addEventListener('click', () => {
        if (window.location.pathname.includes('browse.html')) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            window.location.href = "browse.html";
        }
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    carousel.init();
    modal.init();
    initFooterButtons();
    
    // Load featured comics on index page
    if (document.getElementById('newReleases')) {
        loadFeaturedComics();
    }
});

// Load featured comics for index page
function loadFeaturedComics() {
    const newReleasesEl = document.getElementById('newReleases');
    const popularSeriesEl = document.getElementById('popularSeries');
    
    if (!newReleasesEl || !popularSeriesEl) return;
    
    // Sort by release date (newest first)
    const sortedByDate = [...comics].sort((a, b) => 
        new Date(b.releaseDate) - new Date(a.releaseDate)
    );
    
    // New Releases (4 most recent)
    newReleasesEl.innerHTML = sortedByDate
        .slice(0, 4)
        .map(comic => renderComicCard(comic))
        .join('');
    
    // Popular Series (4 random or by price)
    const popular = [...comics]
        .sort(() => Math.random() - 0.5)
        .slice(0, 4);
    
    popularSeriesEl.innerHTML = popular
        .map(comic => renderComicCard(comic))
        .join('');
}

