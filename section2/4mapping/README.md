# Rendering Lists & Data-Driven UI in React 🧠

This folder demonstrates how React renders data using **arrays, `.map()`**, and **props**.

## Concepts Covered

- What React can and cannot render (strings, numbers, JSX, arrays)
- Why objects cannot be rendered directly in JSX
- Using `.map()` to transform arrays
- Rendering lists of JSX elements
- Using `key` prop while rendering lists
- Difference between plain JavaScript rendering and React JSX rendering
- Data-driven UI using props and external data files

## What is Happening Here

- Arrays are transformed using `.map()`
- In plain JavaScript, `.map()` returns strings that need `innerHTML`
- In React, `.map()` returns JSX elements that render automatically
- Components receive data through **props**
- UI structure stays the same while data changes

## Key Takeaway

React builds UI in a **declarative and data-driven way**.
Components define structure, arrays provide data, and `.map()` connects them to render scalable and reusable UI.
