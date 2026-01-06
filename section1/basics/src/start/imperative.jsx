// know how react is declarative not imperitive
// u r said to create a new h1 element some text content
//  class name then apppend it as a child usih appendchild dont use innerHTML

// how u'll do
 const h1=document.createElement("h1")
 h1.textContent="This is imperative coding"
 h1.className="header"
 document.getElementById("root").appendChild(h1)



import { createRoot } from "react-dom/client"
const root= createRoot(document.getElementById("root"))
//  but in react just pass element
root.render(
 <h1 className="header">React is declarative</h1>
)

//just for understanding not output