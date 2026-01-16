import { useLocation } from "react-router-dom";
import useFetch from "../../custom_hooks/use-fetch";
import useWindowResize from "../../custom_hooks/use-window-resize";


// homeWork thsi and form textarea selct etc implement liek input
//uselocalstorage
//useCounter
//useSessionStroag
//useId
//useOutsideClick


function ReceipeList() {
    const location = useLocation();

    const resultFromCustomUseFetchHook = useFetch(
        "https://dummyjson.com/recipes");

    // console.log(resultFromCustomUseFetchHook);
    // console.log(location);

    // lets destructiure what we get
    const{data, loading,error}=resultFromCustomUseFetchHook


    const windowSize=useWindowResize()

    if(loading) return <h1>Fetching recipes! Please wait</h1>

    return (
        <div>
            <h1 style={{ color: windowSize.width < 768 ? "red" : "black" }}
            >Recipe List Page</h1>
            <h3>Current window width is {windowSize.width} and Current height is {windowSize.height} </h3>
            <ul>
                {
                    data?.recipes?.length>0 ? 
                    data?.recipes.map(receipeItem=> <div>
                        <img src={receipeItem?.image} />
                        <label>{receipeItem?.name}</label>
                    </div>)
                    :null
                }
            </ul>
        </div>
    )
}

export default ReceipeList;

// to get router value- location