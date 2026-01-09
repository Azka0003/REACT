// import React from 'react';
// import ReactDOM from 'react-dom/client';


// function App() {

//     // function handleSubmit(event){
//     // event.preventDefault()
//     // const formEl=event.currentTarget
//     // const formData=new FormData(formEl)
//     // const email=formData.get("email")
//     // // GAther the info from the form and submit it to the backend
//     // formEl.reset()


//     function signUp(formData) {
//         const email = formData.get("email")
//         const password = formData.get("password")
//         const description = formData.get("description")
//         const employmentStatus = formData.get("employmentStatus")
//         // const dietaryRestrictions = formData.get("dietaryRestrictions")//even if i selected multiple checkbox then also im getting only one on cosole
//         const dietaryRestrictions = formData.getAll("dietaryRestrictions")
//         const favColor = formData.get("favColor")
//        // imagine u have 40-50 fields getting each field data is annoying shortcut used next below form object
//         console.log(email)
//         console.log(password)
//         console.log(description)
//         console.log(employmentStatus)//without value aapko either on milega or null to get know which radio option is selected for that u need to provide value
//         console.log(dietaryRestrictions)
//         console.log(favColor)

//     }



//     return (
//         <section>
//             <h1>Signup form</h1>
//             {/* <form method='get' onSubmit={handleSubmit}> */}
//             <form action={signUp}>
//                 <label htmlFor="email">Email:</label>
//                 <input id="email" defaultValue="joe@schmoe.com" type="email" name="email" placeholder="joe@schmoe.com" />
//                 <br />
//                 <label htmlFor="password">Password:</label>
//                 <input id="password" defaultValue="password123" type="password" name="password" />
//                 <br />

//                 <label htmlFor="description">Description:</label>{/*htmlFor chahiye as hum label se input ko wrap ni kr rhe */}
//                 <textarea name="description" id="description" defaultValue="This is a description"></textarea>
//                 {/* u can vary its size or can do fixed from css or by volumns and rows*/}


//                 {/* to select a single radio u have to give same to to all radio in which u want select only one */}

//                 <fieldset>
//                     <legend>Employment Status:</legend>
//                     <label>
//                         <input type="radio" name="employmentStatus" value="Unemployed" />
//                         Unemployed
//                     </label>

//                     <label>
//                         <input type="radio" name="employmentStatus" value="vegan" />
//                         Vegan
//                     </label>

//                     <label>
//                         <input type="radio" name="employmentStatus" value="gluten-free" defaultChecked={true} />
//                         Gluten-free
//                     </label>
//                 </fieldset>


//                 <fieldset>
//                     <legend>Dietary restrictions:</legend>
//                     <label>
//                         <input type="checkbox" name="dietaryRestrictions" value="kosher" />
//                         Kosher
//                     </label>

//                     <label>
//                         <input type="checkbox" name="dietaryRestrictions" value="Part-time" />
//                         Part-time
//                     </label>

//                     <label>
//                         <input type="checkbox" name="dietaryRestrictions" value="Full-time" defaultChecked={true} />
//                         Full-time
//                     </label>
//                 </fieldset>

//                 {/*  <label htmlFor="favColor">What is your favorite color?</label>
//                 <select name="favColor" id="favColor" defaultValue="indigo">
//                 <option value="red">Red</option> red is default but if u want to set ur own default then put defaultval in select
//                 <option value="orange">Orange</option>
//                 <option value="yellow">Yellow</option>
//                 <option value="green">Green</option>
//                 <option value="blue">Blue</option>
//                 <option value="indigo">Indigo</option>
//                 <option value="violet">Violet</option> */}


//                 {/* morefunctionality */}
//                 <label htmlFor="favColor">What is your favorite color?</label>
//                 <select name="favColor" id="favColor" defaultValue="blue" required>
//                     <option value="" disabled>--Choose a color--</option> {/*make it disable so that user cant submit this choose a color option */}
//                     <option value="red">Red</option>
//                     <option value="orange">Orange</option>
//                     <option value="yellow">Yellow</option>
//                     <option value="green">Green</option>
//                     <option value="blue">Blue</option>
//                     <option value="indigo">Indigo</option>
//                     <option value="violet">Violet</option>
//                 </select>

//                 {/* <input type="submit" value="Click" /> */}
//                 <button>Submit</button>
//             </form>
//         </section>
//     )
// }

// ReactDOM.createRoot(document.getElementById('root')).render(<App />);






import React from 'react';
import ReactDOM from 'react-dom/client';


function App() {

    function signUp(formData) {

        // shortcut
        // console.log(Object.fromEntries(formData))
        // one problem checkbox idhr ek hi value lera h checkbox ki
        // const dietaryData = formData.getAll("dietaryRestrictions")
        // console.log(dietaryData)

        //add alll data
        //     const data=Object.fromEntries(formData)
        //     const dietaryData = formData.getAll("dietaryRestrictions")
        //     const allData={
        //         ...data,
        //         DR:dietaryData
        //     }

        //     console.log(allData)
        // }

        const data = Object.fromEntries(formData)
        const dietaryRestrictions = formData.getAll("dietaryRestrictions")
        const allData = {
            ...data,
            dietaryRestrictions
        }
        console.log(allData)



    }

    return (
        <section>
            <h1>Signup form</h1>

            <form action={signUp}>
                <label htmlFor="email">Email:</label>
                <input id="email" defaultValue="joe@schmoe.com" type="email" name="email" placeholder="joe@schmoe.com" />
                <br />
                <label htmlFor="password">Password:</label>
                <input id="password" defaultValue="password123" type="password" name="password" />
                <br />

                <label htmlFor="description">Description:</label>
                <textarea name="description" id="description" defaultValue="This is a description"></textarea>


                <fieldset>
                    <legend>Employment Status:</legend>
                    <label>
                        <input type="radio" name="employmentStatus" value="Unemployed" />
                        Unemployed
                    </label>

                    <label>
                        <input type="radio" name="employmentStatus" value="vegan" />
                        Vegan
                    </label>

                    <label>
                        <input type="radio" name="employmentStatus" value="gluten-free" defaultChecked={true} />
                        Gluten-free
                    </label>
                </fieldset>




                <fieldset>
                    <legend>Dietary restrictions:</legend>
                    <label>
                        <input type="checkbox" name="dietaryRestrictions" value="kosher" />
                        Kosher
                    </label>

                    <label>
                        <input type="checkbox" name="dietaryRestrictions" value="Part-time" />
                        Part-time
                    </label>

                    <label>
                        <input type="checkbox" name="dietaryRestrictions" value="Full-time" defaultChecked={true} />
                        Full-time
                    </label>
                </fieldset>

                <label htmlFor="favColor">What is your favorite color?</label>
                <select name="favColor" id="favColor" defaultValue="blue" required>
                    <option value="" disabled>--Choose a color--</option>
                    <option value="red">Red</option>
                    <option value="orange">Orange</option>
                    <option value="yellow">Yellow</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="indigo">Indigo</option>
                    <option value="violet">Violet</option>
                </select>

                <button>Submit</button>
            </form>
        </section>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);




// Here, DR is just a logical key in our object. 
// React doesn’t “know” this name came from checkboxes — we assign it.
// Only the checkboxes’ values are put under DR because we specifically called formData.getAll("dietaryRestrictions").

//spread operator

// Why other fields don’t get updated
// DR only gets the checkbox array.
// Other fields like email, password, favColor remain untouched in the object because:
// We didn’t call formData.getAll on them
// We didn’t overwrite their keys
// That’s why only the checkboxes are “updated” in allData[DR].
