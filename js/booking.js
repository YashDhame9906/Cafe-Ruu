const bookingForm = document.getElementById("bookingForm");
const toast = document.getElementById("toast");

bookingForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const guests = document.getElementById("guests").value;

    // Cafe WhatsApp Number
    // Replace with your WhatsApp number
    const cafeNumber = "9195xxxxxx78";

    // WhatsApp Message
    const message = ` *New Table Booking* %0A%0A
    Name: ${name}%0A
    Phone: ${phone}%0A
    Date: ${date}%0A
    Time: ${time}%0A
    Guests: ${guests}`;

    // WhatsApp URL
    const whatsappURL = `https://wa.me/${cafeNumber}?text=${message}`;

    // Open WhatsApp
    window.open(whatsappURL, "_blank");

    // Toast Message
    showToast("Booking request sent successfully!");

    // Reset Form
    bookingForm.reset();
});

// Toast Function
function showToast(message) {
    toast.innerText = message;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}
