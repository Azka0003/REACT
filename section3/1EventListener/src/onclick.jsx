import ReactDOM from 'react-dom/client';

function App() {

    function handleClick() {
        console.log("I was clicked!")
    }

    function handleMouseOver() {
        console.log("I was hovered!")
            event.target.style.border = "5px solid red"
    }

      function handleMouseOut(event) {
    event.target.style.border = "none"; // 👈 reset border when mouse leaves
  }

    return (
        <main className="container">
            <img
                src="https://rideexpeditions.com/wp-content/uploads/2019/12/Adv-11.jpg" height="400px"
                alt="Placeholder image from Rider"
                onMouseOver={handleMouseOver}
                 onMouseOut={handleMouseOut}
            />

            {/* <button onClick={function() {console.log("CLicked")}}>Click me</button> */}
            {/* <button onClick={handleClick()}>Click me</button> beacuse of () bina click ke hi im clicked likha aayega so if u want to print only after click so remove () */}
            <button onClick={handleClick}>Click me</button>
        </main>
    )

}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);