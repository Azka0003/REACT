import React from "react"
export default function App() {
    /**
       * Challenge: Convert the code below to use an array
       * held in state instead of a local variable. Initialize 
       * the state array as an empty array
       * 
       * Don't worry about fixing `addFavoriteThing` quite yet.
       */

    const [myFavoriteThings, setMyFavoriteThings] = React.useState([])
    const allFavoriteThings = ["💦🌹", "😺", "💡🫖", "🔥🧤", "🟤🎁",
        "🐴", "🍎🥧", "🚪🔔", "🛷🔔", "🥩🍝"]
    const thingsElements = myFavoriteThings.map(thing => <p key={thing}>{thing}</p>)

    function addFavoriteThing() {
        //    setMyFavoriteThings(prevFavThings=>[...prevFavThings],"<new item here>")
        //   it first access prev array and then return array by appending new val

        /* Here [...] (spread operator) creates a new array, copying everything from prev, and adding "Test" at the end.
         Now the reference changes → React re-renders → UI updates correctly.*/
        // setMyFavoriteThings(prevFavThings => [...prevFavThings, "Test"])
        setMyFavoriteThings(prevFavThings => [...prevFavThings, allFavoriteThings[prevFavThings.length]])
    }

    return (
        <main>
            <button onClick={addFavoriteThing}>Add item</button>
            <section aria-live="polite">
                {thingsElements}
                {/* {myFavoriteThings} */}
            </section>
        </main>
    )
}


// 1️⃣ Immutability doesn’t mean values disappear
// When we say old array is immutable, we mean we never modify the original array in place.
// prevFavThings is never changed — it still contains only the values it had before.
// The new array [...prevFavThings, "Test"] contains all old values + the new one.

// 2️⃣ Why UI shows old + new
// React always renders the latest state (myFavoriteThings).
// That latest state is a new array, built using the contents of the old array + the new item.
// Old array in memory is untouched; React just copied its values into a new array.

// 3️⃣ Key point
// Old array → unchanged (immutable) ✅
// New array → contains old values + new value → used for rendering ✅
// So the values appear “changed” in UI, but the original array was never mutated. That’s what immutability really means.


// | Step        | Old Array          | New Array (`setMyFavoriteThings`) | Rendered elements   ,latest state                     |
// | ----------- | ------------------ | --------------------------------- | ---------------------------------------- |
// | Initial     | []                 | []                                | nothing                                  |
// | Add “Test1” | []                 | ["Test1"]                         | <p>Test1</p>                             |
// | Add “Test2” | ["Test1"]          | ["Test1", "Test2"]                | <p>Test1</p>, <p>Test2</p>               |
// | Add “Test3” | ["Test1", "Test2"] | ["Test1", "Test2", "Test3"]       | <p>Test1</p>, <p>Test2</p>, <p>Test3</p> |



// Your question (in correct English)
// My question is: does myFavoriteThings change completely every time?
// Does React replace the whole array with a new one on each update?

// The correct answer
// Yes, myFavoriteThings is replaced entirely with a new array each time.
// React does not modify the existing array.
// Instead, it creates a new array containing all previous items plus the new one.
// Then React updates the state reference to point to this new array.
// So technically, the entire array is replaced, not partially changed.
// This is intentional and is called immutable state updates

// setMyFavoriteThings(prev => [...prev, newItem])
// prev → old array (never touched)
// [...prev, newItem] → brand-new array
// React replaces the state reference with this new array
// 👉 So state changes by replacement, not mutation


// Mutation means changing the original value directly in memory.
// In simple words:
// Mutation = modify the existing data instead of creating a new one



// Refactor array means:
// 🛠️ Take an array that was written in a simple/incorrect way and rewrite it in a better, React-friendly way.
// In React, “refactor array” usually means:
// 📦 Move an array from a normal variable into useState and update it immutably