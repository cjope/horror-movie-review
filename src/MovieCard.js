// import { useHistory } from "react-router"
// import { useState } from "react"
import { useState } from "react"
import { Card } from "semantic-ui-react"
// import { Alert } from "react-bootstrap"
import { TextArea } from "semantic-ui-react"

function MovieCard({movie}){

    const [isFlipped, setIsFlipped]=useState(false)

    const [reviewText, setReviewText]=useState("")
    const [rating, setRating]=useState(0)

    function handleClick(){
        !isFlipped?setIsFlipped(true):setIsFlipped(false)
        !isFlipped?console.log(`${movie.title} is flipped`):console.log(`${movie.title} is unflipped`)
    }


    function submitReview(e){
        const newReview={
                title: movie.title,
                review: reviewText,
                rating: rating,
                image: `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`,
        }
        fetch("http://localhost:3001/reviews",{ 
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newReview),
        })
        .then(res=>res.json())
        // .then(onAddReview)
        // .then(data => console.log(data.review))
        setIsFlipped(false)
        console.log(newReview)
        }


    return(
        <div style={{backgroundColor:"black", padding:"1%"}}>
            <Card >
                {!isFlipped?
                <div  className="movie-card" >
                    <img onClick={handleClick} className="movie-card-poster" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title}>{movie.poster_url}</img>
                </div>:
                <div className="movie-card-review" >
                                        <span className="star-rating">
                            <input type="radio" name="rating" value="1" onClick={()=>setRating(1)}/><i></i>
                            <input type="radio" name="rating" value="2"onClick={()=>setRating(2)}/><i></i>
                            <input type="radio" name="rating" value="3"onClick={()=>setRating(3)}/><i></i>
                            <input type="radio" name="rating" value="4"onClick={()=>setRating(4)}/><i></i>
                            <input type="radio" name="rating" value="5"onClick={()=>setRating(5)}/><i></i>
                        </span>
                    <div className="movie-card-review">
                        <div className="movie-card-text" >
                        <TextArea type="text" placeholder={`Write a Review for ${movie.title}!`} className="movie-card-review" onChange={(e)=>setReviewText(e.target.value)}/>
                        </div>        
                    </div>
                    <button type="button" onClick={handleClick} className="review-cancel" >X</button>
                    <button type="button" onClick={submitReview} className="review-submit">Submit</button>
                    <div>
                    </div>
                </div>
                }
            </Card>
        </div>
    )
}
export default MovieCard