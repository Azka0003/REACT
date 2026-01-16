// import Counter from "./counter";
// import { useState } from "react";

// export default function UseCallbackExample() {

//     const [countOne, setCountOne] = useState(0);
//     const [countTwo, setCountTwo] = useState(0);

//     return (
//         <div>
//             <h1>Use Callback</h1>
//             <Counter countValue={countOne} onClick={()=>setCountOne(countOne+1)}/>
//             <Counter countValue={countTwo} onClick={()=>setCountTwo(countTwo+1)}/>
//         </div>
//     )
// }


/*When I click only one button, I still see this output in the console:

this is getting rendered 1 () => setCountOne(countOne + 1)
this is getting rendered 0 () => setCountTwo(countTwo + 1)

I am confused because the second (bottom) button was not clicked.
So why is the second Counter component also producing console output?
Even if a re-render happens, shouldn’t the second counter render only when its button is clicked?
Explanation (simple)
Clicking a button does not control rendering.
State change controls rendering.
When I click the first button:
setCountOne updates the state
The parent component re-renders
When the parent re-renders, all its child components re-render
So the second Counter also runs again, even though its button was not clicked
Rendering means the component function runs again,
not that the button was clicked.
That is why the second counter logs output even without clicking its button.
One-line conclusion
Clicking a button updates state, and any state update re-renders the parent component, which causes all child components to re-render unless optimized.*/




import Counter from "./counter";
import { useState,useCallback, memo } from "react";

export default function UseCallbackExample() {

    const [countOne, setCountOne] = useState(0);
    const [countTwo, setCountTwo] = useState(0);
    
  const memoriseSetCountOneFunc = useCallback(
    () => setCountOne(countOne + 1),
    [countOne]
  );

  const memoriseSetCountTwoFunc = useCallback(
    () => setCountTwo(countTwo + 1),
    [countTwo]
  );

    return (
        <div>
            <h1>Use Callback</h1>
            <Counter countValue={countOne} onClick={memoriseSetCountOneFunc}/>
            <Counter countValue={countTwo} onClick={memoriseSetCountTwoFunc}/>
        </div>
    )
}


