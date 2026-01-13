# 📝 Todo App (React + Material UI)

A simple and interactive **Todo Application** built using **React Hooks** and **Material UI**.  
This project demonstrates API fetching, component-based UI, dialogs, and modern state management using React.

---

## 🚀 Features

- Fetch list of todos from an API  
- Display todos in a clean card-based UI  
- Show loading skeleton while data is being fetched  
- View single todo details in a popup dialog  
- Material UI based modern design  
- Fully built using React functional components  

---

## 🛠 Tech Stack

- React.js  
- JavaScript (ES6+)  
- Material UI (MUI)  
- CSS Modules  
- Fetch API  

---

## 📂 Project Structure
todo-app/
│
├── src/
│ ├── components/
│ │ ├── todo-item
│ │ │     └── index.jsx
│ │ └── todo-details
│ │             └── index.jsx
│ ├── App.jsx
│ ├── styles.module.css
│ ├── index.css
│ ├── App.css
│ └── main.jsx
│
└── README.md


---

## 🔁 How the App Works

1. When the app loads, it fetches all todos from:
https://dummyjson.com/todos
2. While data is loading, a **Material UI Skeleton** is displayed.  
3. Todos are shown as cards using `TodoItem` component.  
4. Clicking the **Details** button fetches a single todo:
https://dummyjson.com/todos/{id}
5. The selected todo is stored in React state.  
6. A **Material UI Dialog** opens to show the todo details.  

---

## 🧠 React Concepts Used

- `useState` for managing:
- Todo list
- Loading state
- Selected todo
- Dialog open/close
- `useEffect` for data fetching  
- Props for passing data and functions between components  
- Conditional rendering  
- Component re-rendering on state change  

---


This follows the React principle:
> **Parent holds state, child triggers actions**

---

## 📦 API Used

Dummy JSON Todos API  
https://dummyjson.com/todos


---

## 🎯 Purpose of this Project

This project was built to practice:
- React component architecture  
- Hooks and state management  
- API integration  
- Material UI components  
- Modal dialogs and loading states  

---



