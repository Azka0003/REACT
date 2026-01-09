# 🧩 React Array State (Refactoring Practice)

This project demonstrates how to **refactor a normal JavaScript array into React state** and update it correctly using the **immutable pattern**.

Each click adds a new favorite item from a predefined list and renders it on the screen.

---

## 🚀 Features

- Uses `useState` to store an array
- Adds items one by one to the array
- Displays items dynamically using `.map()`
- Uses immutability with the spread operator (`...`)

---

## 🧠 Concepts Covered

- React `useState` with arrays
- Immutable state updates
- Using previous state with callbacks
- Rendering lists in JSX
- How React detects state changes

---

## 🔁 How the Update Works

```js
setMyFavoriteThings(prev => [
  ...prev,
  allFavoriteThings[prev.length]
])
