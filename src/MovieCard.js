import { useState } from "react"
import { Card } from "semantic-ui-react"
import MovieCardReview from "./MovieCardReview"

function MovieCard({movie, notify}){
    const [isFlipped, setIsFlipped]=useState(false)

    function handleShowInput(){
        !isFlipped?setIsFlipped(true):setIsFlipped(false)
        console.log(movie.overview)
    }

    return(
        <div className="movie-container">
            <Card className="mc-container">
                {!isFlipped?
                <div onClick={handleShowInput} className="mc" >
                    <img className="mc-poster" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title}>{movie.poster_url}</img>
                </div>:
                <div>
               <MovieCardReview notify={notify} handleShowInput={handleShowInput} movie={movie} />
               </div>
                }
            </Card>
        </div>
    )
}
export default MovieCard