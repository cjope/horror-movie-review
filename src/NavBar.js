import { NavLink } from "react-router-dom"

function NavBar({handleNextPage, handlePreviousPage}){
    return(
        <div className="nav-all">
            <div className="nav-all" style={{display:"flex", flex:5}}>
                <NavLink className="nav-bar" to="/">Reviews</NavLink>
                <NavLink className="nav-bar" to="/Movies">Movies</NavLink>
                <NavLink className="nav-bar" to="/ReviewForm">Write a Review</NavLink>
                {/* This is buggy - buttons do not render right away and need a page refresh */}
                </div>
        </div>
    )
}

export default NavBar