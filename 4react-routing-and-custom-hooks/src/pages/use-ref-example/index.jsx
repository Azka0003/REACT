import { useEffect, useRef } from "react"

// useRef is helpful to accessing ur dom elements to manipulating ur dom elements and this will always return a mutable object
// useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). 
// The returned object will persist for the full lifetime of the component.
// Note that useRef() is useful for more than the ref attribute. It’s handy for keeping any mutable value around similar to how you’d use instance fields in classes.
// When to use which:
// useState → When you want UI to update with value change (counter shown on screen)
// useRef → When you want to track value without updating UI (counting clicks internally, previous values, timers)


export default function Hooks() {
    const countValue = useRef(0)
    const inpurRefElement = useRef();
    const divElementRef = useRef();
    // inpurRefElement.current.focus();

    function handleClick() {
        countValue.current++
        console.log(countValue.current);
    }


    useEffect(() => {
        inpurRefElement.current.focus();

        const getDivReference = divElementRef.current;
        console.log(getDivReference);

        getDivReference.style.color = "red";

        setTimeout(() => {
            getDivReference.style.color = "green"

            setTimeout(() => {
                getDivReference.style.color = "blue"

                setTimeout(() => {
                    getDivReference.style.color = "orange"
                }, 1000)

            }, 1000)

        }, 2000);//wait for 2 sec

        setTimeout(() => {
            getDivReference.style.color = "pink"
        }, 1000)

// first red then it see green and pink in parrallet and pink have less value so pink execute first then back green blue orange

    }, [])

    return (
        <div>
            <h1>Use ref,use callback and use memo</h1>
            <button onClick={handleClick}> Submit </button>
            <p>{countValue.current}</p>  {/*UI is not updating u can see*/}
            <input type="text" name="name" placeholder="Enter ur name" ref={inpurRefElement} />

            <div ref={divElementRef}>Some Random Text</div>//as page load it will display
        </div>
    )

    // inpurRefElement.current.focus(); 
    //"The return statement already executed and returned the JSX, so the code after return never runs - that's why we need useEffect."
    // Actually, the commented line would run BEFORE return (if placed before return), but it would fail because the DOM element doesn't 
    // exist yet during render.useEffect runs AFTER the JSX is rendered and DOM is created(button h1 etc), so the input element exists 
    // and ref.current is available.

}



// Nested setTimeout creates a sequence - second timeout starts counting AFTER first timeout completes.no matter who have more or less time
//  So timings are cumulative (2s + 1s = 3s total).


/* getDivReference.style.color="red";
      setTimeout(()=>{
          getDivReference.style.color="green"
      },2000);//wait for 2 sec
      setTimeout(()=>{
              getDivReference.style.color="blue"
          },1000)

Parallel setTimeout - How It Works (3 Lines)
Timeline:
Immediately (0s): Color becomes RED
After 1 second: Second setTimeout executes → Color becomes BLUE (1000ms)
After 2 seconds: First setTimeout executes → Color becomes GREEN (2000ms)

Flow: RED (instant) → BLUE (at 1s) → GREEN (at 2s)
Key Point: Both setTimeout start counting at the same time (parallel, not nested). Whichever has shorter delay executes first. So 1000ms timeout runs before 2000ms timeout.
asynchronous concept it will not wait go ahead*/