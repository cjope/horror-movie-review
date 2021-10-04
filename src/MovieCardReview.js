import { TextArea } from "semantic-ui-react"
import { useHistory } from "react-router"
import { useState } from "react"

function MovieCardReview({movie, handleShowInput}){
    const [reviewText, setReviewText]=useState("")
    const [rating, setRating]=useState(0)
    let history=useHistory()

    function handleCancel(){
        setReviewText("")
        setRating(0)
        handleShowInput()
    }

    function submitReview(e){
        const newReview={
                title: movie.title,
                reviewText: reviewText,
                rating: rating,
                image: `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`,
        }
        fetch("https://movie-review-json.herokuapp.com/reviewArray",{ 
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newReview),
        })
        .then(res=>res.json())
        history.push("./Reviews")
        }

    return(
        <div>
        <p className="mcr-movie-name-redrum" >{movie.title}</p>
        <span className="pumpkin-rating">
            <input type="radio" name="rating" value="1" onClick={()=>setRating(1)}/><i></i>
            <input type="radio" name="rating" value="2"onClick={()=>setRating(2)}/><i></i>
            <input type="radio" name="rating" value="3"onClick={()=>setRating(3)}/><i></i>
            <input type="radio" name="rating" value="4"onClick={()=>setRating(4)}/><i></i>
            <input type="radio" name="rating" value="5"onClick={()=>setRating(5)}/><i></i>
        </span>
        <button className="mcr-cancel"  type="button" onClick={handleCancel}>X</button>
        <TextArea type="text" placeholder={`Write you Review for ${movie.title} here...`} onChange={(e)=>setReviewText(e.target.value)}/>

        <button className="mcr-submit" type="button" onClick={submitReview}>Submit</button>     
    </div>
    )
}
export default MovieCardReview