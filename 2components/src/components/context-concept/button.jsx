import { useContext } from "react"
import { GlobalContext } from "../../context"

function ConetxtButtonComponent(){

    //3./4. access them
    // const{setTheme,theme} =useContext(GlobalConext)
// return <button onClick={()=>setTheme(theme==='light'?'dark':'light')}>Change Theme</button>

 const{ handleChnageThemeOnButtonClick} =useContext(GlobalContext)
return <button onClick={ handleChnageThemeOnButtonClick}>Change Theme</button>
}

export default ConetxtButtonComponent

// 1.
//Task: for this i made two components button and text:
// When I click a button, I want to change the text color of another component, 
// even though both components have no direct relationship