// after learning useState,useEffect



// Task is to render list of users after fetching, on a page load
//fetch data from API
// first u need to store all users in a state
// import { useEffect, useState } from "react";
// export default function Users() {

//     const [userList, setUsersList] = useState([])
//     const [pending,setPending]=useState(true)

//     async function fetchAllUsers() {
//         try {
//             setPending(true)
//             const apiResponse = await fetch('https://dummyjson.com/users');
//             const result = await apiResponse.json();
//             // console.log(result);
//             if (result?.users) {
//                 setPending(false)
//                 setUsersList(result?.users)
//             } else {
//                 setUsersList([]);
//                 setPending(false)
//             }
//         } catch (e) {
//             console.log(e);

//         }
//     }

//     useEffect(() => {
//         fetchAllUsers();
//     }, []);

//     console.log(userList);

//     if(pending) return <h1>Fetching users! Please wait</h1>

//     return (
//         <div>
//             <h1> All Users Lists</h1>
//             <ul>
//                 {  
//                     userList && userList.length > 0 ?(
//                         userList.map(userItem => (
//                         <li key={userItem?.id}>
//                             {/* {userItem}userItem is an object, not a string/number. React cannot directly render objects. */}
//                            <p>{userItem?.firstName} {userItem?.lastName}</p>
//                             </li>
//                             )) 
//                         ):(
//                             <h1>No users found! Please try again</h1>
//                         )
//                 }
//             </ul>
//         </div>
//     );
// } 

// first u can see data is taking some time to render as u can see first (No users found! Please try again) this message is printing and after a few seconds data came
// so to make it better user experience we can manage some kind od loading state so we made pending setPending state etc


// now the requirement change instead of page load data load at button click 
import { useEffect, useState } from "react";
export default function Users() {

    const [userList, setUsersList] = useState([])
    const [pending, setPending] = useState(false)

    async function fetchAllUsers() {
        try {
            setPending(true)
            const apiResponse = await fetch('https://dummyjson.com/users');
            const result = await apiResponse.json();
            // console.log(result);
            if (result?.users) {
                setPending(false)
                setUsersList(result?.users)
            } else {
                setUsersList([]);
                setPending(false)
            }
        } catch (e) {
            console.log(e);

        }
    }

    console.log(userList);

    // function handleFetchListOfUsers() {
    //     fetchAllUsers();
    // }

    if (pending) return <h1>Fetching users! Please wait</h1>

    return (
        <div>
            <h1> All Users Lists</h1>
            {/* <button onClick={handleFetchListOfUsers}>Fetch Us ers List</button> */}
            <button onClick={fetchAllUsers}>Fetch Us ers List</button>
            <ul>
                {
                    userList && userList.length > 0 ? (
                        userList.map(userItem => (
                            <li key={userItem?.id}>
                                {/* {userItem}userItem is an object, not a string/number. React cannot directly render objects. */}
                                <p>{userItem?.firstName} {userItem?.lastName}</p>
                            </li>
                        ))
                    ) : (
                        <h1>No users found! Please try again</h1>
                    )
                }
            </ul>
        </div>
    );
}



