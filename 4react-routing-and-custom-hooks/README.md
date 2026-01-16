# React Router, Hooks & Custom Hooks – Practice Folder

This repository contains **topic-wise React examples** (not a project) covering **React Router DOM, built-in hooks, custom hooks, and performance optimization hooks**.

All files are placed inside a **single folder** and are meant for **learning + revision**.

---

## 📌 Topics Covered

### 🔹 React Router DOM
- BrowserRouter
- Routes / Route
- `useNavigate`
- `Link` component
- Dynamic Routes (`:id`)
- `useParams`
- `useLocation`
- Not Found Page (`*`)
- Common Layout using `Outlet`
- Routing using `useRoutes`

---

### 🔹 Routing Concepts Implemented

- **Static Routing**
- **Dynamic Routing**
- **Nested Routes**
- **Common Layout (Header + Outlet)**
- **Fallback / 404 Page**
- **Navigation using Buttons & Links**


### Common Layout
- `Header` component stays fixed
- Page content renders via `Outlet`

### Dynamic Routing
/home/recipe-list/:id

Handled using `useParams`

### Not Found Page
- Any invalid route redirects to `not-found` page

---

## 🧩 Folder Structure (Conceptual)
src
│
├── components
│ ├── header
│ │ └── index.jsx
│ │
│ └── layout
│ └── index.jsx
│
├── custom_hooks
│ ├── use-fetch.jsx
│ └── use-window-resize.jsx
│
├── pages
│ ├── comments
│ │ └── index.jsx
│ │
│ ├── not-found
│ │ └── index.jsx
│ │
│ ├── react-hook-form-example
│ │ └── index.jsx
│ │
│ ├── recipe-details
│ │ └── index.jsx
│ │
│ ├── recipes
│ │ └── index.jsx
│ │
│ ├── use-callback-example
│ │ ├── counter.jsx
│ │ └── index.jsx
│ │
│ ├── use-memo-example
│ │ └── index.jsx
│ │
│ └── use-ref-example
│ └── index.jsx
│
├── App.jsx
└── main.jsx

---

## ⚙️ Custom Hooks

### ✅ `useFetch`
- Reusable API fetching logic
- Handles:
  - loading
  - error
  - data
- Used in:
  - Recipe List
  - Comments List
  - Products List (useMemo example)

### ✅ `useWindowResize`
- Tracks window width & height
- Uses `useLayoutEffect`
- Dynamically updates UI based on screen size

---

## 🧪 React Hook Form
- `useForm`
- `register`
- `handleSubmit`
- Validation:
  - required
  - minLength
  - regex (email)
- Error handling using `formState.errors`
- `reset()` after submission

---

## 🧠 React Hooks Covered

### 🔸 `useRef`
- DOM manipulation
- Input focus
- Mutable value without re-render
- Styling DOM elements directly
- Difference between `useState` vs `useRef`

---

### 🔸 `useMemo`
- Performance optimization
- Prevents expensive recalculations
- Example:
  - Filtering products by price
  - Avoid re-running logic on unrelated state changes

---

### 🔸 `useCallback`
- Prevents unnecessary child re-renders
- Used with `React.memo`
- Example:
  - Counter component
  - Stable function references
- Explains:
  - Why child components re-render
  - How memo + callback fixes it

---

## 🧠 Important Learnings

- **Clicking a button ≠ component render**
- **State change controls rendering**
- Parent re-render → children re-render
- Optimization requires:
  - `useCallback`
  - `useMemo`

---

## 🚀 How to Run

```bash
npm install
npm run dev
