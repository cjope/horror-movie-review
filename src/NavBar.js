import { NavLink } from "react-router-dom"

function NavBar({handleNextPage, handlePreviousPage}){
    return(
        <div className="nav-all">
            <div className="nav-all" style={{display:"flex", flex:5}}>
                <NavLink className="nav-bar" to="/">Home</NavLink>
                <NavLink className="nav-bar" to="/Movies">Movies</NavLink>
                <NavLink className="nav-bar" to="/ReviewForm">Write a Review</NavLink>
                {window.location.pathname === "/Movies"?
                <span style={{display:"flex"}}>
                <button className="button" style={{minWidth:"100px", marginTop:"6%", marginBottom:"6%", marginLeft:"40px"}}onClick={handlePreviousPage}>Previous</button>
                <button className="button" style={{minWidth:"100px", marginTop:"6%", marginBottom:"6%"}} onClick={handleNextPage}>Next</button></span>:<></>}
                {/* This is buggy - buttons do not render right away and need a page refresh */}
                </div>
        </div>
    )
}

export default NavBar