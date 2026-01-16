import { Outlet } from "react-router-dom";
import Header from "../header";

export default function Layout() {
    return(
        <div>
            <Header/>
            <Outlet/>
        </div>
    )
}

// this is the common layout throughout the application
// now go to the App.jsx and in whoenevr code header will be common mak ethem child of this layout