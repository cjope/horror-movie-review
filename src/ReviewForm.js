import { useState} from "react"
import {REVIEWS} from "./db.json"

function ReviewForm({selectedMovie}){

    const [review, setReview]=useState("")
    // const [title, setTitle]=useState("")
    const [rating, setRating]=useState(0)
    
    function handleSubmit(){
        fetch(REVIEWS,{
        method: "POST",
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json"
        },
        body: JSON.stringify({key:"",title:{selectedMovie}, review:{review}, likes:{rating}})
    })
    }


    // console.log(selectedMovie) //returns: The Excorcist string


    console.log(REVIEWS)
    console.log(selectedMovie) //returns {selectedMovie: undefined}
    console.log(review) //returns nothing.
    console.log(rating) //returns 5 (nice)


//use effect should create its own array - it is taking all keys from "selectedMovie"
    // useEffect((selectedMovie)=>{
    //     setTitle(selectedMovie)
    //     setReview(review)
    //     setRating(rating)
    //     // window.scrollTo(0,0)
    // },[])

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