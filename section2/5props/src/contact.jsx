// export default function Contact(props){

//     // console.log(props)
//     // tm dekh skte ho saari value ek hi mein pass ho gyin 4 baar call kiya h to 4 baar hr value

////     const person = {
////     img: "src/Section2/challenge2/images/fluffykins.png",
////     name: "Fluffykins",
////     phone: "(212) 555-2345",
////     email: "fluff@me.com"
//// }
//// console.log(person)

// // const {img,name}=person
// // console.log(name)
// // console udhr h ni isiliy =idhr run krke dekh lia


//     return(
//           <article className="contact-card">
//                 <img 
//                 // receiving props
//                     src={props.img}
//                     alt="Photo of Mr. Whiskerson"
//                 />
//                 <h3>{props.name}</h3>
//                 <div className="info-group">
//                     <img 
//                         src="src/Section2/challenge2/images/phone-icon.png" 
//                         alt="phone icon" 
//                     />
//                     <p>{props.phone}</p>
//                 </div>
//                 <div className="info-group">
//                     <img 
//                         src="src/Section2/challenge2/images/mail-icon.png" 
//                         alt="mail icon"
//                     />
//                     <p>{props.email}</p>
//                 </div>
//             </article>
//     )
// }


// here when u pass props in conatct function then how it 
// return each var value four because in app we called the
// function 4 times

// lets destructure props in react or here


export default function Contact({img,name,phone,email}){
    
    return(
          <article className="contact-card">
                <img 
                // receiving props
                    src={img}
                    alt="Photo of Mr. Whiskerson"
                />
                <h3>{name}</h3>
                <div className="info-group">
                    <img 
                        src="src/images/phone-icon.png" 
                        alt="phone icon" 
                    />
                    <p>{phone}</p>
                </div>
                <div className="info-group">
                    <img 
                        src="src/images/mail-icon.png" 
                        alt="mail icon"
                    />
                    <p>{email}</p>
                </div>
            </article>
    )
}