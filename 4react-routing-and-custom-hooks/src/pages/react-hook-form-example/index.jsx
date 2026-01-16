import { useForm } from "react-hook-form"
function ReactHookFormExamplePage() {

    const { register, handleSubmit, formState: { errors },reset } = useForm();

    function onSubmitForm(formData) {
        console.log(formData);//all from data inside this parameter

       reset() // reset form after collecting adta in formData
    }

    return (
        <div>
            <h1>React Hook Form</h1>
            <form onSubmit={handleSubmit(onSubmitForm)}>
                <div>
                    <label>Email</label>
                    <input {...register('email', {
                        required: true,
                        pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,//regex
        message: "Invalid email format"
    }
                    })} type="email" name="email" />
                    {
                        errors.email && errors.email.type === 'required' ?
                            <p style={{ color: 'red', fontWeight: 'bolder', margin: '20px' }}>Email is required!</p>
                            : null
                    }

                </div>
                <div>
                    <label>Password</label>
                    <input {...register('password',{
                        required:true,
                        minLength:8
                    })} type="password" name="password" />
                    {
                         errors.password && errors.password.type === 'required' ?
                            <p style={{ color: 'red', fontWeight: 'bolder', margin: '20px' }}>Password is required!</p>
                            : null
                    }
                    {
                         errors.password && errors.password.type === 'minLength' ?
                            <p style={{ color: 'red', fontWeight: 'bolder', margin: '20px' }}>Password should be atleast 8 characters!
                            Please verify the password you entered🥴</p>
                            : null
                    }
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default ReactHookFormExamplePage;


//register- react-hook-form can track the changes on that particulart value
// register = Tracks input changes without useState
// handleSubmit = Validates and submits form
// formState: { errors } = Destructured for convenience and performance
// useForm = Pre-built hook from library (NOT your custom hook, NOT built-in React hook)
// React Hook Form + Zod = Recommended for cleaner code, better validation, type safety, and industry best practices

// {...register('email')}now if u want to apply some validation then
/* {...register('email',{
...here pass validation like require
 })} */

 /* errors.email && errors.email.type where is this errors come form 
 from here : formState: { errors } */







// import { useForm } from "react-hook-form";

// function ReactHookFormExamplePage() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm();

//   function onSubmitForm(formData) {
//     console.log(formData);

//     reset();
//   }

//   return (
//     <div>
//       <h1>React Hook Form</h1>
//       <form onSubmit={handleSubmit(onSubmitForm)}>
//         <div>
//           <label>Email</label>
//           <input
//             {...register("email", {
//               required: true,
//             })}
//             name="email"
//             type="email"
//           />
//           {errors.email && errors.email.type === "required" ? (
//             <p style={{ color: "red", fontWeight: "bolder", margin: "20px" }}>
//               Email is required
//             </p>
//           ) : null}
//         </div>
//         <div>
//           <label>Password</label>
//           <input
//             {...register("password", {
//               required: true,
//               minLength: 8,
//             })}
//             name="password"
//             type="password"
//           />
//           {errors.password && errors.password.type === "required" ? (
//             <p style={{ color: "red", fontWeight: "bolder", margin: "20px" }}>
//               Password is required
//             </p>
//           ) : null}
//           {errors.password && errors.password.type === "minLength" ? (
//             <p style={{ color: "red", fontWeight: "bolder", margin: "20px" }}>
//               Password should be atleast 8 characters! Please verify the
//               password that you entered
//             </p>
//           ) : null}
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default ReactHookFormExamplePage;