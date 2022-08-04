import { useEffect, useState } from "react"
import MovieCard from "./MovieCard"
import { Grid } from "semantic-ui-react"
import NavButtons from "./NavButtons"

function Movies({notify}){
    const browseMovieURL = `https://api.themoviedb.org/3/discover/movie?api_key=058b20ba9bda19035670479e41a673af`
    const searchURL = "https://api.themoviedb.org/3/search/movie?api_key=058b20ba9bda19035670479e41a673af&sort_by=popularity.desc&query="
    const getGenres = `https://api.themoviedb.org/3/genre/movie/list?api_key=058b20ba9bda19035670479e41a673af&language=en-US`
    const browseTVURL = `https://api.themoviedb.org/3/discover/tv?api_key=058b20ba9bda19035670479e41a673af&language=en-US`
    const [page, setPage] = useState(1)
    const [movieData, setMovieData] = useState([])
    const [searchQuery, setSearchQuery] = useState("")
    const [searchText, setSearchText] = useState("")
    const [sortBy, setSortBy] = useState("")
    const [genreData, setGenreData] = useState([])
    const [genre, setGenre] = useState("")

    useEffect(()=>{
        fetch(getGenres)
        .then(res => res.json())
        .then(data => setGenreData(data.genres))
    },[getGenres])

    useEffect(()=>{
        fetch(browseTVURL)
        .then(res=>res.json())
        .then(data=>console.log(data.results))
    },[])

    useEffect(() => {
        if(searchQuery === "") {
            fetch(`${browseMovieURL}&sortby=${sortBy}&with_genres=${genre}`)
            .then(res => res.json())
            .then(data => setMovieData(data.results))
        }
        else{
            return(
                fetch(`${searchURL}${searchQuery}`)
                .then(res => res.json())
                .then(data => setMovieData(data.results))
            )
        }
        setSortBy("popularity.desc")

    },[searchQuery, page, browseMovieURL, sortBy, genre])


    const listMovies = movieData.map(movie => <MovieCard key = {movie.id} movie = {movie} isFlipped={false} />)

    function handlePreviousPage(){
        page===1? setPage(1): setPage(page-1)
    }

    return(
        <div>
            <NavButtons
                setSearchQuery={setSearchQuery}
                setPage={setPage}
                page={page}
                setSearchText={setSearchText}
                searchText={searchText}
                setGenre={setGenre}
                genre={genre}
                genreData={genreData}
            />
            <div className="movies-all">
                <div style={{display:"flex"}}>
                    <button className="button"  style={{height:"700px", marginTop:"3%"}} onClick={handlePreviousPage} >←</button>
                    <Grid className="movie-grid">
                        {listMovies}
                    </Grid>
                    <button className="button" style={{height:"700px", marginTop:"3%"}} onClick={handlePreviousPage} >→</button>
                </div>
            </div>
        </div>

    )
}
export default Movies