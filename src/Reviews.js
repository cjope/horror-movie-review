import { useEffect, useState } from "react"
import ReviewCard from "./ReviewCard"
import { Grid } from "semantic-ui-react"

function Reviews(){
    const [reviews, setReviews]=useState([])
    
    useEffect(()=>{
         fetch("https://movie-review-json.herokuapp.com/reviewArray")
        .then(res=>res.json())
        .then(data => setReviews(data))
    },[reviews.length])

    console.log(reviews)

    const listReviews = reviews.map((review)=>(<ReviewCard key={review.id} review={review} setReviews={setReviews}/> ))

    return(
        <div className="reviews">
        <Grid style={{display:"flex", justifyContent:"center"}} >
            {listReviews}
        </Grid>
        </div>
    )
}
export default Reviews