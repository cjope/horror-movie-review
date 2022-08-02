import { NavLink } from "react-router-dom"

function NavBar(){

    return(
        <div className="nav-bar">
            <div className="nav-links">
                <NavLink className="nav-link" activeClassName="active" to="/Queue">Queue</NavLink>
                <NavLink className="nav-link" activeClassName="active" to="/Movies">Movies</NavLink>                
            </div>
            {/* <div className="nav-neg"> */}
                {/* <a className="nav-title" href="./"> */}
                <NavLink className="nav-neg" activeClassName="active" to="/">               

                    <p style={{ color:"white", height:"50px", fontSize:38, paddingRight:"1%"}}>ADD TO</p>
                    <img style={{height:"50px"}} src="https://www.plex.tv/wp-content/themes/plex/assets/img/plex-logo.svg" alt="plex-logo" ></img>
                </NavLink>
                {/* </a> */}
            {/* </div> */}
        </div>
    )
}

export default NavBar