import { NavLink } from "react-router-dom"
import NavButtons from "./NavButtons"

function NavBar(){
    return(
        <div className="nav-bar">
                <NavLink className="nav-link" to="/Reviews">Reviews</NavLink>
                <NavLink className="nav-link" to="/">Browse</NavLink>
                <NavButtons/>
                <h1 className="nav-title">HorroReview</h1>
        </div>
    )
}

export default NavBar