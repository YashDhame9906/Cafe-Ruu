// Load cart from LocalStorage
const cart = JSON.parse(localStorage.getItem('cart')) || [];

const checkoutTotal = document.getElementById('checkoutTotal');
const checkoutForm = document.getElementById('checkoutForm');

// Calculate total price
let total = 0;
cart.forEach(item => {
    total += item.price;
});

// Display total
if (checkoutTotal) {
    checkoutTotal.textContent = total;
}

// Handle form submission
if (checkoutForm) {
    checkoutForm.addEventListener('submit', function (e) {
        e.preventDefault();

        if (cart.length === 0) {
            showToast('Your cart is empty.', 'error');
            return;
        }

        showToast('Your order has been placed successfully!');

        // Clear cart after successful order
        localStorage.removeItem('cart');

        // Reset form
        checkoutForm.reset();

        // Redirect to homepage
        window.location.href = 'index.html';
    });
}

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