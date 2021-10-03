import { useEffect, useState } from "react"
import MovieCard from "./MovieCard"
import { Grid } from "semantic-ui-react"
import NavButtons from "./NavButtons"


function Movies(){
    const browseURL = `https://api.themoviedb.org/3/discover/movie?api_key=058b20ba9bda19035670479e41a673af&sort_by=popularity.desc&release_date.lte=2000-01-01&release_date.gte=1960-01-01&with_genres=27&page=`
    const searchURL = "https://api.themoviedb.org/3/search/movie?api_key=058b20ba9bda19035670479e41a673af&sort_by=popularity.desc&release_date.lte=2000-01-01&release_date.gte=1960-01-01&with_genres=27&query="
    const [page, setPage] = useState(1)
    const [movieData, setMovieData] = useState([])
    const [searchQuery, setSearchQuery] = useState("")
    const [searchText, setSearchText] = useState("")

 
    useEffect(() => {
        if(searchQuery === "") {
            fetch(`${browseURL}${page}`)
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
    },[searchQuery, page, browseURL])

    // function handleSearch(e){
    //     e.preventDefault()
    //     setSearchQuery(searchText)
    // }

    // function handlePreviousPage(){
    // page===1? setPage(1): setPage(page-1)
    // }

    // function handleNextPage(){
    // setPage(page+1)
    // }

    // function handleSearchText(e){
    //     setSearchText(e.target.value)
    // //   const moviesToDisplay = movieData.filter((film)=>(film.title.toLowerCase().includes(searchText.toLowerCase()))) this works great but where do I put it??
    //     e.target.value!==""?setSearchText(e.target.value):setSearchQuery("")
    // }

    const listMovies = movieData.map(movie => movie.genre_ids.includes(27)&&movie.poster_path!==null? <MovieCard key = {movie.id} movie = {movie} isFlipped={false} />:null)

    return(
        <div className="movies-all">
            {/* <div className="movies-nav">
                    <button className="button" onClick={handlePreviousPage} >Prev</button>
                    <button className="button" onClick={handleNextPage} >Next</button>
                <form className="search-form" onSubmit={handleSearch}>
                    <input className="search" onChange={handleSearchText} placeholder="search" type="text"></input>
                </form>
            </div> */}
            <NavButtons
                setSearchQuery={setSearchQuery}
                setPage={setPage}
                page={page}
                setSearchText={setSearchText}
                searchText={searchText}
            />
            <Grid className="movie-container" >
                    {listMovies}
            </Grid>
        </div>

    )
}
export default Movies