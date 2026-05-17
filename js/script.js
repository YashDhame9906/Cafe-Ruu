// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Initialize AOS animations
AOS.init({
    duration: 1000,
    once: true
});

// Booking form submission
const bookingForm = document.getElementById('bookingForm');

if (bookingForm) {
    bookingForm.addEventListener('submit', function (e) {
        e.preventDefault();

        showToast('Your table has been booked successfully!');

        bookingForm.reset();
    });
}
const dateInput = document.querySelector('input[type="date"]');

if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
}
// Contact form submission
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        showToast('Thank you for contacting us!');

        contactForm.reset();
    });
}
// ===============================
// CART FUNCTIONALITY
// ===============================
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartCount = document.getElementById('cartCount');

// Load cart from LocalStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Update cart counter
function updateCartCount() {
    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}

// Save cart to LocalStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

// Add item to cart
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const item = {
            name: button.dataset.name,
            price: Number(button.dataset.price)
        };

        cart.push(item);
        saveCart();

        showToast(`${item.name} added to cart!`);
    });
});

// Initialize cart count on page load
updateCartCount();



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

// ===============================
// SEARCH + FILTER FUNCTIONALITY
// ===============================

// Select elements
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.filter-btn');
const menuCards = document.querySelectorAll('.menu-card');

// Current selected filter
let currentFilter = 'all';

// Main function to update visible cards
function filterMenu() {
    // Get search text
    const searchValue = searchInput
        ? searchInput.value.toLowerCase().trim()
        : '';

    // Loop through all cards
    menuCards.forEach(card => {
        const category = card.dataset.category;
        const title = card.querySelector('h3').textContent.toLowerCase();

        // Check category match
        const matchesCategory =
            currentFilter === 'all' || category === currentFilter;

        // Check search match
        const matchesSearch = title.includes(searchValue);

        // Show card only if both conditions are true
        if (matchesCategory && matchesSearch) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// ===============================
// SEARCH EVENT
// ===============================
if (searchInput) {
    searchInput.addEventListener('input', filterMenu);
}

// ===============================
// FILTER BUTTON EVENTS
// ===============================
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn =>
            btn.classList.remove('active')
        );

        // Add active class to clicked button
        button.classList.add('active');

        // Save selected filter
        currentFilter = button.dataset.filter;

        // Update menu
        filterMenu();
    });
});

// ===============================
// INITIAL CALL
// ===============================
filterMenu();