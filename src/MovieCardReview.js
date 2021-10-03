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
        fetch("http://localhost:3001/reviewArray",{ 
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
        <div className="mcr" >
        <span className="pumpkin-rating">
            <input type="radio" name="rating" value="1" onClick={()=>setRating(1)}/><i></i>
            <input type="radio" name="rating" value="2"onClick={()=>setRating(2)}/><i></i>
            <input type="radio" name="rating" value="3"onClick={()=>setRating(3)}/><i></i>
            <input type="radio" name="rating" value="4"onClick={()=>setRating(4)}/><i></i>
            <input type="radio" name="rating" value="5"onClick={()=>setRating(5)}/><i></i>
        </span>
        <div >
            <div className="mcr-text" >
                <TextArea type="text" placeholder={`Write a Review for ${movie.title}!`} className="mcr" onChange={(e)=>setReviewText(e.target.value)}/>
            </div>        
        </div>
            <button type="button" onClick={handleCancel} className="mcr-cancel" >X</button>
            <button type="button" onClick={submitReview} className="mcr-submit">Submit</button>
            <p style={{position:"absolute", bottom:"15%", right:0, opacity:.5}}>{reviewText.length}/400</p>
    </div>
    )
}
export default MovieCardReview