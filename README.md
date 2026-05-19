#  Cafe-Ruu - Online Restaurant Website

Cafe-Ruu is a modern and responsive restaurant website where users can:

- Browse delicious food items
- Add products to cart
- Update item quantities
- Complete checkout
- Receive order confirmation emails
- View order success page

This project is built using **HTML, CSS, JavaScript**, and **EmailJS**.

---

##  Features

###  Home Page
- Hero section
- About section
- Special offers
- Menu preview
- Book table section
- Contact section

###  Menu Page
- Dedicated menu page
- Add items to cart

###  Shopping Cart
- View cart items
- Increase/decrease quantity
- Remove items
- Automatic total calculation

###  Checkout Page
- Customer details form
- Payment method selection
- Order summary

###  Email Notifications
Using EmailJS:
- Restaurant receives new order email
- Customer receives confirmation email

###  Success Page
- Order placed confirmation
- Redirect to home page

###  Responsive Design
- Mobile-friendly layout
- Works on desktop, tablet, and mobile

---

##  Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- LocalStorage
- EmailJS
- Font Awesome
- Google Fonts

---

## 📁 Project Structure

```text
FoodieHub/
│── index.html
│── menu.html
│── cart.html
│── checkout.html
│── success.html
│
├── css/
│   ├── style.css
│   ├── responsive.css
│   ├── menu.css
│   ├── cart.css
│   └── checkout.css
│
├── js/
│   ├── script.js
│   ├── menu.js
│   ├── cart.js
│   └── checkout.js
│
└── images/
    ├── hero.jpg
    ├── pizza.jpg
    ├── burger.jpg
    ├── pasta.jpg
    └── ...
```

---

## ⚙️ How to Run the Project

1. Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
```

2. Open the project folder in VS Code.

3. Install the **Live Server** extension.

4. Right-click `index.html`.

5. Click **Open with Live Server**.



   (further this site is going to deploy still then use above method)

---

##  EmailJS Setup

Create an account at https://www.emailjs.com and obtain:

- Public Key
- Service ID
- Restaurant Template ID
- Customer Template ID

Add these credentials in:

- `checkout.html`
- `js/checkout.js`

---

##  Pages Overview

| Page | Description |
|------|------|
| `index.html` | Main landing page |
| `menu.html` | Full menu listing |
| `cart.html` | Shopping cart |
| `checkout.html` | Customer checkout form |
| `success.html` | Order confirmation |

---

##  LocalStorage Usage

The project uses browser LocalStorage to store:

- Cart items (`cart`)
- Last order details (`lastOrder`)
- Theme preference (optional)

---

##  Screenshots
<img width="1897" height="1027" alt="image" src="https://github.com/user-attachments/assets/613f98c7-2ca3-4e64-bb73-402bd1a31a04" />



---

##  Future Improvements

- Dark mode
- Payment gateway integration
- Admin dashboard
- Order history
- User authentication

---

## 👨‍💻 Author

**Yash Dhame**

Second Year Computer Engineering Student  
Savitribai Phule Pune University

---

## About Project

This project is for educational and portfolio purposes.
