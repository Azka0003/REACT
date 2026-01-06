import { createElement } from "react";
import { createRoot } from "react-dom/client";

function Heading() {
    return <h1>React is great</h1>
}

function MainContent() {
    return <p>Trying to run multiple fun in single render</p>
}

// const root = createRoot(document.getElementById("root"));
// const reactElement = createElement("h1", null, "Hello from createElement");
// const reactElement = createElement("h1", null, createElement("span", null, "Hello from nested html elements"));
// i want nested like <h1><span></span></h1>
// console.log(reactElement);
// root.render(reactElement);


// const fun = createRoot(document.getElementById("fun"));
const root = createRoot(document.getElementById("root"));
const reactElement = createElement("h1", null, createElement("span", null, "Hello from nested html elements"));

root.render(
<>
<p>Trying to mix multiple siblings through wrapping</p>
<div>
    <Heading />
    {reactElement}
    <MainContent />
</div>
</>
);


// React doesn’t treat heading as a component because:
// By React’s convention, component names must start with a capital letter.
// If you use lowercase (like heading), React assumes it’s a built-in
// HTML tag (like <div>, <span>, <h1>). Since <heading> is not a valid HTML tag, 
// React ignores it.

// Rule of Thumb
// Capitalized → React component (<MainContent />, <Heading />)
// Lowercase → Native HTML element (<div>, <p>, <h1>)


// if You want to mix JSX components (<Heading />, <MainContent />) with a React element
// created manually (reactElement) inside the same render.

// fun.render(
//   <div>
//     <Heading />
//     reactElement//wrong only plain text
//     <MainContent />
//   </div>
// );
// reactElement here is just a JavaScript variable, but you wrote it like plain text.

// JSX treats that as literal text, not as a variable.
// → So React is trying to render the string "reactElement" instead of the actual element.

// ✅ Fix
// Wrap it in { } to tell JSX “this is JavaScript, evaluate it”

// ques: whatever i'll write in <  /> format is componenet and variable type is react element right?
// Exactly 💡 You got it, but let me fine-tune the wording so it’s 100% clear:

// 🔹 1. JSX Component (<Something />)
// If it starts with a Capital letter, React treats it as a component.
// That means it’s a function/class.
// 🔹2. JSX Native Element (<div>, <p>, etc.)
// If it starts with lowercase, React treats it as a built-in HTML tag.
// 🔹 3. React Element (variable via createElement)
// const reactElement = createElement("h1", null, "Hello from createElement");
// reactElement is just a JavaScript object describing what React should render.
// It’s not a component, just a variable holding a React element.
// To render it inside JSX, you must wrap in { }:
// {reactElement}

//problem:
// fun.render
// (
//      <h1>hsda</h1> 
//      <div> 
//         <Heading />
//         { reactElement}
//         <MainContent />
//     </div> 
// );

// This won’t compile —
//  React (JSX) does not allow two sibling elements at the top level unless they’re wrapped.
// here <h1>hsda</h1> and <div>...</div> are two root elements side by side.
//  JSX requires only one root element.
// Solution: wrap them in <div> or <> </> fragment.


// ⚡ Rule of thumb:
// JSX → must return one root.
// Multiple siblings? → Wrap them in <div> or <> </>.
// JS variables inside JSX? → {variable}.


// React Single Parent Rule (for memory)
// Every React component must return exactly one parent element.
// Applies to both:
// Class components → inside the render() method
// Function components → inside function Name() { return (...) }
// The parent can be a real HTML tag: <div>, <main>, <section>
// Or a React Fragment: <> ... </> (no extra DOM element added)
// 💡 Memory tip:
// “One return → one root” — works for render() and function components alike.

//create func or element
//render