import { useState } from "react"
import { Card } from "semantic-ui-react"
import MovieCardReview from "./MovieCardReview"

function MovieCard({movie}){
    const [isFlipped, setIsFlipped]=useState(false)

    function handleShowInput(){
        !isFlipped?setIsFlipped(true):setIsFlipped(false)
    }

    return(
        <div className="movie-container">
            <Card className="mc-container">
                {!isFlipped?
                <div onClick={handleShowInput} className="mc" >
                    <img className="mc-poster" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title}>{movie.poster_url}</img>
                </div>:
                <div>
               <MovieCardReview handleShowInput={handleShowInput} movie={movie} />
               </div>
                }
            </Card>
        </div>
    )
}
export default MovieCard