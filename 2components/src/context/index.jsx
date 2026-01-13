import { createContext, useState } from "react";

//create the context
export const GlobalContext = createContext(null);

// create the global state that receive component as a children
function GlobalState({ children }) {

    //whatever var u want to pass as globally
    const [theme, setTheme] = useState("light")

    function handleChnageThemeOnButtonClick() {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return <GlobalContext.Provider value={{ theme, handleChnageThemeOnButtonClick }}>{children}</GlobalContext.Provider>
}

export default GlobalState


//2. The value passed to the value prop can be accessed by all children wrapped inside GlobalState.”