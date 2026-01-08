// export default function Entry(props) {
//     return (
//         <article className="journal-entry">
//             <div className="main-image-container">
//                 <img className="main-image"
//                     src={props.entry.img.src}
//                     alt={props.entry.img.alt}
//                     width="50px" />
//             </div>
//             <div>
//                 <img src="/src/images/marker.png" alt="map marker icon" />
//                 <span>{props.entry.country}</span>
//                 <a href={props.entry.googleMapsLink}>View on Google Maps</a>
//                 <h2>{props.entry.title}</h2>
//                 <p>{props.entry.dates}</p>
//               <p> {props.entry.text}  </p>
//                </div>
//         </article>
//     )
// }




         

// // now i want to do this same with some different info below but if react is reusable then it doesnt make sense copy and paste or change inside info 
// // situation is like structure is same but content is different
// // as i can see if i call entry again then same data will come as hard coded
// // so we do data driven and here concept of props comes

// // why {} in prp.img q ki js hi to var ko deal krta h nomral to waise hi output aa jata h plain str ki trha




export default function Entry(props) {
    return (
        <article className="journal-entry">
            <div className="main-image-container">
                <img className="main-image"
                    src={props.img.src}
                    alt={props.img.alt}
                    width="50px" />
            </div>
            <div>
                <img src="/src/images/marker.png" alt="map marker icon" />
                <span>{props.country}</span>
                <a href={props.googleMapsLink}>View on Google Maps</a>
                <h2>{props.title}</h2>
                <p>{props.dates}</p>
              <p> {props.text}  </p>
               </div>
        </article>
    )
}




         
