import { useContext, useState } from "react"
import { GlobalContext } from "../../context"

function ConetxtTextComponent() {

//3.lets acess theme here
// const getSateFromGlobalComtext = useContext(GlobalConext)//export const GlobalConext=createContext(null); this line
// console.log(getSateFromGlobalComtext);

// direct destructure
 const {theme} = useContext(GlobalContext)

    return <h1 
       style={{
        fontSize: theme==='light' ? '50px' : '100px',
        backgroundColor: theme === 'light'?'#fff':'#000',
        color: theme==='light'?'blue':'yellow',
       }}
    >Azka</h1>
}

export default ConetxtTextComponent

