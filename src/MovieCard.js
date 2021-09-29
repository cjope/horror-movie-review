// import { useHistory } from "react-router"
// import { useState } from "react"
import { useState } from "react"
import { Button, Card } from "semantic-ui-react"
// import { Alert } from "react-bootstrap"
import { TextArea } from "semantic-ui-react"

function MovieCard({movie}){

    // const [movieTitle, setMovieTitle]=useState("")

    // let history=useHistory()

    // let voteStars = "✩✩✩✩✩"

    // const voteAverage = movie.vote_average

    // const p1 = <img className="pumpkin-light" alt="pumpkin-light" src="https://d29fhpw069ctt2.cloudfront.net/icon/image/85188/preview.svg"></img>
    // const p2 = <img className="pumpkin-dark" alt="pumpkin-dark" src="https://d29fhpw069ctt2.cloudfront.net/icon/image/85188/preview.svg"></img>

    // function voteToStars(){
    //     if (voteAverage <3) return voteStars = <p>{p1}{p2}{p2}{p2}{p2}</p>
    //     if (voteAverage >=3 && voteAverage <5) return voteStars =  <p>{p1}{p1}{p2}{p2}{p2}</p>
    //     if (voteAverage >=5 && voteAverage <7) return voteStars =  <p>{p1}{p1}{p1}{p2}{p2}</p>
    //         if (voteAverage >=7 && voteAverage <9) return voteStars = <p>{p1}{p1}{p1}{p1}{p2}</p>
    //     if (voteAverage >=9) return voteStars = <p>{p1}{p1}{p1}{p1}{p1}</p>
    //     else return <p>{p2}{p2}{p2}{p2}{p2}</p>
    //     }    


        // function handleMovieSelect(){
        //     setMovieTitle(movie.title)
        //     // history.push("/")
        // }

        const [isFlipped, setIsFlipped]=useState(false)



        function handleClick(){
            !isFlipped?setIsFlipped(true):setIsFlipped(false)
            !isFlipped?console.log(`${movie.title} is flipped`):console.log(`${movie.title} is unflipped`)
            //change card to the other 
        }

    // console.log(movieTitle)

    return(
        <div style={{backgroundColor:"black", paddingTop:"10%"}}>
                {movie.genre_ids.includes(27)&&movie.poster_path!==null? 
            <Card >
                {!isFlipped?
                <div  className="movie-card" >
                    <img onClick={handleClick} className="movie-card-poster" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title}>{movie.poster_url}</img>
                </div>:
                <div className="movie-card-review" >
                    <div className="movie-card-review">
                        <TextArea type="text" placeholder="Write a Review!" className="movie-card-review"/>
                    </div>
                    <br style={{backgroundColor:"blue"}}/>
                    <div style={{backgroundColor:"red"}} >
                        <Button type="button" onClick={handleClick}>Submit</Button>
                        {/* this doesn't work - maybe use a UseEffect here? */}
                    </div>
                </div>
                }
            </Card>
            :null
        }
        </div>
    )
}
export default MovieCard