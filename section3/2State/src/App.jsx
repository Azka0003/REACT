// cas1: normal val chnage
// import React from "react"

// export default function App() {

//    let result="Yes"
//    result="No"

//     return (
//         <main>
//             <h1 className="title">Is state important to know?</h1>
//             <button className="value">{result}</button>
//         </main>
//     )
// }


//case 2 : local var value do not chnage
// import React from "react"
// export default function App() {

//    let result="Yes"
//    function handleClick(){
//     result="Heck Yes"
//    }

//     return (
//         <main>
//             <h1 className="title">Is state important to know?</h1>
//             <button className="value" onClick={handleClick}>{result}</button>
//         </main>
//     )
// }




//case 3 first step to understand
// import React from "react"

// export default function App() {

//     const result = React.useState("Hello")
//     console.log(result)

//     return (
//         <main>
//             <h1 className="title">Is state important to know?</h1>
//             <button className="value">Yes</button>
//         </main>
//     )
// }



// // case 3 continue with useState
// import React from "react"
// export default function App() {

//     /**
//      * Challenge: Replace our hard-coded "Yes" on the page with 
//      * some state initiated with React.useState()
//      */

//     // const result = React.useState("Hello")
//     const result = React.useState("Yes")
//     console.log(result)

//     return (
//         <main>
//             <h1 className="title">Is state important to know?</h1>
//             <button className="value">{result[0]}</button>
//         </main>
//     )
// }

//changing value like this is not viable



//Array destructuring 
// import React from "react"
// export default function App() {

//     // const [result,func] = React.useState("Yes")
//     const [WhateverWeWant,func] = React.useState("Yes")

//     return (
//         <main>
//             <h1 className="title">Is state important to know?</h1>
//             <button className="value">{WhateverWeWant}</button>
//         </main>
//     )
// }



//infinite loop 
// import React from "react"
// export default function App() {

//     let [isImportant,SetIsImportant] = React.useState("Yes")
//     // isImportant="Heck Yes"
//     SetIsImportant("Heck Yes")
//     //infinite loop error as func call react will rerender this in that again function call and so on

//     return (
//         <main>
//             <h1 className="title">Is state important to know?</h1>
//             <button className="value">{isImportant}</button>
//         </main>
//     )
// }



// Current state is already "Heck Yes".
// But you don’t call setIsImportant("Heck Yes") automatically — it only runs when button is clicked.
// So React sees no new state update during render → stops there. ✅

// State in React is persistent between renders.
// It doesn’t “reset” to "Yes" every time because React remembers the last value you set ("Heck Yes").
// It will only go back if you explicitly call:
// setIsImportant("Yes")


// In React, state is persistent across re-renders, meaning it remembers the last value that was set.
// When useState("Yes") runs for the first time, "Yes" is only the initial value.
// After setIsImportant("Heck Yes") is called, React updates the state and stores the new value.
// On the next render, React does not reset the state back to "Yes".
// If setIsImportant is called inside the component body, React re-renders immediately, causing an infinite loop.
// That’s why state updates should not happen automatically during render.
// State updates should happen only in response to events (like button clicks).
// If no state update is triggered during render, React stops re-rendering.
// To change the state again, you must explicitly call setIsImportant("Yes").


// import React from "react"
// export default function App() {
//     let [isImportant, setIsImportant] = React.useState("Yes")

//     function handleClick() {
//         setIsImportant("Heck Yes")
//     }
//     /**
//      * Challenge: 
//      * 1. Create a function called `handleClick` that runs
//      *    setIsImportant("Heack Yes")
//      * 2. Add a click event listener to the button
//      *    that runs `handleClick` when the button is clicked.
//      */

//     return (
//         <main>
//             <h1 className="title">Is state important to know?</h1>
//             <button onClick={handleClick} className="value">{isImportant}</button>
//         </main>
//     )
// }


// import React from "react"
// export default function App() {
//     /**
//      * Challenge: 
//      * Create state to track our count value (initial value is 0)
//      * Don't forget to replace the hard-coded "0" with your new state
//      */

//     const [count, setCount] = React.useState(0)

//     function add() {
//         setCount(count + 1)
//     }

//      function minus() {
//         setCount(count - 1)
//     }

//     return (
//         <main className="container">
//             <h1>How many times will Bob say "state" in this section?</h1>
//             <div className="counter">
//                 <button className="minus" aria-label="Decrease count" onClick={minus}>–</button>
//                 <h2 className="count">{count}</h2>
//                 <button className="plus" aria-label="Increase count" onClick={add}>+</button>
//             </div>
//         </main>
//     )
// }


//callabck function
// import React from "react"
// export default function App() {

//     const [count, setCount] = React.useState(0)

//     // function add() {
//     //     setCount( 
//     //         function(prevCount){
//     //         return prevCount + 1}
//     //     )
//     // }

//       function add() {
//         setCount( 
//             prevCount => prevCount + 1
//         )
//     }

//      function minus() {
//         setCount(count - 1)
//     }

//     return (
//         <main className="container">
//             <h1>How many times will Bob say "state" in this section?</h1>
//             <div className="counter">
//                 <button className="minus" aria-label="Decrease count" onClick={minus}>–</button>
//                 <h2 className="count">{count}</h2>
//                 <button className="plus" aria-label="Increase count" onClick={add}>+</button>
//             </div>
//         </main>
//     )
// }



//why callback function even if functionality same?
// /**
//    * Note: if you ever need the old value of state
//    * to help you determine the new value of state,
//    * you should pass a callback function to your
//    * state setter function instead of using
//    * state directly. This callback function will
//    * receive the old value of state as its parameter,
//    * which you can then use to determine your new
//    * value of state.
//    */
// import React from "react"
// export default function App() {

//     let [count, setCount] = React.useState(1)

//     //  count=count*2 working
//     function add() {
//         // setCount(prevCount => prevCount + 1)
//         // setCount(prevCount => prevCount + 1)
//         // setCount(prevCount => prevCount + 1)
//         count = count * 2
//         console.log(count);

//         setCount(count * 2)
//         console.log(count);
//     }

//     function minus() {
//         setCount(count - 1)
//         console.log(count)
//         setCount(count - 1)
//         console.log(count)
//         setCount(count - 1)
//         console.log(count)
//         // setCount(prevCount=>prevCount-1)
//         // setCount(prevCount=>prevCount-1)
//         // setCount(prevCount=>prevCount-1)
//         // setCount(prevCount=>prevCount-1)
//     }
//     return (
//         <main className="container">
//             <h1>How many times will Bob say "state" in this section?</h1>
//             <div className="counter">
//                 <button className="minus" aria-label="Decrease count" onClick={minus}>–</button>
//                 <h2 className="count">{count}</h2>
//                 <button className="plus" aria-label="Increase count" onClick={add}>+</button>
//             </div>
//         </main>
//     )
// }


// function add() {
//     count = count * 2      // count becomes 2 (1 * 2)
//     console.log(count);    // Logs: 2
    
//     setCount(count * 2)    // Sets state to 4 (2 * 2)
//     console.log(count);    // Still logs: 2 (not 4!)
// }
// ```

// ## The Key Points

// **1. `count = count * 2` reassigns the local variable**
// - This changes the `count` variable in memory to 2
// - But it does NOT update React's state
// - No re-render happens from this line

// **2. `setCount(count * 2)` uses the mutated value**
// - Now `count` is 2 (from the mutation above)
// - So `setCount(2 * 2)` sets state to 4
// - This DOES trigger a re-render
// - Display shows 16 (because you clicked multiple times: 1→2→4→8→16)

// **3. Why console logs show 2 both times**
// - `setCount()` doesn't immediately update `count`
// - State updates are **asynchronous**
// - `count` will only become 4 after the re-render
// - Inside this function, `count` stays 2

// ## Visual Flow
// ```
// Click 1: count=1 → count=2 (mutation) → setCount(4) → Display: 4
// Click 2: count=4 → count=8 (mutation) → setCount(16) → Display: 16







import React from "react"
export default function App() {

    let [count, setCount] = React.useState(1)

    count = count * 2
    function mul() {
        //    count= count*2//not working inside handleclick fun
        setCount(count * 2)
    }


    return (
        <main className="container">
            <h1>How many times will Bob say "state" in this section?</h1>
            <div className="counter">
                <button className="minus" aria-label="Decrease count">–</button>
                <h2 className="count">{count}</h2>
                <button className="plus" aria-label="Increase count" onClick={mul}>+</button>
            </div>
        </main>
    )
}

// Here’s why count shows but result didn’t in your previous example ternary:
// Exactly ✅ — in JSX:
// false (and true, null, undefined) do not render anything.
// Only strings, numbers, or elements produce visible output.
// So when you had {result} and result was false, React rendered nothing — the button appeared empty.
// To show something, you need to convert it to text:
// <button>{result ? "Yes" : "No"}</button>