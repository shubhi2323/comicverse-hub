// Cart Page JavaScript

let cart = [];

// Initialize cart page
document.addEventListener('DOMContentLoaded', () => {
    loadCart();
    renderCart();
});

// Load cart from localStorage
function loadCart() {
    cart = JSON.parse(localStorage.getItem('cart')) || [];
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Update cart badge
    if (window.updateCartBadge) {
        window.updateCartBadge();
    }
}

// Render cart
function renderCart() {
    const cartItemsEl = document.getElementById('cartItems');
    const cartSummaryEl = document.getElementById('cartSummary');
    
    if (!cartItemsEl || !cartSummaryEl) return;
    
    if (cart.length === 0) {
        cartItemsEl.innerHTML = `
            <div class="empty-cart">
                <h2>Your cart is empty</h2>
                <p>Start adding some comics to your cart!</p>
                <a href="browse.html" class="btn-primary">Browse Comics</a>
            </div>
        `;
        cartSummaryEl.innerHTML = '';
        return;
    }
    
    // Render cart items
    cartItemsEl.innerHTML = cart
        .map((item, index) => renderCartItem(item, index))
        .join('');
    
    // Render summary
    renderCartSummary();
    
    // Attach event listeners
    attachCartListeners();
}

// Render cart item
function renderCartItem(item, index) {
    const comic = comics.find(c => c.id === item.id);
    const itemTotal = item.price * item.quantity;
    
    return `
        <div class="cart-item" data-index="${index}">
            <img src="${item.image}" alt="${item.title}" class="cart-item-cover">
            <div class="cart-item-info">
                <h3>${item.title}</h3>
                <p>${item.publisher}</p>
                <p class="cart-item-price">$${item.price.toFixed(2)} each</p>
            </div>
            <div class="cart-item-controls">
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="decreaseQuantity(${index})">-</button>
                    <span class="quantity-display">${item.quantity}</span>
                    <button class="quantity-btn" onclick="increaseQuantity(${index})">+</button>
                </div>
                <div style="text-align: center; margin-top: 0.5rem;">
                    <p style="font-size: 1.3rem; font-weight: bold; color: var(--accent-yellow);">
                        $${itemTotal.toFixed(2)}
                    </p>
                </div>
                <button class="btn-remove" onclick="removeItem(${index})">Remove</button>
            </div>
        </div>
    `;
}

// Render cart summary
function renderCartSummary() {
    const cartSummaryEl = document.getElementById('cartSummary');
    if (!cartSummaryEl) return;
    
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.08; // 8% tax
    const total = subtotal + tax;
    
    cartSummaryEl.innerHTML = `
        <div class="cart-summary">
            <div class="summary-row">
                <span>Subtotal:</span>
                <span>$${subtotal.toFixed(2)}</span>
            </div>
            <div class="summary-row">
                <span>Tax (8%):</span>
                <span>$${tax.toFixed(2)}</span>
            </div>
            <div class="summary-row summary-total">
                <span>Total:</span>
                <span>$${total.toFixed(2)}</span>
            </div>
            <button class="btn-checkout" onclick="checkout()">Checkout</button>
        </div>
    `;
}

// Attach event listeners
function attachCartListeners() {
    // Event listeners are attached via onclick in the HTML
    // This function can be used for additional listeners if needed
}

// Increase quantity
function increaseQuantity(index) {
    if (index >= 0 && index < cart.length) {
        cart[index].quantity += 1;
        saveCart();
        renderCart();
    }
}

// Decrease quantity
function decreaseQuantity(index) {
    if (index >= 0 && index < cart.length) {
        if (cart[index].quantity > 1) {
            cart[index].quantity -= 1;
        } else {
            cart.splice(index, 1);
        }
        saveCart();
        renderCart();
    }
}

// Remove item
function removeItem(index) {
    if (index >= 0 && index < cart.length) {
        cart.splice(index, 1);
        saveCart();
        renderCart();
    }
}

// Checkout
function checkout() {
    if (cart.length === 0) {
        if (window.modal && window.modal.show) {
            window.modal.show('Cart Empty', 'Please add items to your cart before checkout.');
        }
        return;
    }
    
    // Show checkout modal
    if (window.modal && window.modal.show) {
        window.modal.show(
            'Thank you for your simulated order!',
            'Your order has been processed. This is a demo website, so no actual transaction occurred.',
            'Continue Shopping'
        );
        
        // Clear cart after checkout
        const closeBtn = document.getElementById('modalClose');
        if (closeBtn) {
            closeBtn.onclick = () => {
                cart = [];
                saveCart();
                renderCart();
                if (window.modal && window.modal.close) {
                    window.modal.close();
                }
                window.location.href = 'browse.html';
            };
        }
    } else {
        // Fallback if modal not available
        alert('Thank you for your simulated order!');
        cart = [];
        saveCart();
        renderCart();
    }
}

// Make functions globally available
window.increaseQuantity = increaseQuantity;
window.decreaseQuantity = decreaseQuantity;
window.removeItem = removeItem;
window.checkout = checkout;

