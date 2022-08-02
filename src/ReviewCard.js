// import VoteToStars from "./VotetoStars"
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';

import { Button, Icon, IconButton, Tooltip } from "@mui/material"
import { useHistory } from 'react-router-dom';

function ReviewCard({movie, show, type, movies, shows}){
    const history = useHistory()

    function reloadPage(){
        history.go(0)
    }

        function onDeleteClick(e){
            let typeName = ""
            type ? typeName = "movies" : typeName = "tvshows"
            fetch(`https://gentle-wildwood-75759.herokuapp.com/${typeName}/${e}`,{
                method: "DELETE",
                header: 'Access-Control-Allow-Origin:*',

        })
        console.log(movies, shows)
        }   

    return(
        <div className="rc">

        {type?
            <div>
                <img className="rc-image"  src={movie.image} alt={movie.title}/>
                <h1 className="rc-title">{movie.title}
                    <Tooltip title="Delete">
                        <IconButton type="button" color="error" onClick={e=>onDeleteClick(movie.id)}  >
                            <HighlightOffOutlinedIcon/>
                        </IconButton>
                    </Tooltip>
                </h1>
            </div>
        :
            <div>
                <img className="rc-image"  src={show.image} alt={show.name}/>
                <h1 className="rc-title">{show.name}
                    <Tooltip title="Delete">
                        <IconButton type="button" color="error" onClick={e=>onDeleteClick(show.id)}  >
                            <HighlightOffOutlinedIcon/>
                        </IconButton>
                    </Tooltip>
                </h1>
            </div>
        }
        </div>
    )
}
export default ReviewCard