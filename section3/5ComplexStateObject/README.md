# ⭐ React Contact Card – Favorite Toggle

This project is a small React app that displays a **contact profile card** with a **favorite (star) toggle**.  
Clicking the star updates the state and switches between a filled and empty star.

---

## 🚀 Features

- Displays a user profile (name, phone, email, avatar)
- Favorite button with toggle behavior ⭐
- Star icon switches based on state
- Accessible using ARIA attributes
- Uses object state with `useState`

---

## 🧠 Concepts Covered

- React `useState` with objects
- Immutable state updates using spread (`...`)
- Conditional rendering
- Event handling (`onClick`)
- Accessibility (`aria-label`, `aria-pressed`)

---

## 🔁 How State Update Works

```js
setContact(prevContact => ({
  ...prevContact,
  isFavorite: !prevContact.isFavorite
}))
