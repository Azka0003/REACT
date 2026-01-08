const nums = [1, 2, 3, 4, 5]
const squares = nums.map(
    function (num) {
        return num * num
    })
console.log(squares)


const names = ["alice", "bob", "charlie", "danielle"]
const capitalized = names.map((name) => {
    return name[0].toUpperCase() + name.slice(1)
})
console.log(capitalized)


const pokemon = ["Bulbasur", "Charmander", " Squirrel"]
const paragraphs = pokemon.map((mon) => {
    return `<p>${mon}</p>`
})
console.log(paragraphs)

// as we r having single parameter then no need of having () 
// and put in a line and can remove curly brackets

//2nd way
const pokemon0 = ["Bulbasur", "Charmander", " Squirrel"]
const paragraphs0 = pokemon.map(mon0 => `<p>${mon0}</p>`)
console.log(paragraphs0)

//3rd way
const pokemon1 = ["Bulbasur", "Charmander", " Squirrel"]
const paragraphs1 = pokemon1.map(mon1 => (
    `<p>${mon1}</p>`
))
console.log(paragraphs1)

const pokemon2 = ["Bulbasur", "Charmander", " Squirrel"]
const paragraphs2 = pokemon2.map(mon2 => (
    `<p>${mon2}</p>`
))
// console.log({paragraphs2}) yh obj bn gya not real html as console cant disply html
console.log({paragraphs2})



// What is .map()?
// .map() is a built-in JavaScript array method.
// It goes through each item in an array and perform whatever u write inside function and
//  returns a new array of the same length, 
//(in new words) based on what you return/wrote inside the callback function.

// .map() → transforms each element of an array.
// Always returns a new array (does not change original).
// Very useful for rendering lists in React.

//  pass array, perform task on that array, then map returns that new array 



// Summary for notes:

// .map() loops array → gives each item to callback.
// Callback parameter name can be anything (not linked to array variable name).
// names = whole array
// 👉 name = one single element from that array, one at a time

// JS arrays are declared with [], not typed like int nums[].
// Arrays are dynamic (size can grow/shrink).

// () around return value is optional, but common in React JSX for clarity.



// 1️⃣Plain JavaScript:
// const pokemon = ["Bulbasaur", "Charmander", "Squirtle"];
// const paragraphs = pokemon.map(mon1 => `<p>${mon1}</p>`);
// console.log(paragraphs);

// Output = array of strings like "<p>Bulbasaur</p>".
// These are just text strings, not real <p> tags.
// If you want them to actually render, you must inject them into the DOM:
// document.body.innerHTML = paragraphs.join("");
// Now the browser will parse the strings into real <p> HTML elements and show them.

// 2️⃣ React (JSX)
// const pokemon = ["Bulbasaur", "Charmander", "Squirtle"];
// const paragraphs = pokemon.map(mon1 => <p>{mon1}</p>);
// return <div>{paragraphs}</div>;
// Here <p>{mon1}</p> is JSX, not a string.

// React converts JSX into real DOM nodes automatically.
// So when your component renders, you directly see <p> elements in the browser (no innerHTML needed).

// 👉 So the difference:
// In JS, <p>..</p> is just a string unless you insert it into DOM.
// In React JSX, <p>..</p> is already treated as a real element.



// Perfect 👍 Let’s render both cases so you see the difference clearly.

// 🟢 Plain JavaScript render
// <!DOCTYPE html>
// <html>
//   <body>
//     <script>
//       const pokemon = ["Bulbasaur", "Charmander", "Squirtle"];

//       // Using .map to create strings
//       const paragraphs = pokemon.map(mon => `<p>${mon}</p>`);

//       // Inject those strings into DOM
//       document.body.innerHTML = paragraphs.join("");
//     </script>
//   </body>
// </html>

// 🔹 Here, first you just get strings like "<p>Bulbasaur</p> ".
// 🔹 After innerHTML, the browser parses them and you actually see 3 <p> elements on the page.




// <p>Bulbasaur</p><p>Charmander</p><p>Squirtle</p>"`. output yh aayega isse paragraphs.join("");  means join srf join krta hai
//  lekin jb innerhtml hoga to Bulbasur Charmander... aise ho jayega innerhtml convert kr rha




// - In plain JavaScript, `.map()` returns strings that need `innerHTML`
// - In React, `.map()` returns JSX elements that render automatically

// 🟣 React JSX render
// import { createRoot } from "react-dom/client";
// const root = createRoot(document.getElementById("root"));
// function App() {
//   const pokemon = ["Bulbasaur", "Charmander", "Squirtle"];
//   // Directly return JSX
//   const paragraphs = pokemon.map(mon => <p>{mon}</p>);
//   return <div>{paragraphs}</div>;
// }

// root.render(<App />);
// 🔹 Here <p>{mon}</p> is already JSX, so React immediately turns it into real <p> DOM elements.
// 🔹 You don’t need innerHTML — React does the DOM creation for you.

// 👉 So in JS, .map() gives strings and you must inject into DOM.
// 👉 In React JSX, .map() directly gives real elements, so they render automatically.


// ChatGPT said:
// Exactly 👍
// The console can only show you text, numbers, arrays, objects, etc. — it can’t render actual HTML elements on the page. So when you do:
// console.log("<p>Bulbasaur</p>");
// 👉 Console just prints the string "<p>Bulbasaur</p>".
// It will never behave like a real <p> tag there.
// ✅ To make it display as a real paragraph on the page, you need to render it:


// const learn=["map","is","liitle","bit","tough to","learn","for","me"]
// const display=learn.map(
//     function(Word){
//         return Word.toUpperCase()
//     }
// )

// console.log(display)



const learn = ["map", "Is", "litTle", "bit", "tough to", "learn", "for", "me"]

const singleStr = learn.map(word => (word.toLowerCase()))
console.log(singleStr.join(" "))

// return single array , join mean remove space here coneverting vars odf array in a sentence type

// const mapped = learn.map(word => word.toUpperCase()); // just example
// const display = mapped.join(" ");

// console.log(display);
// "MAP IS LIITLE BIT TOUGH TO LEARN FOR ME"
