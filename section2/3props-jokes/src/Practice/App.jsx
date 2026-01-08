import Joke from "./Joke"

export default function App() {

    return (
        <main>
            {/* 5 instances of joke */}
            <Joke
                // setup=" I got my daughter a fridge for her birthday."
                punchline="I can't wait to see her face light up when she opens it."
                upvotes={10}
                isPun={true}
                // array of objects
                comments={
                    [
                        {author: "j", text: "m", title: "o"},
                        {author: "k", text: "n", title: "p"}
                    ]
                }
            />
            <Joke
                setup="How did the hacker escape the police?"
                punchline="He just ransomware!"
                upvotes={10}
                isPun={true}
            />
            <Joke
                setup="Why don't pirates travel on mountain roads?"
                punchline=" Scurvy."
                upvotes={10}
                isPun={true}
            />
            <Joke
                setup="Why do bees stay in the hive in the winter?"
                punchline="Swarm."
                upvotes={10}
                isPun={true}
            />
            <Joke
                setup="What's the best thing about Switzerland?s"
                punchline="I don't know, but the flag is a big plus!"
                upvotes={10}
                isPun={false}
            />
        </main>
    )
}


// 🟡 LEVEL 2: COMPONENT REUSE BUT DATA STILL HARDCODED
// Example (calling same component multiple times):
// <Entry />
// <Entry />
// <Entry />


// Concept name
// ⚠️ Static Component Reuse
// ⚠️ Reusable structure, not reusable data