import { NavLink } from "react-router-dom"

function NavBar(){

    return(
        <div className="nav-bar">
                <NavLink className="nav-link" activeClassName="active" to="/Reviews">Reviews</NavLink>
                <NavLink className="nav-link" activeClassName="active" to="/Movies">Browse</NavLink>
                <a className="nav-title" href="./Movies">HorroReview</a>
        </div>
    )
}

export default NavBar