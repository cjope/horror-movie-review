// import VoteToStars from "./VotetoStars"
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';

import { Button, Icon, IconButton, Tooltip } from "@mui/material"
import { useHistory } from 'react-router-dom';

function ReviewCard({review, setReviews}){
    const history = useHistory()

    function reloadPage(){
        history.go(0)
    }

        function onDeleteClick(e){
            fetch(`https://gentle-wildwood-75759.herokuapp.com/movies/${e}`,{
                method: "DELETE",
                header: 'Access-Control-Allow-Origin:*',

        })
            setTimeout(reloadPage(), 5000)
        }   

    return(
        <div className="rc">
            <div>

            <img className="rc-image"  src={review.image} alt={review.title}/>
            <h1 className="rc-title" key={review.id}>{review.title}
            {/* <div style={{border:"solid yellow", position:"absolute", width:"100%"}} > */}
            <Tooltip title="Delete">
                <IconButton type="button" value={review.site_id} color="error" onClick={e=>onDeleteClick(review.id)}  >
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