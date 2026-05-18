// Get elements
const bookingForm = document.getElementById('bookingForm');
const dateInput = document.getElementById('date');

// Set minimum date to today
if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
}

// Toast notification function
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');

    if (!toast) return;

    toast.textContent = message;
    toast.className = `toast show ${type}`;

    setTimeout(() => {
        toast.className = 'toast';
    }, 3000);
}

// Handle form submit
if (bookingForm) {
    bookingForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const bookingData = {
            name: document.getElementById('name').value.trim(),
            phone: document.getElementById('phone').value.trim(),
            date: document.getElementById('date').value,
            time: document.getElementById('time').value,
            guests: document.getElementById('guests').value,
            bookedAt: new Date().toLocaleString()
        };

        // Save booking details
        localStorage.setItem('lastBooking', JSON.stringify(bookingData));

        // Show success message
        showToast('Table booked successfully!');

        // Reset form
        bookingForm.reset();

        // Redirect to home page after 3 seconds
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 3000);
    });
}