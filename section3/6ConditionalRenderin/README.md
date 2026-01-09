# 😂 React Jokes App – Conditional Rendering & Toggle

This project demonstrates how to use **React state and conditional rendering** to show and hide content.  
Each joke displays a setup and a button that toggles the punchline.

---

## 🚀 Features

- Shows a joke setup
- Button to **show / hide** the punchline
- Uses boolean state to control visibility
- Demonstrates conditional rendering patterns

---

## 🧠 Concepts Covered

- `useState` with boolean values
- Toggling state using callback functions
- Conditional rendering with:
  - Ternary (`? :`)
  - Logical AND (`&&`)
- Why ternary is safer than `&&` in JSX

---

## 🔁 How the Toggle Works

```js
const [isShown, setIsShown] = React.useState(false)

function toggleShown() {
  setIsShown(prev => !prev)
}
