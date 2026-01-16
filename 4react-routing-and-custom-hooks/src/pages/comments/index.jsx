// function CommentsList(){
//     return(
//         <div>
//             <h1>Comments List Page</h1>
//         </div>
//     )
// }
// export default CommentsList;


import useFetch from "../../custom_hooks/use-fetch";

function CommentsList() {

    const { data, loading, error } = useFetch(
        "https://dummyjson.com/comments");

    if (loading) return <h1>Fetching comments! Please wait</h1>

    return (
        <div>
            <h1>Comments List Page</h1>
            <ul>
                {
                    data?.comments?.length > 0 
                    ?
                    data?.comments.map((commentItem)=>(
                        <div>
                            <label>{commentItemItem?.body}</label>
                            <p>{commentItem?.likes}</p>
                        </div>
                    ))
                    : null
                }
            </ul>
        </div>
    )
}

export default CommentsList;