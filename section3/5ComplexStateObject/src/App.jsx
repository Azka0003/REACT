// import React from "react"
// import avatar from "../../images/user.png"
// import starFilled from "../../images/star-filled.png"
// import starEmpty from "../../images/star-empty.png"

// export default function App() {
//     const [contact, setContact] = React.useState({
//         firstName: "John",
//         lastName: "Doe",
//         phone: "+1 (212) 555-1212",
//         email: "itsmyrealname@example.com",
//         isFavorite: true
//     })

//     function toggleFavorite() {
//         console.log("Toggle Favorite")
//     }

//     return (
//         <main>
//             <article className="card">
//                 <img
//                     src={avatar}
//                     className="avatar"
//                     alt="User profile picture of John Doe"
//                 />
//                 <div className="info">
//                     <button
//                         onClick={toggleFavorite}
//                         aria-pressed={contact.isFavorite}
//                         aria-label={contact.isFavorite?"Remove from favourites":"Add to favourites"}
//                         className="favorite-button"
//                     >
//                         <img
//                             // src={starEmpty}
//                              src={contact.isFavorite?starFilled:starEmpty}
//                             alt={contact.isFavorite?"filled star icon":"empty star icon"}
//                             className="favorite"
//                         />
//                     </button>
//                     <h2 className="name">
//                         {/* John Doe */}
//                         {contact.firstName} {contact.lastName}
//                     </h2>
//                     <p className="contact">{contact.phone}</p>
//                     <p className="contact">{contact.email}</p>
//                 </div>

//             </article>
//         </main>
//     )
// }



import React from "react"
import avatar from "../src/images/user.png"
import starFilled from "../src/images/star-filled.png"
import starEmpty from "../src/images/star-empty.png"

export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (212) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: true
    })

    function toggleFavorite() {
        // setContact(prevContact=>!prevContact.isFavorite)
        //we r passing five properties in obj but returning(not obj of five prop but only one prop) after update only one value isfavorite
        // setContact(prevContact => {
        //     return {
        //         ...prevContact,
        //         isFavorite: !prevContact.isFavorite
        //     }
        // })

        setContact(prevContact=>({
                ...prevContact,isFavorite:!prevContact.isFavorite
            
        }))


    }
    return (
        <main>
            <article className="card">
                <img
                    src={avatar}
                    className="avatar"
                    alt="User profile picture of John Doe"
                />
                <div className="info">
                    <button
                        onClick={toggleFavorite}
                        aria-pressed={contact.isFavorite}
                        aria-label={contact.isFavorite ? "Remove from favourites" : "Add to favourites"}
                        className="favorite-button"
                    >
                        <img
                            // src={starEmpty}
                            src={contact.isFavorite ? starFilled : starEmpty}
                            alt={contact.isFavorite ? "filled star icon" : "empty star icon"}
                            className="favorite"
                        />
                    </button>
                    <h2 className="name">
                        {/* John Doe */}
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="contact">{contact.phone}</p>
                    <p className="contact">{contact.email}</p>
                </div>

            </article>
        </main>
    )
}






// 1️⃣ aria-label
// aria-label={contact.isFavorite
//   ? "Remove from favourites"
//   : "Add to favourites"}

// What it does:
// Gives a text description to an element
// Used when the element has no visible text (like an icon button)
// Why needed here:
// Your button only has a star image, no text.
// Screen readers can’t understand images properly





// 2️⃣ aria-pressed
// aria-pressed={contact.isFavorite}
// What it does:
// Tells screen readers whether a toggle button is ON or OFF
// Values:
// true → button is active / pressed
// false → button is inactive
// Why needed here:
// Your star button behaves like a toggle:
// filled star = favorite
// empty star = not favorite
// So screen readers announce:
// “Favorite button, pressed”
// or
// “Favorite button, not pressed”





// “Curly braces me return likhna padta hai na?”
// ✅ Answer: Depends on which curly braces you’re talking about
// There are TWO different things here 👇
// 1️⃣ Arrow function body { } → return REQUIRED
// If you write the function body with {}:

// setContact(prevContact => {
//   return {
//     ...prevContact,
//     isFavorite: !prevContact.isFavorite
//   }
// })
// ✅ Here return is mandatory
// Because {} means a block body

// 2️⃣ Object literal { } with implicit return → return NOT needed
// Your code:
// setContact(prevContact => ({
//   ...prevContact,
//   isFavorite: !prevContact.isFavorite
// }))

// Why this works:
// () → tells JS “this is an expression”
// {} inside () → object literal
// Arrow function implicitly returns the object
// 👉 No return needed here.

// 🔴 Important confusion to avoid
// ❌ This will NOT work:

// setContact(prevContact => {
//   ...prevContact,
//   isFavorite: !prevContact.isFavorite
// })

// Why?
// JS thinks {} is a block
// No return
// Result = undefined ❌

// 🧠 Simple rule (remember forever)
// Arrow function with {} → need return
// Arrow function with () → implicit return