import { useReducer } from "react"

const initialState = {
    showTextFlag: false,
    changeTextStylesFlag: false
}

//actions
const HIDE_TEXT = 'HIDE_TEXT'
const SHOW_TEXT = 'SHOW_TEXT'
const CHANGE_TEXT_STYLE = 'CHANGE_TEXT_STYLE'

function reducer(state, action) {
    switch (action.type) {
        case HIDE_TEXT:
            // console.log(state,action);
            return {
                ...state,
                showTextFlag: false
            };
        case 'SHOW_TEXT':
            return {
                ...state,
                showTextFlag: true
            };
        case CHANGE_TEXT_STYLE:
            return {
                ...state,
                changeTextStylesFlag: !state.changeTextStylesFlag//because here u are accessing previous value
            };

        default:
            return state;
    }
}

export default function UseReducerExample() {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            {/*as accessing val so state.*/} {
             state?.showTextFlag ?
             <h3 style={{ backgroundColor: state?.changeTextStylesFlag ? "grey" : "pink" 
             }}>
                Use Reducer Hook Example</h3> : null
            }
            <button onClick={() => dispatch({ type: HIDE_TEXT })}>Hide text</button>
            <button onClick={() => dispatch({ type: SHOW_TEXT })}>Show text</button>
            <button onClick={() => dispatch({ type: CHANGE_TEXT_STYLE })}>Toggle text style</button>
        </div>
    )
}

// Task:
// i want to show text when click on show button hide text and chnage color style


//Optional Chaining (?.) Operator
// If the property before ?. is null or undefined,
//  it stops immediately and returns undefined instead of throwing an error.
//  Perfect for accessing data that might not exist (API responses, optional props).
