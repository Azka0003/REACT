import ReactDom from "react-dom/client";

function App() {

    const hours = new Date().getHours()
    let timeOfDay

    if (hours < 12) {
        timeOfDay = "morning"
    }
    else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    }
    else if (hours < 21) {
        timeOfDay = "evening"
    }
    else {
        timeOfDay = "night"
    }

    return (
        <>
            <h1>Good {timeOfDay}</h1>
        </>
    )
}

ReactDom.createRoot(document.getElementById("root")).render(<App />)

// till here we learned how to use js in jsx: using curly braces

// This example is conditional rendering (because it uses conditions) and dynamic rendering (because the UI changes based on runtime data like time).