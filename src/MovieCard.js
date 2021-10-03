import { useState } from "react"
import { useHistory } from "react-router"
import { Card } from "semantic-ui-react"
import { TextArea } from "semantic-ui-react"

function MovieCard({movie}){
    const [isFlipped, setIsFlipped]=useState(false)
    const [reviewText, setReviewText]=useState("")
    const [rating, setRating]=useState(0)
    let history=useHistory()

    // function navToReviews(){
    //     setIsFlipped(false)
    //     history.push("/Reviews")
    // }

    function handleClick(){
        !isFlipped?setIsFlipped(true):setIsFlipped(false)
        setReviewText("")
        setRating(1)
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
        setIsFlipped(false)
        history.push("./Movies")
        }


    //     <Alert key={idx} variant={variant}>
    // See {' '}
    // <Alert.Link href="./Reviews">your reviews</Alert.Link> or <Alert.Link href="./Reviews">continue Browsing</Alert.Link> or 
    // </Alert>  
    // <Button onClick={() => setShow(false)} variant="outline-success">
    // Close me y'all!
    // </Button>



    return(
        <div style={{backgroundColor:"black", padding:"2%", width:"45ch"}}>
            <Card>
                {!isFlipped?
                <div onClick={handleClick} className="movie-card" >
                    <img className="movie-card-poster" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title}>{movie.poster_url}</img>
                </div>:
               //this should be its own component>>
               <div className="movie-card-review" >
                    <span className="pumpkin-rating">
                        <input type="radio" name="rating" value="1" onClick={()=>setRating(1)}/><i></i>
                        <input type="radio" name="rating" value="2"onClick={()=>setRating(2)}/><i></i>
                        <input type="radio" name="rating" value="3"onClick={()=>setRating(3)}/><i></i>
                        <input type="radio" name="rating" value="4"onClick={()=>setRating(4)}/><i></i>
                        <input type="radio" name="rating" value="5"onClick={()=>setRating(5)}/><i></i>
                    </span>
                    <div >
                        <div className="movie-card-text" >
                            <TextArea type="text" placeholder={`Write a Review for ${movie.title}!`} className="movie-card-review" onChange={(e)=>setReviewText(e.target.value)}/>
                        </div>        
                    </div>
                        <button type="button" onClick={handleClick} className="review-cancel" >X</button>
                        <button type="button" onClick={submitReview} className="review-submit">Submit</button>
                        <p style={{position:"absolute", bottom:"15%", right:0, opacity:.5}}>{reviewText.length}/400</p>
                </div>
                }
            </Card>
        </div>
    )
}
export default MovieCard