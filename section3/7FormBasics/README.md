# 📝 React Signup Form – FormData & Controlled Submission

This project demonstrates how to handle **HTML forms in React** using the modern **FormData API** and how to collect **all form values** in a clean and scalable way.

It includes inputs, radio buttons, checkboxes, a textarea, and a select dropdown.

---

## 🚀 Features

- Collects all form data on submit
- Supports:
  - Text inputs
  - Passwords
  - Textarea
  - Radio buttons
  - Multiple checkboxes
  - Dropdown select
- Uses `FormData`
- Converts form data into a JavaScript object
- Handles multiple checkbox values correctly

---

## 🧠 Concepts Covered

- HTML forms in React
- `FormData` API
- `Object.fromEntries()`
- Handling multiple checkboxes with `getAll`
- Spread operator (`...`)
- Uncontrolled inputs with `defaultValue`

---

## 🔁 How Data Is Collected

```js
const data = Object.fromEntries(formData)
const dietaryRestrictions = formData.getAll("dietaryRestrictions")

const allData = {
  ...data,
  dietaryRestrictions
}
