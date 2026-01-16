//  i want product who have price greater than 10

// import useFetch from "../../hooks/use-fetch";
// function UseMemoExample() {
//     const { data, loading } = useFetch("https://dummyjson.com/products");


//     function filterProductByPrice(getProducts) {
//         return getProducts?.length > 0
//             ? getProducts.filter((singleProductItem) => singleProductItem.price > 10)
//             : [];
//     }


//     if (loading) return <h1>Loading data! Please wait</h1>;

//     console.log(data);

//     return (
//         <div>
//             <h1>Use Memo</h1>
//             <ul>
//                 {filterProductByPrice(getProducts?.products).map((item) => (
//                     <li>{item.title}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// }
// export default UseMemoExample;



// import useFetch from "../../custom_hooks/use-fetch";
// import { useState } from "react";
// function UseMemoExample() {
//     const { data, loading } = useFetch("https://dummyjson.com/products");
//     const [flag, setFlag] = useState(false);


//     function filterProductByPrice(getProducts) {
//         console.log("this function is getting rendered");
//         return getProducts?.length > 0
//             ? getProducts.filter((singleProductItem) => singleProductItem.price > 10)
//             : [];
//     }


//     if (loading) return <h1>Loading data! Please wait</h1>;

//     console.log(data);

//     return (
//         <div>
//             <h1 style={{ color: flag ? "red" : "black" }}>Use Memo</h1>
//             <button onClick={() => setFlag(!flag)}>Toggle Flag</button>
//             <ul>
//                 {filterProductByPrice(data?.products).map((item,index) => (
//                     <li key={index}>{item.title}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// }
// export default UseMemoExample;

/* here u can see each time u toggle 
console.log("this function is getting rendered"); is rendering 
as because page is re rendered so the func also re rendering againa nd again
this is where memo come in picture where u want 
to tell that this toggling has no relation with data fetching or with that func
dont render this fuc or data evry time when we r just
updating the color of text */
// render hum kuch or kr rhe h lekin uski wjha se poora page re rnder hora h performance degrade ofc


import useFetch from "../../custom_hooks/use-fetch";
import { useMemo, useState } from "react";

function UseMemoExample() {
    const { data, loading } = useFetch("https://dummyjson.com/products");
    const [flag, setFlag] = useState(false);


    function filterProductByPrice(getProducts) {
        console.log("this function is getting rendered");
        // console.log(getProducts);
        console.log(data);
        
        return getProducts?.length > 0
            ? getProducts.filter((singleProductItem) => singleProductItem.price > 10)
            : [];
    }

    const memorizedVersion = useMemo(
        () => filterProductByPrice(data?.products), [data?.products]
    )


    if (loading) return <h1>Loading data! Please wait</h1>;

   // console.log(data); Each render → console.log(data) executes → you see {products: Array(30)...} multiple times
// But filterProductByPrice function only runs when data?.products changes (useMemo working!) lets [ut it also in func]

    return (
        <div>
            <h1 style={{ color: flag ? "red" : "black" }}>Use Memo</h1>
            <button onClick={() => setFlag(!flag)}>Toggle Flag</button>
            <ul>
                {memorizedVersion.map((item, index) => (
                    <li key={index}>{item.title}</li>
                ))}
            </ul>
        </div>
    );
}
export default UseMemoExample;


/* use memo and use callbak both used for performance improvents or memory optimaization
useMemo will only recompute the memoized value when one of the deps has changed. dependency in [] 
  const memorizedVersion = useMemo(
        () => filterProductByPrice(data?.products), [data?.products]
    )
based on what dependency we will rerender this particular func
rerender this memorized func only when the data or product data chnaged([data?.products])
 */


/* Use-Memo return memorized version when one of the dependency will change
so this usememo will basically memorize a value
useMemo memorize a value and use callback memorize a fuc or call back */