import { NavLink } from "react-router-dom"
import NavButtons from "./NavButtons"

function NavBar(){
    return(
        <div className="nav-all">
            <div className="nav-all" style={{display:"flex", flex:5}}>
                <NavLink className="nav-bar" to="/Reviews">Reviews</NavLink>
                <NavLink className="nav-bar" to="/">Browse</NavLink>
                <NavButtons className="nav-bar"/>
                <h1 className="title" style={{fontSize:"50px"}}>HorroReview</h1>
            </div>

        </div>
    )
}

export default NavBar