# React useState Practice App

This project is a learning playground to understand how **React state (`useState`)** works, how it updates, and why React behaves differently from normal JavaScript variables.

It contains multiple experiments (commented in code) showing:
- Why normal variables don’t re-render UI
- How `useState` stores values
- How React re-renders on state change
- Why callback functions are important in `setState`

---

## 🚀 Features

- Counter that updates using React state
- Button to multiply the current value
- Demonstrates re-rendering behavior
- Shows what happens when state is mutated incorrectly

---

## 🧠 Concepts Covered

- `useState` hook
- State persistence across renders
- Re-rendering in React
- Difference between variables and state
- Callback form of `setState`
- Asynchronous state updates

---

## 📌 Key Learning

Normal JavaScript variables do **not** trigger UI updates.  
Only `setState` (from `useState`) tells React to re-render.

This project demonstrates:
```js
const [count, setCount] = React.useState(1);
setCount(prev => prev * 2);
