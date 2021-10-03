import { useEffect, useState } from "react"
import ReviewCard from "./ReviewCard"
import { Grid } from "semantic-ui-react"

function Reviews(){
    const [reviews, setReviews]=useState([])

    useEffect(()=>{
         fetch("http://localhost:3001/reviewArray")
        .then(res=>res.json())
        .then(data => setReviews(data))   
    },[reviews])

    function handleDeleteReview(){
        const updatedReviews = reviews.filter((review)=>review.id)
        setReviews(updatedReviews)
    }

    const listReviews = reviews.map((review)=>(<ReviewCard key={review.id} review={review} onDeleteReview={handleDeleteReview}/> ))

    return(
        <div className="reviews">
        <Grid style={{display:"flex", justifyContent:"center"}} >
            {listReviews}
        </Grid>
        </div>
    )
}
export default Reviews