import { useState } from "react"
import { Card } from "semantic-ui-react"
import MovieCardReview from "./MovieCardReview"

function MovieCard({movie, notify, fakeRoute}){
    const [isFlipped, setIsFlipped]=useState(false)
    const [videos, setVideos] = useState(null)

    function handleShowInput(){
        !isFlipped?setIsFlipped(true):setIsFlipped(false)
        const newDate = new Date(movie.release_date).getFullYear()
        fetchPlex(movie.title,newDate-1)
        fetchPlex(movie.title, newDate)
        fetchPlex(movie.title,newDate+1)
    }

    function fetchPlex(plexTitle, plexYear){
        fetch(`http://192.168.0.19:32400/library/sections/3/all?title=`+plexTitle+`&year=`+plexYear+`&X-Plex-Token=N4VR5j2cs7CFXy-za7m8`)
        .then(response => response.text())
        .then(data => {
          const parser = new DOMParser();
          const xml = parser.parseFromString(data, "text/xml");
          if(xml.firstChild.childElementCount > 0){
            setVideos(plexTitle)
          }
        })
    }

    return(
        <div className="movie-container">
            <Card className="mc-container">
                <MovieCardReview fakeRoute={fakeRoute}  videos={videos} notify={notify} handleShowInput={handleShowInput} movie={movie} />
            </Card>
        </div>
    )
}
export default MovieCard