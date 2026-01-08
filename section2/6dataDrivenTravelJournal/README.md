# Data-Driven Rendering with Props Spread

This folder shows the **evolution of a React component** from
hard-coded props to a **clean, data-driven UI**.

## What Changed Step by Step

- Started with passing props manually to a single `<Entry />`
- Moved data into a separate `data.js` file
- Used `.map()` to render multiple entries dynamically
- Passed the entire object using **props spread (`{...entry}`)**

## Concepts Covered

- Data-driven UI using arrays
- Rendering lists with `.map()`
- Using `key` for list items
- Passing objects as props
- Props spreading for cleaner code

## Why `{...entry}` is Used

- Avoids passing many props one by one
- Makes the code scalable and maintainable
- Any new field added in data does not require changes in `App.jsx`

## IDs and Keys

- `id` is part of the data (usually created in backend)
- `key` is required by React for efficient list rendering
- `key` is used internally by React and not passed as a prop

## Key Takeaway

Components define structure, data defines content,
and React renders everything **declaratively and dynamically**.
