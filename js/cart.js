// ===============================
// CART PAGE FUNCTIONALITY
// File: js/cart.js
// ===============================

// Load cart data from LocalStorage.
// If there is no cart saved yet, use an empty array.
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Select required HTML elements
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const clearCartBtn = document.getElementById('clearCart');

// ===============================
// DISPLAY CART ITEMS
// ===============================
function renderCart() {
    // Stop if cart container does not exist
    if (!cartItems) return;

    // Clear previous content
    cartItems.innerHTML = '';

    // If cart is empty
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <h3>Your cart is empty.</h3>
                <p>Add some delicious dishes from the menu.</p>
            </div>
        `;

        if (cartTotal) {
            cartTotal.textContent = '0';
        }

        return;
    }

    let total = 0;

    // Loop through all cart items
    cart.forEach((item, index) => {
        total += item.price;

        cartItems.innerHTML += `
            <div class="cart-item">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>₹${item.price}</p>
                </div>

                <button
                    class="remove-btn"
                    onclick="removeItem(${index})">
                    Remove
                </button>
            </div>
        `;
    });

    // Show total price
    if (cartTotal) {
        cartTotal.textContent = total;
    }
}

// ===============================
// REMOVE SINGLE ITEM
// ===============================
function removeItem(index) {
    // Remove one item from the cart array
    cart.splice(index, 1);

    // Save updated cart to LocalStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Re-render cart
    renderCart();
}

// ===============================
// CLEAR ENTIRE CART
// ===============================
if (clearCartBtn) {
    clearCartBtn.addEventListener('click', () => {
        const confirmClear = confirm(
            'Are you sure you want to clear the cart?'
        );

        if (confirmClear) {
            // Empty cart array
            cart = [];

            // Remove cart from LocalStorage
            localStorage.removeItem('cart');

            // Re-render cart
            renderCart();
        }
    });
}

// ===============================
// INITIAL PAGE LOAD
// ===============================
renderCart();

// ===============================
// TOAST NOTIFICATION FUNCTION
// ===============================
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');

    if (!toast) return;

    toast.textContent = message;
    toast.className = `toast show ${type}`;

    setTimeout(() => {
        toast.className = 'toast';
    }, 3000);
}