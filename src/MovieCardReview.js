import { toast } from "react-toastify"
import { Typography, Popover } from "@mui/material"
import { useState } from "react"

function MovieCardReview({movie, handleShowInput, fakeRoute, videos}){
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    function handlePopoverOpen (e){
      anchorEl? handlePopoverClose():
      setAnchorEl(e.currentTarget);
    };
  
    const handlePopoverClose = () => {
      setAnchorEl(null);
    };
  
    function submitReview(e){
        setAnchorEl(null)
        if(fakeRoute === "movie"){
            const notAllowed = "minions"
            const title = movie.title?.toLowerCase().includes(notAllowed)
            const newReview={
                title: movie.title,
                image: `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`,
                site_id: movie.id,
            }
            if(movie.title === videos){
                toast.error("Movie already exists on Plex",{icon:"🧑‍🤝‍🧑", autoClose:1000, hideProgressBar:true, position:"top-center", theme:"dark"})
            }else{
            if(title){
                toast.error("Error - Please adjust your taste",{icon:"🤮", autoClose:1000, hideProgressBar:true, position:"top-center", theme:"dark"})
                handleShowInput()
            }
            else{
                fetch("https://gentle-wildwood-75759.herokuapp.com/movies",{ 
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "header": 'Access-Control-Allow-Origin:*',
                    },
                    body: JSON.stringify(newReview),
                })
                toast.success(`${movie.title} has been added to the Queue`,{icon:"🍿", autoClose:1000, hideProgressBar:true, position:"top-center", theme:"dark" })
            }
        }
    }
        else{
            const newReview={
                name: movie.name,
                image: `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`,
                site_id: movie.id,
            }
            fetch("https://gentle-wildwood-75759.herokuapp.com/tvshows",{ 
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "header": 'Access-Control-Allow-Origin:*',
                },
                body: JSON.stringify(newReview),
            })
            toast.success(`${movie.name} has been added to the Queue`,{icon:"🍿", autoClose:1000, hideProgressBar:true, position:"top-center", theme:"dark" })
        }
        handleShowInput()
   
    }

    return(
        <div>
            <button className="mcr-cancel" type="button" onClick={submitReview}>+</button>
        <div
        className="mc" 
        style={{height:"46vh",  backgroundSize:"cover" }}
        aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onClick={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}>
            <Popover
                id="mouse-over-popover"
                sx={{pointerEvents: 'none'}}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{vertical: 'top',horizontal: 'left',
                }}
                transformOrigin={{vertical: 'top',horizontal: 'left',
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
            >
                <Typography sx={{ p: 1 , width:"290px", color:"white"}}>{movie.title}{' ('}{new Date(movie.release_date).getFullYear()}{')'}</Typography>
                <br/>
                <Typography sx={{ p: 1 , width:"290px", color:"white"}}>{movie.overview}</Typography>
            </Popover>
            <img style={{position:"absolute"}} className="mc-container" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title}>{movie.poster_url}</img>
            <button className="mcr-cancel" type="button" onClick={submitReview}>+</button>
        </div>
    </div>
    )
}
export default MovieCardReview