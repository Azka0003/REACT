import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"))

root.render(
/* <Facts/> */
// Facts()
<Facts></Facts>
)

function Facts(){
    return ( 
    <main>
        <img src="/src/images/react1.png" alt="reactImage" width="40px" />
        <h1>Fun Facts about React!</h1>
        <ul>
            <li>was first release in 2013</li>
            <li>was originallly created by Jordan Walke</li>
            <li>Has well over 200k starts on GitHub</li>
            <li>Is maintained by Meta</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </main>
    )
}