import { useEffect, useState } from "react"
import { Card, Grid } from "semantic-ui-react"
import ReviewCard from "./ReviewCard"


function Reviews(){
    const [reviews, setReviews]=useState([])




    useEffect(()=>{
         fetch("http://localhost:3001/reviews")
        .then(res=>res.json())
        .then(data => setReviews(data))   
    },[])


    const listReviews = reviews.map((review)=>(<ReviewCard key={review.id} review={review}/> ))



    return(
                <div >
                    {listReviews}
                </div>
    )
}
export default Reviews