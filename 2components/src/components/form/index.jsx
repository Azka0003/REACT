// import { useState } from "react"
// export default function FormComponent(){

//     const [nameValue,setNameValue]=useState("")

//     function handleInputChange(event) {
//         console.log(event);
//         const {value} =event.target
//         // setNameValue(event.target.value)
//         setNameValue(value)
//     }

//     return(
//         <div>
//             <h1>Form</h1>
//             <input
//             type="text"
//             // value={"Azka"} 
//             value={nameValue} 
//             name="name"
//             id="name"
//             placeholder="Enter your name"
//             onChange={handleInputChange}
//             />
//         </div>
//     )
// }

// ------------------------------------------------------------------

//onSubmit
// import { useState } from "react"
// export default function FormComponent() {

//     const [nameValue, setNameValue] = useState("")
//     const [emailValue, setEmailValue] = useState("")

//     function handleInputChange(event) {
//         console.log(event);
//         const { value } = event.target
//         setNameValue(value)
//     }


//     function handleEmailChange(event) {
//         console.log(event);
//         const { value } = event.target
//         setEmailValue(value)
//     }


//     function handleSubmit(event) {
//         event.preventDefault();

//         //call the api and pass the name value
//         console.log(nameValue, ": nameValue")
//         console.log(emailValue, ": emailValue")

//     }

//     return (
//         <div>
//             <h1>Form</h1>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     value={nameValue}
//                     name="name"
//                     id="name"
//                     placeholder="Enter your name"
//                     onChange={handleInputChange}
//                 />

//                 <input
//                     type="email"
//                     value={emailValue}
//                     name="email"
//                     id="email"
//                     placeholder="Enter your email"
//                     onChange={handleEmailChange}
//                 />

//                 <button type="submit">Submit</button>
//             </form>
//         </div>
//     )
// }


// “Let’s learn how to handle dynamic forms.
// If a form has 10 or more input fields, creating a separate useState and handler for each field is not a good approach.
// Instead, we can use a single state object and a common handler to manage all fields more efficiently.”
// but here we have multiple ways we learn one of them to resolve this isuue

import { useState } from "react"
export default function FormComponent() {
    // Instead of separate state for name and email, we use ONE object to store all form fields
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    })

    function handleOnChange(event) {
        console.log(event.target.name);

        //destructure
        // Extract both 'name' and 'value' properties from the input that triggered this event
        // 'name' = the name attribute of the input (either "name" or "email")
        // 'value' = what the user typed
        const { name, value } = event.target;

        setFormData({
            // SPREAD OPERATOR (...formData): Copy all existing form data first
            // This is crucial! Without it, when you type in email, the name field would disappear
            // Example: if formData = {name: "John", email: ""} and you type in email,
            // without spreading, you'd lose "John" and only have {email: "new value"}
            ...formData,

            // COMPUTED PROPERTY NAME ([name]): Dynamically update the specific field
            // The square brackets mean "use the VALUE of the 'name' variable as the key"
            // If name="email", this becomes: email: value
            // If name="name", this becomes: name: value
            // This allows ONE handler to work for ALL inputs!
            [name]: value
        })
    }

    function handleSubmit(event) {
        // Prevent the default form submission behavior (which would reload the page)
        event.preventDefault();

        //call the api and pass the name value
        // Now we can access both values from the formData object
        console.log(formData.name, ": nameValue")
        console.log(formData.email, ": emailValue") // Fixed: was "emailValue.email"
    }

    return (
        <div>
            <h1>Form</h1>
            <form onSubmit={handleSubmit}>
                {/* Each input uses formData.name and formData.email to display current values */}
                <input
                    type="text"
                    value={formData.name}
                    name="name"  // This 'name' attribute is what gets captured in event.target.name
                    id="name"
                    placeholder="Enter your name"
                    onChange={handleOnChange}  // Same handler for both inputs!

                    // u van do on a single line also but not recommendd to write again nd again just create one func 
                    // onChange={(event) =>
                    //     setFormData({
                    //         ...formData,
                    //         [event.target.name]: event.target.value
                    //     })
                    // }
                />

                <input
                    type="email"
                    value={formData.email}
                    name="email"  // This 'name' attribute is what gets captured in event.target.name
                    id="email"
                    placeholder="Enter your email"
                    onChange={handleOnChange}  // Same handler for both inputs!
                
                //  onChange={(event) =>
                //         setFormData({
                //             ...formData,
                //             [event.target.name]: event.target.value
                //         })
                //     }
                />

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

// lets dynamic form control or reusable form control so for that crate common-form folder
// imagine u have two fomrs one for login one for register