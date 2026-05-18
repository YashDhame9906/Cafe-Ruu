// ======================================
// CHECKOUT PAGE FUNCTIONALITY
// ======================================

// Load cart from LocalStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Get required elements
const checkoutTotal = document.getElementById('checkoutTotal');
const checkoutForm = document.getElementById('checkoutForm');

// ======================================
// CALCULATE TOTAL PRICE
// ======================================
function calculateTotal() {
    let total = 0;

    cart.forEach(item => {
        // Supports both:
        // 1. Separate entries for duplicate items
        // 2. Single entry with quantity property
        total += item.price * (item.quantity || 1);
    });

    return total;
}

// ======================================
// DISPLAY TOTAL
// ======================================
function updateCheckoutTotal() {
    const total = calculateTotal();

    if (checkoutTotal) {
        checkoutTotal.textContent = total;
    }
}

// ======================================
// TOAST NOTIFICATION
// ======================================
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');

    if (!toast) return;

    toast.textContent = message;
    toast.className = `toast show ${type}`;

    setTimeout(() => {
        toast.className = 'toast';
    }, 3000);
}

// ======================================
// HANDLE FORM SUBMISSION
// ======================================
if (checkoutForm) {
    checkoutForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Check if cart is empty
        if (cart.length === 0) {
            showToast('Your cart is empty.', 'error');
            return;
        }

        // Collect customer details
        const orderDetails = {
            name: document.getElementById('name')?.value.trim(),
            phone: document.getElementById('phone')?.value.trim(),
            address: document.getElementById('address')?.value.trim(),
            payment: document.getElementById('payment')?.value,
            items: cart,
            total: calculateTotal(),
            orderDate: new Date().toLocaleString()
        };

        // Save latest order (optional)
        localStorage.setItem('lastOrder', JSON.stringify(orderDetails));

        // Show success toast
        showToast('Your order has been placed successfully!');

        // Clear cart
        localStorage.removeItem('cart');
        cart = [];

        // Reset form
        checkoutForm.reset();

        // Redirect to home page after 3 seconds
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 3000);
    });
}

// ======================================
// INITIALIZE PAGE
// ======================================
updateCheckoutTotal();