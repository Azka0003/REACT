//before-level2
// import Joke from "./Joke"

// export default function App() {

//     return (
//         <main>
//             {/* 5 instances of joke */}
//             <Joke
//                 punchline="I can't wait to see her face light up when she opens it."
//                 upvotes={10}
//                 isPun={true}
//                 // array of objects
//                 comments={
//                     [
//                         {author: "j", text: "m", title: "o"},
//                         {author: "k", text: "n", title: "p"}
//                     ]
//                 }
//             />
//             <Joke
//                 setup="How did the hacker escape the police?"
//                 punchline="He just ransomware!"
//                 upvotes={10}
//                 isPun={true}
//             />
//             <Joke
//                 setup="Why don't pirates travel on mountain roads?"
//                 punchline=" Scurvy."
//                 upvotes={10}
//                 isPun={true}
//             />
//             <Joke
//                 setup="Why do bees stay in the hive in the winter?"
//                 punchline="Swarm."
//                 upvotes={10}
//                 isPun={true}
//             />
//             <Joke
//                 setup="What's the best thing about Switzerland?s"
//                 punchline="I don't know, but the flag is a big plus!"
//                 upvotes={10}
//                 isPun={false}
//             />
//         </main>
//     )
// }


//after-level3
// Map + props
import Joke from "./Joke";
import jokesData from "./jokesData"

// console.log(jokesData)

export default function App() {
    const jokeElements = jokesData.map((joke) => {
        return <Joke setup={joke.Setup} 
        punchline={joke.Punchline}
        />
    })

    return (
        <main>
           { jokeElements }
        </main>
    )
}


//🔑 Rule
// For React Components → <ComponentName /> (must start with a capital letter).
// For variables, arrays, expressions → {variableName} (no < />).


// No matter how much new data is added, there is no need to write it manually here.
// You just add the new data in the data file, and this page’s code will remain the same.
// This is similar to how new data is added in a database.



// LEVEL 3: DATA-DRIVEN UI (REAL REACT 🔥)
// All three approaches fall under props in React.
// In the first case, props are hard-coded, which leads to repetition.
// In the second case, the component is reused but still receives the same static props.
// In the final approach, props are data-driven (via arrays + map), making the component truly reusable and scalable.