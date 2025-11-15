// Detail Page JavaScript

let currentComic = null;

// Initialize detail page
document.addEventListener('DOMContentLoaded', () => {
    // Get comic ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const comicId = urlParams.get('id');
    
    if (!comicId) {
        showError('No comic ID provided');
        return;
    }
    
    // Find comic
    currentComic = comics.find(c => c.id === comicId);
    
    if (!currentComic) {
        showError('Comic not found');
        return;
    }
    
    renderComicDetail();
    
    // Add to cart button
    const addToCartBtn = document.getElementById('addToCartBtn');
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', addToCart);
    }
});

// Render comic detail
function renderComicDetail() {
    if (!currentComic) return;
    
    document.getElementById('detailCover').src = currentComic.image;
    document.getElementById('detailCover').alt = currentComic.title;
    document.getElementById('detailTitle').textContent = currentComic.title;
    document.getElementById('detailPublisher').textContent = currentComic.publisher;
    document.getElementById('detailGenre').textContent = currentComic.genre;
    document.getElementById('detailDate').textContent = formatDate(currentComic.releaseDate);
    document.getElementById('detailCreators').textContent = currentComic.creators || 'N/A';
    document.getElementById('detailPrice').textContent = `$${currentComic.price.toFixed(2)}`;
    document.getElementById('detailDescription').textContent = currentComic.description;
    
    // Update page title
    document.title = `${currentComic.title} - ComicVerse Hub`;
}

// Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
}

// Add to cart
function addToCart() {
    if (!currentComic) return;
    
    // Get existing cart
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Check if comic already in cart
    const existingItem = cart.find(item => item.id === currentComic.id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: currentComic.id,
            title: currentComic.title,
            price: currentComic.price,
            image: currentComic.image,
            publisher: currentComic.publisher,
            quantity: 1
        });
    }
    
    // Save to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Update cart badge
    if (window.updateCartBadge) {
        window.updateCartBadge();
    }
    
    // Show success modal
    if (window.modal && window.modal.show) {
        window.modal.show(
            'Comic Added to Cart!',
            `${currentComic.title} has been added to your cart.`,
            'Continue Shopping'
        );
    }
}

// Show error
function showError(message) {
    const detailContent = document.getElementById('detailContent');
    if (detailContent) {
        detailContent.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
                <h2 style="color: var(--primary-red); margin-bottom: 1rem;">Error</h2>
                <p style="color: var(--text-muted);">${message}</p>
                <a href="browse.html" class="btn-primary" style="display: inline-block; margin-top: 2rem;">Back to Browse</a>
            </div>
        `;
    }
}

