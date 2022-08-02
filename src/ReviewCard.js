// import VoteToStars from "./VotetoStars"
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';

import { Button, Icon, IconButton, Tooltip } from "@mui/material"

function ReviewCard({review, setReviews}){
    const {id} = review

        function onDeleteClick(){
            fetch(`https://arcane-wildwood-99577.herokuapp.com/movies/${id}`,{
                method: "DELETE",
        })
            .then(res=>res.json())
            setReviews([])
        }   

    return(
        <div className="rc">
            <div>

            <img className="rc-image"  src={review.image} alt={review.title}/>
            <h1 className="rc-title" key={review.id}>{review.title}
            {/* <div style={{border:"solid yellow", position:"absolute", width:"100%"}} > */}
            <Tooltip title="Delete">
                <IconButton type="button" color="error" onClick={onDeleteClick}  >
                    <HighlightOffOutlinedIcon/>
                </IconButton>
            </Tooltip>
                </h1>
            {/* </div> */}

            </div>
                {/* <div className="rc-mid" > */}
                    {/* <div className="rc-rating" ><VoteToStars review={review}/></div> */}
                {/* </div> */}
                {/* <h2 className="rc-review" >"{review.reviewText}"</h2> */}
        </div>
    )
}
export default ReviewCard