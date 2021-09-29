import { useState} from "react"
import {REVIEWS} from "./db.json"
import MovieCard from "./MovieCard"

function ReviewForm({selectedMovie}){

    const [title, setTitle]=useState("")
    const [review, setReview]=useState("")
    const [rating, setRating]=useState()

    // console.log(selectedMovie)

    function handleSubmit(e){
        e.preventDefault()
        fetch('http://localhost:3000/reviews',{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title:title,
            review:review, 
            likes:rating
        }),
    })
    .then(res=>res.json())
    // .then(data=>onNewReview(data))
    console.log(title, review, rating)
    }

    return(
        <div  className="review-form">
            <form onSubmit={handleSubmit}>
                <p >Write a Review for {selectedMovie}</p>
                <textarea className="review-input" type="text" value={review} onChange={(e)=>setReview(e.target.value)}></textarea>
                <div> 
                    <span className="star-rating">
                        <input type="radio" name="rating" value="1" onClick={()=>setRating(1)}/><i></i>
                        <input type="radio" name="rating" value="2"onClick={()=>setRating(2)}/><i></i>
                        <input type="radio" name="rating" value="3"onClick={()=>setRating(3)}/><i></i>
                        <input type="radio" name="rating" value="4"onClick={()=>setRating(4)}/><i></i>
                        <input type="radio" name="rating" value="5"onClick={()=>setRating(5)}/><i></i>
                    </span>
                </div>
                <div>
                <input type="submit" className="button" value="Submit Review"></input>
                <button className="button" onClick={!selectedMovie}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default ReviewForm