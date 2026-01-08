export default function Joke(props) {
    // console.log(props.upvotes+2)
    // console.log(!props.isPun)
    // console.log(props)
    console.log(props.comments)

    
    return (
        <>
           {/* {props.setup && <p className="setup">Setup: {props.setup}</p>} */}
            <p style={{display: props.setup ? "block" : "none"}} className="setup">Setup: {props.setup}</p>
            <p className="punchline">PunchLine: {props.punchline}</p>
            <hr />
        </>
    )
}


// 👉 Because JSX is HTML-like, but {} lets us write JavaScript inside it.
// 🧠 What is JSX actually?

// JSX is not HTML.
// It is JavaScript syntax extension.
// So by default:
// <p>Hello</p>
// is treated as JSX (UI markup)
// But when you want to:
// use variables,use conditions,use ternary operator,use logical &&,use expressions
// 👉 you must switch from JSX → JavaScript mode
// And that switch is done using:
// { /* JavaScript goes here */ }




// Some objects may have fewer properties than others.
// To avoid errors, we use conditional rendering.
//
// Example:
// {props.setup && <p>Setup: {props.setup}</p>}
//
// This line renders only if `props.setup` exists.
//
// Since JSX allows JavaScript expressions inside `{}`,
// we can apply conditions using logical operators or ternary operators.
//
// Example using ternary:
// <p style={{ display: props.setup ? "block" : "none" }}>
//   Setup: {props.setup}
// </p>
