// export default function App(){
//     const ninjaTurtules=["asdf","saaas","sakas","asslad"]


//     return (
//         <main>
//             {ninjaTurtules}
            
//             {/* {["asdf","saaas","sakas","asslad"]} */}
//         </main>
//     )
// }

// export default function App(){
// // const Person="Azka" can render as using js to render but cant render obj
// //const Person={10}// why this wrong here as same i can do in props because {} means entering in js 
// but here const eyc mean we are alreday in js so now if u use {} means obje or object mein key pair
//  value hoti h here only 10 no key thats why syntax error

//  const Person=[{firstName:"BoB"}]
//     return (
//         <main>
//             {Person}
//             {/* {Person[0].firstName} can render this as obj part */}
//         </main>
//     )
// }

//  const Person=[{firstName:"BoB"}] when i try obj
// Error: Objects are not valid as a React child
//  (found: object with keys {firstName}). 
//  If you meant to render a collection of children, 
//  use an array instead.
// jsx cant render object unless they r of very specific type


// 1. What React can render directly
// In JSX, React can only render these types safely:
// Strings → "Hello"
// Numbers → 10
// JSX elements → <p>Hi</p>
// Arrays of the above

// 2.Why objects can’t render directly
// If you do:
// const Person = { age: 10 };
// <main>{Person}</main>

// 👉 You’ll get an error: Objects are not valid as a React child.
// React doesn’t know how to display a full object as text.
// But you can render parts of it:

// <main>{Person.age}</main>   // ✅ displays: 10



// jsx simply return objects

// export default function App(){
//  const jsx=<h1>Donatello</h1>
//  console.log(jsx)//u can see obj is returning
//     return (
//         <main>
           
//         </main>
//     )
// }

// it is able to reneder a specific type object that was created 
// with the jsx syntax or under the hood createElement


// export default function App(){
// const ninjaTurtules=["Donatello","Michaellangelo","Rafael","Leonardo"]

// return(
//     // ninjaTurtules.map(word=> `<h1>${word}</h1>` )
//     ninjaTurtules.map(word=> <h1>{word}</h1> )
// )
// }

// Rule of thumb:
// In plain JS strings → use backticks + ${}. innerhtml also
// In JSX → just use {} directly.

// rendering array of jsx eleemnts
export default function App(){
const ninjaTurtles=[
<h1>Donatello</h1>,
<h2>Michaellangelo</h2>,
<h2>Rafael</h2>,
<h2>Leonardo</h2>
];


return(
    <main>
        {ninjaTurtles}
      
    </main>
)
}




// Getting warning from both map and array why?
// Warning: Each child in a list should have a unique "key" prop.
// 🔎 Why?
// When you render an array of elements in React, React uses the key prop to track which element is which (for updates/re-renders).

// Since your array has multiple <h*> tags, React expects each of them to have a unique key.

// ✅ Fix
// Add a key to each element:

// const ninjaTurtules = [
//   <h1 key="1">Donatello</h1>,
//   <h2 key="2">Michaellangelo</h2>,
//   <h2 key="3">Rafael</h2>,
//   <h2 key="4">Leonardo</h2>
// ];
// Or better: use .map() so keys are auto-managed:

// const names = ["Donatello", "Michaellangelo", "Rafael", "Leonardo"];
// return (
//   <main>
//     {names.map((name, index) => <h2 key={index}>{name}</h2>)}
//   </main>
// );

// - Rendering lists of JSX elements
// - Using `key` prop while rendering lists

// ⚡ Summary:
// Warning is about missing key props.
// key helps React optimize rendering.
// Always use .map() with keys instead of hardcoding JSX into arrays.