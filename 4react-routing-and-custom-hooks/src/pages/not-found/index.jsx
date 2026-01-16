import { Link } from "react-router-dom"

function NotfoundPage(){
    return(
        <div>
            <h3>This page doesnt exist</h3>
            <Link to='/recipe-list' >Back to reipe list page</Link>
        </div>
    )
}

export default NotfoundPage