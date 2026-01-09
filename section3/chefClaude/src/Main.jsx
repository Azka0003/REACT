// export default function Main() {
//     const ingredients =["Chicken","Oregano","Tomatoes"]//now i want to showl this like a ul so ofc we ll use map for that

import React from "react"

// const ingredientsListItem=ingredients.map(ingredient=> (
//     <li key={ingredient}>{ingredient}</li>
// ))

// function handleSubmit(event){
//     event.preventDefault()
//     const formData=new FormData(event.currentTarget)//"Collect all form data"
//     const newIngredient=formData.get("ingredient")//  "Get specific value by input name"
//     ingredients.push(newIngredient);//not rerender thats why we read state chnage of local var ternary array push new val
//     console.log(ingredients)
// }

//     return (
//         <main>
//             <form onSubmit={handleSubmit} className="add-ingredient-form">
//                 <input
//                     type="text"
//                     placeholder="e.g. oregano"
//                     aria-label="Add ingredient"
//                     name="ingredient"
//                 />
//                 <button>Add ingredient</button>
//             </form>

//             <ul>
//                 {ingredientsListItem}
//             </ul>
//         </main>
//     )
// }



// ✅ Why onSubmit is better than onClick for forms

// Works with Enter key
// onSubmit triggers when user presses Enter in the input.
// onClick only triggers if they physically click the button.

// Semantic & accessible
// Forms are meant to be submitted → onSubmit follows HTML standards.
// Screen readers and accessibility tools expect onSubmit, not onClick.

// Handles all submit triggers
// Works if the user presses enter, taps button, or uses assistive tech.
// onClick misses these cases.

// each time im submitting page is getting refresehd to stop that use event.preventDefault and also pass event


// //usestate
// export default function Main() {

//     const [ingredients, setIngredient] = React.useState([])

//     const ingredientsListItem = ingredients.map(ingredient => (
//         <li key={ingredient}>{ingredient}</li>
//     ))

//     function handleSubmit(event) {
//         event.preventDefault()
//         const formData = new FormData(event.currentTarget)
//         const newIngredient = formData.get("ingredient")// name attribute val of input field

//         //   setIngredient(()=>{})
//         setIngredient(prevIngredients => [...prevIngredients, newIngredient])
//     }

//     return (
//         <main>
//             <form onSubmit={handleSubmit} className="add-ingredient-form">
//                 <input
//                     type="text"
//                     placeholder="e.g. oregano"
//                     aria-label="Add ingredient"
//                     name="ingredient"
//                 />
//                 <button>Add ingredient</button>
//             </form>

//             <ul>
//                 {ingredientsListItem}
//             </ul>
//         </main>
//     )
// }


//3rd
//other way of like react19 to acccess form data
export default function Main() {
    const [ingredients, setIngredient] = React.useState([])

    const ingredientsListItem = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")

        setIngredient(prevIngredients => [...prevIngredients, newIngredient])
    }

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>

            {/* <ul>
                {ingredientsListItem}
            </ul>  replacing this with below one*/}


{/* {ingredients.length && <section> careful using it*/}
            {ingredients.length > 0 && <section>
                <h2>Ingredients on hand:</h2>
                <ul className="ingredients-list" aria-live="polite">{ingredientsListItem}</ul>
                {ingredients.length>3 && <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button>Get a recipe</button>
                </div>}
            </section>}
        </main>
    )
}







// Why “careful using it”?
// Because:
// ingredients.length is a number
// In JavaScript:
// 0 is falsy
// any number > 0 is truthy
// If ingredients.length === 0
// 👉 expression becomes:
// 0 && <section>...</section>   // returns 0

// ⚠️ React may render 0 on the screen
// That’s why we avoid this pattern.

// 2️⃣ Correct conditional check (used in your code)
// {ingredients.length > 0 && <section> ... </section>}
// What this means:
// If there is at least one ingredient, render the <section>
// If not, render nothing
// This avoids the 0 rendering problem.

// 3️⃣ Inside <section>
// <h2>Ingredients on hand:</h2>
// 4️⃣ Rendering the ingredient list
// 5️⃣ Second conditional rendering (nested condition)
// {ingredients.length > 3 && <div className="get-recipe-container"> ... </div>}
// Meaning:
// Show this block only if ingredients are more than 3


//from ternary
// {ingredients.length > 0 ? <section>
//                 <h2>Ingredients on hand:</h2>
//                 <ul className="ingredients-list" aria-live="polite">{ingredientsListItem}</ul>
//                 {ingredients.length>3 && <div className="get-recipe-container">
//                     <div>
//                         <h3>Ready for a recipe?</h3>
//                         <p>Generate a recipe from your list of ingredients.</p>
//                     </div>
//                     <button>Get a recipe</button>
//                 </div>}
//             </section> :null}