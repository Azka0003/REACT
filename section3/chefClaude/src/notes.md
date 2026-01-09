event.currentTarget Ka Simple Scene
<form onSubmit={handleSubmit}>  {/* ← YEH HAI event.currentTarget */}
    <input name="ingredient" />
    <button>Add ingredient</button>
</form>
event.currentTarget = Wo element jis par tumne event listener lagaya hai (yahan <form>)

Why We Need It?
const formData = new FormData(event.currentTarget)
FormData ko chahiye form element taaki wo sab inputs collect kar sake!
Agar hum event.currentTarget use nahi karte:
// ❌ WRONG - FormData ko form element chahiye
const formData = new FormData()  // Error! Kaunse form se data lu?

// ✅ CORRECT - Form element diya
const formData = new FormData(event.currentTarget)  // Ab pata hai kis form se data lena 


// 1. User clicks "Add ingredient"
↓
// 2. Form submit hota hai
↓
// 3. React tumhare function ko call karta hai AUR event object pass karta hai
handleSubmit(event)
↓
// 4. event.currentTarget = form element
↓
// 5. FormData ko form element pass karte hain
new FormData(event.currentTarget)
↓
// 6. FormData form ke saare inputs se values collect karta hai

event.currentTarget = "Wo form jis par onSubmit laga hua hai"
FormData ko ye form chahiye taaki wo:

Sab inputs dhundh sake
Unki values nikaal sake
Tumhe easily access de sake


onSubmit = Event type (jab form submit ho)
handleSubmit = Event listener (function jo run hoga)


event is automatically passed by React when event fires
event = An object that React automatically passes to your function when the form submits. It contains all information about the submit event.
You don't pass it manually — React does it for you!


PropertyWhat It Isevent.targetThe element that triggered the event (button clicked)event.currentTargetThe element with the event listener attached (form)
For forms, we use event.currentTarget because we want the <form> element, not the <button>!



event.currentTarget = The <form> element that triggered the submit event
new FormData() = Creates a FormData object that automatically collects ALL input values from the form
formData = An object that stores all form input values as key-value pairs
