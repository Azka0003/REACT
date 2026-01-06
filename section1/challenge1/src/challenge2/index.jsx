import { createRoot } from "react-dom/client";
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer"
// u can write any thing after import but same as below name
import { Fragment } from "react";

const root = createRoot(document.getElementById("root"));

// function Header() {
//     return (
//         <header className="Header">
//             <img src="/src/reactlogo.png" className="nav-logo" alt="reactlogo" />
//             <nav>
//                 <ul className="nav-list">
//                     <li className="nav-list-item">Pricing</li>
//                     <li className="nav-list-item">About</li>
//                     <li className="nav-list-item">Contact</li>
//                 </ul>
//             </nav>
//         </header>
//     )
// }

// function MainContent() {
//    return(
//      <main>
//         <h1>Reasons I'm excited to learn React! </h1>
//         <ol>
//             <li>React is popular library</li>
//             <li>im more likely to have a job as frontend</li>
//         </ol>
//     </main>
//    )
// }

// function Footer() {
//     return(
//         <footer className="Footer">
//         <small>
//             &copy;2025 Ziroll development
//         </small>
//     </footer>
//     )
// }

function Page() {
    return (
        <Fragment>

            <Header />
            <MainContent />
            <Footer />

        </Fragment>
    )
}

// here page, inside page other function, imagine inside maincontent other functions,
//  this is parent child realtionship

root.render(
<Page/>
)

// TO STYLE U CAN define here classes in jsx file and can access in css file
// but here className used 
// example:
// const ul=document.getElementById("ul")
// ul.className=""


// | In            | Use               | Why                                                          |
// | ------------- | ----------------- | ------------------------------------------------------------ |
// | **HTML**      | `class="..."`     | Standard HTML attribute                                      |
// | **React JSX** | `className="..."` | `class` is a reserved keyword in JS, so JSX uses `className` |


// Other attributes also change slightly in React JSX to follow JavaScript naming conventions:

// for → htmlFor
// onclick → onClick
// tabindex → tabIndex
