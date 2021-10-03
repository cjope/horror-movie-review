import { NavLink } from "react-router-dom"

function NavBar(){

    return(
        <div className="nav-bar">
            <div className="nav-links">
                <NavLink className="nav-link" activeClassName="active" to="/Reviews">Reviews</NavLink>
                <NavLink className="nav-link" activeClassName="active" to="/Movies">Browse</NavLink>                
            </div>
            <div className="nav-neg">
                <a className="nav-title" href="./Movies">HorroReview</a>
            </div>
        </div>
    )
}

export default NavBar