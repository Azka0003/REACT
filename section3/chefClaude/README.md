# 🍳 Chef Claude – Ingredient Manager (React)

This project lets users add ingredients through a form and see them appear in a list.  
When enough ingredients are added, the UI suggests generating a recipe.

It demonstrates **React state with arrays, form handling, and conditional rendering**.

---

## 🚀 Features

- Add ingredients using a form
- Store ingredients in React state
- Display ingredients as a list
- Show extra UI when enough ingredients exist
- Uses React 19 style `form action`

---

## 🧠 Concepts Covered

- `useState` with arrays
- Immutable updates using spread (`...`)
- `FormData` for reading form values
- Conditional rendering with `&&` and `>`
- Mapping arrays to JSX
- Nested conditional UI

---

## 🔁 How Ingredients Are Added

```js
function addIngredient(formData) {
  const newIngredient = formData.get("ingredient")
  setIngredient(prev => [...prev, newIngredient])
}
