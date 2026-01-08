import ReactDom from "react-dom/client";

function App(){
    const firstName="Joe"
    const lastName="Schmoe"
const hours=new Date().getHours()%12
    return (
       <>
        <h1>Hello {firstName} {lastName}</h1>
        <h1>It is currently {new Date().getHours()%12}</h1>
        <h1>It is currently {hours}</h1>
       </>
    )
}

ReactDom.createRoot(document.getElementById("root")).render(<App/>)