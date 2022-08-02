import { toast } from "react-toastify"

function MovieCardReview({movie, handleShowInput}){

    function submitReview(e){
        const notAllowed = "minions"
        const title = movie.title.toLowerCase().includes(notAllowed)
        const newReview={
                title: movie.title,
                image: `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`,
        }
        
        if(title){
        toast.error("Error - Please adjust your taste",{icon:"🤮", autoClose:1000, hideProgressBar:true, position:"top-center", theme:"dark"})
        handleShowInput()
    }
        else{
            fetch("https://movie-review-json.herokuapp.com/reviewArray",{ 
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newReview),
        })
        .then(res=>res.json())
        toast.success(`${movie.title} has been added to the Queue`,{icon:"🍿", autoClose:1000, hideProgressBar:true, position:"top-center", theme:"dark" })
        handleShowInput()
   
    }
    
        }

    return(
        <div>
        <img onClick={handleShowInput} style={{position:"absolute", opacity:.2}} className="mc-poster" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title}>{movie.poster_url}</img>
        {/* <span className="pumpkin-rating">
            <input type="radio" name="rating" value="1" onClick={()=>setRating(1)}/><i></i>
            <input type="radio" name="rating" value="2"onClick={()=>setRating(2)}/><i></i>
            <input type="radio" name="rating" value="3"onClick={()=>setRating(3)}/><i></i>
            <input type="radio" name="rating" value="4"onClick={()=>setRating(4)}/><i></i>
            <input type="radio" name="rating" value="5"onClick={()=>setRating(5)}/><i></i>
        </span> */}
        <p style={{color:"white"}}>{movie.title}</p>
        <p style={{color:"white", zIndex:1}}>{movie.overview}</p>
        <button className="mcr-cancel"  type="button" onClick={handleShowInput}>X</button>
    
        {/* <TextArea type="text" placeholder={`Write you Review for ${movie.title} here...`} onChange={(e)=>setReviewText(e.target.value)}/> */}

        <button className="mcr-submit" type="button" onClick={submitReview}>Add</button>     
    </div>
    )
}
export default MovieCardReview