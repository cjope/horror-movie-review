import { useEffect, useState } from "react"
import MovieCard from "./MovieCard"
// import { Card, CardGroup, Container } from "semantic-ui-react"
import { Grid } from "semantic-ui-react"


function Movies(){
    const browseURL = `https://api.themoviedb.org/3/discover/movie?api_key=058b20ba9bda19035670479e41a673af&sort_by=popularity.desc&release_date.lte=2000-01-01&release_date.gte=1960-01-01&with_genres=27&page=`
    const searchURL = "https://api.themoviedb.org/3/search/movie?api_key=058b20ba9bda19035670479e41a673af&sort_by=popularity.desc&release_date.lte=2000-01-01&release_date.gte=1960-01-01&with_genres=27&query="
    const [page, setPage] = useState(1)
    const [movieData, setMovieData] = useState([])
    const [searchQuery, setSearchQuery] = useState("")
    const [searchText, setSearchText] = useState("")

    const fetchMovies = () => {
        fetch(`${browseURL}${page}`)
        .then(res => res.json())
        .then(data => setMovieData(data.results))
    }

    useEffect(() => {
        if(searchQuery === "") {
                fetchMovies(page)
        }
        else{
            return(
                fetch(`${searchURL}${searchQuery}`)
                .then(res => res.json())
                .then(data => setMovieData(data.results))
            )
        }
    },[searchQuery, page, searchText])

    function handleSearch(e){
        e.preventDefault()
        setSearchQuery(searchText)
    }

      function handlePreviousPage(){
        page===1? setPage(1): setPage(page-1)
      }
    
      function handleNextPage(){
        setPage(page+1)
      }
    
      function handleSearchText(e){
          setSearchText(e.target.value)
          e.target.value!==""?setSearchText(e.target.value):setSearchQuery("")
      }

    const listMovies = movieData.map(movie => <MovieCard key = {movie.id} movie = {movie}/>)

    return(
        <div >
            <div className="page-nav">
                <button className="page-button" onClick={handlePreviousPage} >Prev</button>
                <button className="page-button" onClick={handleNextPage} >Next</button>
                <form className="page-button" onSubmit={handleSearch}>
                    <input style={{height:"90%", width:"250%"}} onChange={handleSearchText} placeholder="search" type="text"></input>
                </form>
                
            </div>
            <Grid style={{display:"flex", justifyContent:"center"}} >
                    {listMovies}
            </Grid>
        </div>

    )
}
export default Movies