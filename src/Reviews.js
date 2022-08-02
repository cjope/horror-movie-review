import { useEffect, useState } from "react"
import ReviewCard from "./ReviewCard"
import { Grid } from "semantic-ui-react"

function Reviews(){
    const [reviews, setReviews]=useState([])
    
    useEffect(()=>{
         fetch("https://gentle-wildwood-75759.herokuapp.com/movies")
        .then(res=>res.json())
        .then(data => setReviews(data))
    },[reviews.length])

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