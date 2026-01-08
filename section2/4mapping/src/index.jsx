import ReactDom from "react-dom/client";
import App from "./reactCantRenderObj"

ReactDom.createRoot(document.getElementById("root"))
.render(<App/>)