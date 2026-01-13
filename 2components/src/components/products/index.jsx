// import ProductItem from "./components/product-item";

// const dummyProductData = ['Product 1', 'Product 2', 'Product 3']

// // function ProductList(props) {
//     // console.log(props);//props return object
//     // const { name, city } = props

//     //if u want to destructure directly
// function ProductList({name,city}) {
//     return (
//         <div>
//             <h3>Ecommerce Project</h3>
//             {/* <ProductItem/> */}
//             <h4>Name is {name},he belongs to city {city}</h4>
//             <ul>
//                 {
//                     dummyProductData.map((item, index) => (
//                         <li key={index}>{item}</li>
//                     ))
//                 }
//             </ul>

//             {/* but as we studied we shoukd not use index as key as imagine if we delete a item then index will change next element will cone to its place so we use key={item} */}
//         </div>
//     )
// }

// export default ProductList;

//app->product list->product item->button components   like a chain
//child component parent child relationship,Nested components

//fuction,render,html ,if any js concept or dynamic use {}


// ----------------------------------------------------------------------------------------------------------

// // now want dummy data to get from App.jsx
// //const dummyProductData = ['Product 1', 'Product 2', 'Product 3']
// //lets understand conditionalrendering
// import ProductItem from "./components/product-item";
// import './style.css';

// function ProductList({ name, city, listOfProducts }) {
//     return (
//         <div>
//             <h3 className="title">Ecommerce Project</h3>
//              <h4>Name is {name},he belongs to city {city}</h4>
//             <ul>
//                 {
//                     listOfProducts.map((item, index) => (
//                         <ProductItem singleProductItem={item} key={index} />
//                     ))
//                 }
//             </ul>
//         </div>
//     )
// }

// export default ProductList;

// is the order in which we pass key value and the order of rceiving that props should be same or can be anything
// order does NOT matter ✅
// In React, props are passed as an object, not as positional values
// eact matches props by key, not by position — unlike function parameters in normal JS.


// ----------------------------------------------------------------------------------------------------------


// In React, capitalization matters only when something is used as JSX.
// When you write <ProductList />, React knows it is a component because it starts with a capital letter.
// If you wrote <productList />, React would think it is an HTML tag and it would fail.
// But when you call a function like renderTextBlock(flag), it is just normal JavaScript.
// React does not treat it as a component — it is simply a function returning JSX.
// So it can be written in lowercase or any naming style.
// This means you control how it is used.
// JSX usage requires Capital letters.
// Normal JS function calls do not.



// conditional rendering three ways 
//first
// import ProductItem from "./components/product-item";
// import './style.css';

// function ProductList({ name, city, listOfProducts }) {
//     const flag = false;

//     return (
//         <div>
//             <h3 className="title">Ecommerce Project</h3>
//             {flag ? (<h4>Name is {name},he belongs to city {city}</h4>) : (
//                 <h4>Hello world</h4>
//             )} 
//             <ul>
//                 {
//                     listOfProducts.map((item, index) => (
//                         <ProductItem singleProductItem={item} key={index} />
//                     ))
//                 }
//             </ul>
//         </div>
//     )
// }
//export default ProductList;


//second
// import ProductItem from "./components/product-item";
// import './style.css';

// function ProductList({ name, city, listOfProducts }) {
//     const flag = true;

//     function renderTextBlock(getFlag) {
//         return getFlag ? (<h4>Name is {name},he belongs to city {city}</h4>) : (
//             <h4>Hello world</h4>
//         )
//     }

//     return (
//         <div>
//             <h3 className="title">Ecommerce Project</h3>
//             {/* lets put it in func as for complex code it is not good*/}
//             {renderTextBlock(flag)}
//             <ul>
//                 {
//                     listOfProducts.map((item, index) => (
//                         <ProductItem singleProductItem={item} key={index} />
//                     ))
//                 }
//             </ul>
//         </div>
//     )
// }
// export default ProductList;


//third
// import ProductItem from "./components/product-item";
// import './style.css';

// function ProductList({ name, city, listOfProducts }) {
//     const flag = false;

//     const renderTextBlock = flag ?
//         <h4>Name is {name},he belongs to city {city}</h4> :
//         (<h4>Hello world</h4>)


//     return (
//         <div>
//             <h3 className="title">Ecommerce Project</h3>
//            {renderTextBlock}
//             <ul>
//                 {
//                     listOfProducts.map((item, index) => (
//                         <ProductItem singleProductItem={item} key={index} />
//                     ))
//                 }
//             </ul>
//         </div>
//     )
// }
// export default ProductList;


// // not recommended way
// import ProductItem from "./components/product-item";
// import './style.css';

// function ProductList({ name, city, listOfProducts }) {
//     const flag = false;

//     let renderTextBlock = null;

//     if (flag) {
//         renderTextBlock = <h4>Name is {name},he belongs to city {city}</h4>
//     } else {
//         renderTextBlock = <h4>Hello world</h4>
//     }
//     return (
//         <div>
//             <h3 className="title">Ecommerce Project</h3>
//             {renderTextBlock}
//             <ul>
//                 {
//                     listOfProducts.map((item, index) => (
//                         <ProductItem singleProductItem={item} key={index} />
//                     ))
//                 }
//             </ul>
//         </div>
//     )
// }
// export default ProductList;


// // -----------------------------------------------------------------------------------------------------------

// // useState
// import { useState } from "react";
// import ProductItem from "./components/product-item";
// import './style.css';

// function ProductList({ name, city, listOfProducts }) {
//     // const flag = false;//here this is static lets make it dynamic 

//     //useState
//     const initialState=false;
//     const [flag,setFlag]=useState(initialState);

//     function handleToggleText(){
//         return(
//             setFlag(!flag)
//         )
//     }

//     return (
//         <div>
//             <h3 className="title">Ecommerce Project</h3>
//             <button onClick={handleToggleText}>Toggle Text</button>
//            {
//             flag?(<h4>{name} and {city}</h4>):(<h4>Hello</h4>)
//            }
//             <ul>
//                 {
//                     listOfProducts.map((item, index) => (
//                         <ProductItem singleProductItem={item} key={index} />
//                     ))
//                 }
//             </ul>
//         </div>
//     )
// }

// export default ProductList;


// -----------------------------------------------------------------------------------------------------------

// useEffect
// i want thatwhen count is 10 some side effects multipke ways are there lets try with useEffect
import { useEffect, useState } from "react";
import ProductItem from "./components/product-item";
import './style.css';

function ProductList({ name, city, listOfProducts }) {

    const initialState = true;
    const [flag, setFlag] = useState(initialState);
    const [count,setCount] = useState(0);
    const [changeStyle,setChangeStyle]=useState(false);

    function handleToggleText() {
        return (
            setFlag(!flag)
        )
    }

    function handleIncreseCount(){
        return(
            setCount(count+1)
        )
    }

    useEffect(() => {
        setFlag(!flag)
        console.log("run only once page load");

        return ()=>{
            console.log('component is unmounted->Some sideEffects here also')//use return then it will behave like componentWillUnmount
        }

    }, []); //this will run as page load as there is no dependency([]part) imagine it like componentDidMount()


    useEffect(()=>{
     console.log("count changes");
     if(count=== 10) setChangeStyle(true)
    },[count])//means each time count increse the function called and count chnages will print like componetDidUpdate

    console.log(changeStyle);
    

    return (
        <div>
            <h3 className="title">Ecommerce Project</h3>
            <button onClick={handleToggleText}>Toggle Text</button>
            {
                flag ? (<h4>{name} and {city}</h4>) : (<h4>Hello</h4>)
            }
            <div>
                <button style={{backgroundColor:changeStyle?'black': 'white', color:changeStyle?'white':'black'}} onClick={handleIncreseCount}>Increase Count</button>
                <p>Count is {count}</p>
            </div>
            <ul>
                {
                    listOfProducts.map((item, index) => (
                        <ProductItem singleProductItem={item} key={index} />
                    ))
                }
            </ul>
        </div>
    )
}

export default ProductList;