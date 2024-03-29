import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';

import { IconButton, Tooltip } from "@mui/material"

function ReviewCard({movie, show, type, movies, shows}){

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
            <div >
                <p style={{ color:"rgb(69, 69, 69)", textAlign:"center", fontSize:"smaller"}} >{new Date(movie.updated_at).toLocaleDateString()}</p>
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
                <p style={{ color:"rgb(69, 69, 69)", textAlign:"center", fontSize:"smaller"}} >{new Date(show.updated_at).toLocaleDateString()}</p>
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