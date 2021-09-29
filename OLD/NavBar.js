import { NavLink } from "react-router-dom"

function NavBar(){
    return(
        <div className="nav-all">
            <div className="nav-all" style={{display:"flex", flex:5}}>
                <NavLink className="nav-bar" to="/Reviews">Reviews</NavLink>
                <NavLink className="nav-bar" to="/">Browse</NavLink>
                </div>
        </div>
    )
}

export default NavBar