import React from "react";

export default function App1(){
    const [messages,setMessages]=React.useState(["a","b"])
    

    function determineText(){
        if(messages.length===0){
            return "You're all caught up!"
        }else if (messages.length===1){
            return "You have 1 unreda message"
        }else{
            return `You have ${messages.length} unread messages`
        }
    }


    return(
        <div>
            <h1>{determineText()}</h1>
        </div>
    )
}

// u can use nested ternary etc also