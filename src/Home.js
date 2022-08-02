import { IconButton, Tooltip } from "@mui/material"
import LiveTvIcon from '@mui/icons-material/LiveTv';
import TheatersIcon from '@mui/icons-material/Theaters';
import { NavLink } from "react-router-dom";

function Home(){
return(
    <div style={{display:"flex", justifyContent:"space-around", marginTop: "5%"}}>
        
    <Tooltip title="TV">
        <NavLink to="/Shows">
            <IconButton>
                <LiveTvIcon style={{fontSize:"500px", color:"white"}}/>
            </IconButton>
        </NavLink>
    </Tooltip>
    
    <Tooltip title="Movies">
        <NavLink to="/Movies">
        <IconButton>
            <TheatersIcon style={{fontSize:"500px", color:"white"}}/>
            </IconButton>
        </NavLink>
    </Tooltip>


    </div>
)
}
export default Home