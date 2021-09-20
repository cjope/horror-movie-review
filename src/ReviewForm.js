import { useState, useEffect} from "react"

function ReviewForm({selectedMovie, reviews}){

    const [review, setReview]=useState("")
    const [title, setTitle]=useState("")
    const [rating, setRating]=useState(0)
    const [customTitle, setCustomTitle]=useState(selectedMovie)
    // const [banner, setBanner]=useState("") can't do this unless I add a setState to MovieCard onClick event
    
    function handleSubmit(){
        fetch(reviews,{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({title, review, rating})
    })
    }

    useEffect(()=>{
        setTitle(selectedMovie)
        window.scrollTo(0,0)
    },[selectedMovie])

    return(
        <div className="review-form">
            <form onSubmit={handleSubmit}>
                <div className="review-input">
                <p>Write a Review for <b><input type="text" className="review-title" value={customTitle} onChange={(e)=>setCustomTitle(e.target.value)}></input></b></p>
                </div>
                <div>
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
                </div>
                <div>
                <input type="submit" className="button" value="Submit Review"></input>
                <button className="button" onClick={()=>selectedMovie(null)}>Cancel</button>
                {/* does not work correctly on this Routed page - works great in Movies! */}
                </div>
            </form>
        </div>
    )
}

export default ReviewForm