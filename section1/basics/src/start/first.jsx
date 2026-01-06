import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));
root.render(<h1>Hello from React!</h1>);

// export default function Aindexfun() {
// const root = createRoot(document.getElementById("root"));
// root.render(<h1>Hello from React!</h1>);
// }

// If you want to reference a React file in another file, you should write all the logic here 
// and then import it in main or another file.
// This is the correct way: import the file, and whatever you want to write should be written
//  inside an exported function (component).