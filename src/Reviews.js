import { useEffect, useState } from "react"
import ReviewCard from "./ReviewCard"
import { Grid } from "semantic-ui-react"

function Reviews(){
    const [reviews, setReviews]=useState([])

    useEffect(()=>{
         fetch("http://localhost:3001/reviews")
        .then(res=>res.json())
        .then(data => setReviews(data))   
    },[])

    const listReviews = reviews.map((review)=>(<ReviewCard key={review.id} review={review}/> ))

    return(
        <div className="reviews">
        <Grid style={{display:"flex", justifyContent:"center"}} >
            {listReviews}
        </Grid>
        </div>
    )
}
export default Reviews