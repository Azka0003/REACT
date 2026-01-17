import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { addNewProduct, fetchListOfProducts } from "./api"
import { useState } from "react";

function ReactQueryDemo() {

    const [productTitle, setProductTitle] = useState("");

    /*  const query = useQuery({
          queryKey: ["productList"],
          queryFn: () => fetchListOfProducts
      }); 
        console.log(query); 
       getting lot of things like methods etc lets destructure it*/

    const getQueryClient =  useQueryClient();
                  //any Name
    const { data: productList, isLoading } = useQuery({//fetch data
        queryKey: ["productList"],
        queryFn: fetchListOfProducts
    });

    const { mutateAsync: handleAddNewProductMutation } = useMutation({//to modify data
        mutationFn: addNewProduct,
        onSuccess: () => {
            getQueryClient.invalidateQueries(["productList"]);//refetch after update
        },
    });

    async function handleAddNewProduct() {
        await handleAddNewProductMutation(productTitle);
        setProductTitle("");
    } //after add we would refetch list updated list for this use queryClient

    if (isLoading) return <h1>Loading products ! Please wait</h1>;

    return (
        <div>

            <div>
                <input
                    name="name"
                    value={productTitle}
                    onChange={(event) => setProductTitle(event.target.value)}
                    placeholder="Enter product title"
                />
                <button
                    onClick={handleAddNewProduct}
                    disabled={productTitle.trim() === ""}//when input field is empty should disabled
                    type="button"
                >
                    Add New Product
                </button>
            </div>

            <h1>React Query Demo</h1>
            <ul>
                {productList?.length > 0 ? (
                    productList.map((product) => (
                        <li key={product.id}>{product.title}</li>
                    ))
                ) : (
                    <h3>No product found</h3>
                )}
            </ul>
        </div>
    )
}

export default ReactQueryDemo




/*What's Special About React Query - Why Use It?
you CAN do this(fetching and adding data) with useState + useEffect, but React Query makes it MUCH better.
invalidateQueries(["productList"]) → automatically refetches updated data
No manual fetch code after add/update/delete
Always shows latest data*/

/*How invalidateQueries Refetches -
Flow Explanation:
Initial: useQuery fetches data from API → stores in cache with key ["productList"]
You add new product: useMutation sends data to API (POST request)
After success: invalidateQueries(["productList"]) marks cache as stale/outdated
Automatic refetch: React Query sees cache is invalid → fetches fresh data from API again (not from cache)
Cache updates: New data from API → replaces old cache → UI shows updated list*/