export default function Joke(props) {
    // console.log(props.upvotes+2)
    // console.log(!props.isPun)
    // console.log(props)
    // console.log(props.comments)

    
    return (
        <>
           {/* {props.setup && <p className="setup">Setup: {props.setup}</p>} */}
            <p style={{display: props.setup ? "block" : "none"}} className="setup">Setup: {props.setup}</p>
            <p className="punchline">PunchLine: {props.punchline}</p>
            <hr />
        </>
    )
}


