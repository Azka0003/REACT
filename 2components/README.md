## 📁 2components – React Components & Hooks Practice

This folder contains my hands-on practice and implementations of core React concepts related to components, state management, styling, and hooks.  
The goal of this module is to understand how React works internally and how modern React applications are built using functional components and hooks.

---

## 🚀 What I Learned

This module covers both class-based and functional React components, along with modern hooks and best practices.

---

## 🧩 Components

### 1️⃣ Class-Based Components
- Created components using `class` syntax  
- Used `render()` method to return JSX  
- Managed state using `this.state`  
- Updated state using `this.setState()`  

### 2️⃣ Functional Components
- Built components using JavaScript functions  
- Used hooks to manage state and lifecycle behavior  

### 3️⃣ Nested Components
- Built parent and child components  
- Passed data between components using props  
- Reused components for cleaner UI structure  

---

## 🔑 Props, Lists & Keys
- Used `props` to pass data from parent to child components  
- Rendered lists using `.map()`  
- Used `keys` to help React track list items efficiently  

---

## 🎨 Styling in React

### 1. CSS Files
- Traditional `.css` files imported into components  

### 2. CSS Modules
- Scoped styles using `.module.css` to avoid class name conflicts  

### 3. Inline Styles
Used JavaScript objects for:
- Dynamic styling  
- Overriding styles when needed  

---

## 🔄 Conditional Rendering
- Displayed UI based on conditions  
- Used:
  - `if / else`
  - Ternary operator (`? :`)
  - Logical `&&`

---

## ⚡ State Management

### In Class Components
- Used `this.state`  
- Updated using `this.setState()`  

### In Functional Components
- Used the `useState` hook  
- Managed form inputs, counters, loading states, etc.  

---

## 🔁 React Lifecycle & Hooks Journey

### Lifecycle Methods (Class Components)
- `componentDidMount`
- `componentDidUpdate`
- `componentWillUnmount`

Used to:
- Fetch data  
- Update UI when state changes  
- Clean up when a component is removed  

---

### useState Hook
- Used to store and update component data  
- Replaced `this.state` in functional components  

---

### useEffect Hook
Used to handle side effects like:
- API calls  
- Running code when a component loads  
- Running code when state updates  
- Cleaning up on unmount  

Dependency array was used to control:
- Run once (page load)  
- Run on state change  
- Run on unmount  

---

## ⏳ Managing Loading State
- Used `useState` to track loading  
- Displayed loaders while fetching data  

---

## 🌍 Context API & useContext
- Created global state using React Context  
- Shared data between unrelated components  
- Avoided prop drilling  
- Used `useContext` to access global values  

---

## 🌐 Data Fetching
- Fetched API data using `useEffect`  
- Stored results in state  
- Handled loading and error cases  

---

## 🔄 useReducer Hook
- Used for complex state logic  
- Managed actions and state updates using a reducer function  
- Similar to Redux but built into React  

---

## 📌 Purpose of This Folder
This module helped me:
- Understand how React works internally  
- Learn how UI reacts to state changes  
- Build scalable and maintainable components  
- Transition from class components to modern hook-based React  

---

## 📝 Form Handling  
This module helped me:  
- Build controlled input fields using React state  
- Capture user input using `onChange`  
- Submit form data without page reload  
- Understand how React controls form elements  

---

## 🔹 Controlled Forms  
This part helped me:  
- Use `useState` to store input values  
- Bind input fields using the `value` attribute  
- Update state when the user types  
- Make React the single source of truth for form data  

---

## 🔹 Form Submission  
This helped me:  
- Use `onSubmit` on forms  
- Prevent page refresh using `event.preventDefault()`  
- Collect all input values at submit time  
- Prepare form data for API calls  

---

## 🔹 Single State Object for Forms  
This approach helped me:  
- Store multiple inputs inside one state object  
- Use `event.target.name` to detect which field changed  
- Update values dynamically using `[name]: value`  
- Avoid creating separate states and handlers for each field  

---

## 🔹 Dynamic & Reusable Form System  
This concept helped me:  
- Create a `CommonForm` component for all forms  
- Build reusable `CommonInput` components  
- Generate form fields dynamically using configuration data  
- Use the same form logic for Login and Register  

---

## 🔹 Form Configuration  
This helped me:  
- Define form structure in config files  
- Separate UI from business logic  
- Easily add or modify fields without touching component code  
- Build scalable real-world form systems  


## 🛠 Technologies Used
- React.js  
- JavaScript (ES6+)  
- JSX  
- CSS  
