// export default function App() {
//     /**
//      * Challenge: Replace the if/else below with a ternary
//      * to determine the text that should display on the page
//      */
//     const isGoingOut = true
//      let answer  // 👈 Use ternary here
//     if(isGoingOut === true) {
//         answer = "Yes"
//     } else {
//         answer = "No"
//     }

//     return (
//         <main>
//             <h1 className="title">Do I feel like going out tonight?</h1>
//             <button className="value">{answer}</button>
//         </main>
//     )
// }  



// export default function App() {
//     const isGoingOut = true
//     let answer =isGoingOut?"Yes":"No"
//     return (
//         <main>
//             <h1 className="title">Do I feel like going out tonight?</h1>
//             <button className="value">{answer}</button>
//         </main>
//     )
// } 

// more simpler way
// export default function App() {
//     const isGoingOut = true
//     return (
//         <main>
//             <h1 className="title">Do I feel like going out tonight?</h1>
//             <button className="value">{isGoingOut?"Yes":"No"}</button>
//         </main>
//     )
// } 




// //Assignment inside
// import React from "react"
// export default function App() {

//     const [result, setFunction] = React.useState(true)

//     function handleClick() {
//         setFunction(result = false)
//     }

//     //result = false is a normal JavaScript assignment, not a state update.
//     // React ignores assignments to state variables — they do not trigger re-renders.
//     return (
//         <main>
//             <h1 className="title">Do I feel like going out tonight?</h1>
//             <button className="value" onClick={handleClick}>{result ? "yes" : "No"}</button>
//         </main>
//     )
// }




// //TOGGLING STATE
// import React from "react"
// export default function App() {

//     const [result, setFunction] = React.useState(true)//initialise result with true

//     function handleClick() {
//         setFunction(false)
//     }

//     return (
//         <main>
//             <h1 className="title">Do I feel like going out tonight?</h1>

//             {/* <button className="value" onClick={handleClick}>{result}</button>
//  Here’s why count shows but result didn’t in your previous example ternary:
//  Exactly ✅ — in JSX:
//  false (and true, null, undefined) do not render anything.
//  Only strings, numbers, or elements produce visible output.
//  So when you had {result} and result was false, React rendered nothing — the button appeared empty.
//  To show something, you need to convert it to text:
//  <button>{result ? "Yes" : "No"}</button> */}

//             <button className="value" onClick={handleClick}>{result ? "yes" : "No"}</button>
//         </main>
//     )
// }


//TOGGLING STATE CONTINUE
import React from "react"
export default function App() {

    const [result, setFunction] = React.useState(true)

    function handleClick() {
        setFunction(prevVal=>!prevVal)
        // setFunction(!result)
    }

    return (
        <main>
            <h1 className="title">Do I feel like going out tonight?</h1>
            <button className="value" onClick={handleClick}>{result ? "yes" : "No"}</button>
        </main>
    )
}