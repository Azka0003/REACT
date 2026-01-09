import React from "react"

export default function Joke(props) {
    /**
     * Challenge:
     * - Create state `isShown` (boolean, default to `false`)
     * - Add a button that toggles the value back and forth
     */

    const [isShown, setIsshown] = React.useState(false)

    function toggleShown() {
        setIsshown(prevShown => !prevShown)
    }

    console.log(isShown)
    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            {/* {isShown===true && <p>{props.punchline}</p>} */}
            {/* {0 && <p>{props.punchline}</p>} */}
            {isShown ? <p>{props.punchline}</p> : null}




            {/* {!isShown && <button onClick={toggleShown}>Show PunchLine</button>} */}
            {/* mtlb agr isshown false h to button display hi ni hoga as condition work from left to right false and then this so false */}
            {/* {isShown && <button onClick={toggleShown}>Hide PunchLine</button>} */}

            {/* we know more better way ternary */}
            <button onClick={toggleShown}>{isShown ? "Hide" : "Show"} PunchLine</button>
            <hr />
        </div>
    )
}


// issue in && is that if left side condition is not boolean it'll print that as it evaluates firtst then go ahead and see and or etc
// like here imagine if isshown guving value 0 it will print that so it is better to use ternaryy 