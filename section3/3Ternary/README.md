# React Toggle Button (useState + Ternary)

This is a small React app that demonstrates how to use **state, ternary operators, and event handling** to toggle UI content.

The app shows a question and a button that switches between **Yes** and **No** when clicked.

---

## 🚀 Features

- Uses `useState` to store a boolean value
- Toggles the state when the button is clicked
- Uses a ternary operator to display text
- Demonstrates conditional rendering in JSX

---

## 🧠 Concepts Used

- React `useState`
- Boolean state toggling
- Ternary operator inside JSX
- Event handling (`onClick`)
- Conditional rendering

---

## 📌 How It Works

```js
const [result, setFunction] = React.useState(true);

function handleClick() {
  setFunction(prev => !prev);
}
