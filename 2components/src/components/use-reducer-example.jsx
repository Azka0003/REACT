// import { useReducer } from "react"

// const initialState = {
//     showTextFlag: false,
//     changeTextStylesFlag: false
// }

// const HIDE_TEXT = 'HIDE_TEXT'
// const SHOW_TEXT = 'SHOW_TEXT'
// const CHANGE_TEXT_STYLE = 'CHANGE_TEXT_STYLE'

// function reducer(state, action) {
//     switch (action.type) {
//         case HIDE_TEXT:
//             console.log(state,action);
//             return {
//                 ...state,
//                 showTextFlag:false
//             };
//         case 'SHOW_TEXT':
//             return state;
//         case CHANGE_TEXT_STYLE:
//             return state;

//         default:
//             return state;
//     }
// }

// export default function UseReducerExample() {

//     const [state, dispatch] = useReducer(reducer, initialState)

//     return (
//         <div>

//             <h1>Use Reducer Hook Example</h1>
//             <button onClick={() => dispatch({ type: HIDE_TEXT })}>Hide text</button>
//             <button onClick={() => dispatch({ type: SHOW_TEXT })}>Show text</button>
//             <button onClick={() => dispatch({ type: CHANGE_TEXT_STYLE })}>Toggle text style</button>
//         </div>
//     )
// }

// // Task:
// // i want to show text when click on show button hode text and chnage color style





import { useReducer } from "react"

const initialState = {
    showTextFlag: false,
    changeTextStylesFlag: false
}

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
                changeTextStylesFlag: !state.changeTextStylesFlag
            };

        default:
            return state;
    }
}

export default function UseReducerExample() {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            {
             state?.showTextFlag ?
             <h3 style={{ backgroundColor: state?.changeTextStylesFlag ? "black" : "red" 

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
// i want to show text when click on show button hode text and chnage color style