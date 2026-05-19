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

    if (!toast) {
        alert(message);
        return;
    }

    toast.textContent = message;
    toast.className = `toast show ${type}`;

    setTimeout(() => {
        toast.className = 'toast';
    }, 3000);
}

// ======================================
// FORMAT ORDER ITEMS FOR EMAIL
// ======================================
function formatOrderItems() {
    let itemsText = '';

    cart.forEach(item => {
        const qty = item.quantity || 1;
        const lineTotal = item.price * qty;

        itemsText += `${item.name} x${qty} - ₹${lineTotal}\n`;
    });

    return itemsText;
}

// ======================================
// SEND EMAILS USING EMAILJS
// ======================================
async function sendOrderEmails(orderDetails) {
    const templateParams = {
        customer_name: orderDetails.name,
        customer_email: orderDetails.email,
        customer_phone: orderDetails.phone,
        customer_address: orderDetails.address,
        payment_method: orderDetails.payment,
        order_items: formatOrderItems(),
        total_amount: `₹${orderDetails.total}`,
        order_date: orderDetails.orderDate
    };

    // 1. Send email to restaurant
    await emailjs.send(
        'service_vvkthj6',
        'template_aa8l8id',
        templateParams
    );

    // 2. Send confirmation email to customer
    await emailjs.send(
        'service_vvkthj6',
        'template_9nlrgnc',
        templateParams
    );
}

// ======================================
// HANDLE FORM SUBMISSION
// ======================================
if (checkoutForm) {
    checkoutForm.addEventListener('submit', async function (e) {
        e.preventDefault();

        // Check if cart is empty
        if (cart.length === 0) {
            showToast('Your cart is empty.', 'error');
            return;
        }

        try {
            // Collect customer details
            const orderDetails = {
                name: document.getElementById('name')?.value.trim(),
                email: document.getElementById('email')?.value.trim(),
                phone: document.getElementById('phone')?.value.trim(),
                address: document.getElementById('address')?.value.trim(),
                payment: document.getElementById('payment')?.value,
                items: cart,
                total: calculateTotal(),
                orderDate: new Date().toLocaleString()
            };

            // Save latest order (optional)
            localStorage.setItem('lastOrder', JSON.stringify(orderDetails));

            // Send emails
            await sendOrderEmails(orderDetails);

            // Show success toast
            showToast('Your order has been placed successfully!');

            // Clear cart
            localStorage.removeItem('cart');
            cart = [];

            // Reset form
            checkoutForm.reset();

            // Redirect to home page after 3 seconds
            setTimeout(() => {
                window.location.href = 'success.html';
            }, 1500);

        } catch (error) {
            console.error('EmailJS Error:', error);
            showToast('Failed to send email. Please try again.', 'error');
        }
    });
}

// ======================================
// INITIALIZE PAGE
// ======================================
updateCheckoutTotal();