# 🛒 Shopping Cart Application

A fully functional **shopping cart web application** built using **React**, **Vite**, **Context API**, **React Router**, and **Tailwind CSS**.  
This project demonstrates real-world React concepts such as global state management, routing, and persistent cart data.

---

## 🚀 Tech Stack

- **React**
- **Vite**
- **React Router DOM**
- **Context API**
- **Tailwind CSS (v4)**
- **DummyJSON API**
- **LocalStorage**

---

## ✨ Features

- Product listing from API
- Product details page
- Add items to cart
- Increase / decrease item quantity
- Remove items from cart
- Cart persistence using localStorage
- Global state management with Context API
- Client-side routing with React Router
- Responsive UI using Tailwind CSS

---

## 📂 Project Structure

src/
├── components/
│ ├── productTile/
│ └── cartTile/
├── context/
├── pages/
│ ├── productList/
│ ├── productDetails/
│ └── cartList/
├── App.jsx
├── main.jsx
└── index.css



---

## 🌐 Routes

**/products → Product List**
**/product-details/:id → Product Details**
**/cart → Cart Page**

---

## 📌 Notes

- Tailwind CSS v4 is used
- No tailwind.config.js required
- Styling is done using Tailwind utility classes
- DummyJSON API is used for mock product data


## ⚙️ Installation & Setup
```bash
npm install
npm run dev
