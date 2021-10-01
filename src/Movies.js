import { useEffect, useState } from "react"
import MovieCard from "./MovieCard"
import { Grid } from "semantic-ui-react"


function Movies(){
    const browseURL = `https://api.themoviedb.org/3/discover/movie?api_key=058b20ba9bda19035670479e41a673af&sort_by=popularity.desc&release_date.lte=2000-01-01&release_date.gte=1960-01-01&with_genres=27&page=`
    const searchURL = "https://api.themoviedb.org/3/search/movie?api_key=058b20ba9bda19035670479e41a673af&sort_by=popularity.desc&release_date.lte=2000-01-01&release_date.gte=1960-01-01&with_genres=27&query="
    const [page, setPage] = useState(1)
    const [movieData, setMovieData] = useState([])
    const [searchQuery, setSearchQuery] = useState("")
    const [searchText, setSearchText] = useState("")


    function fetchMovies() {
        fetch(`${browseURL}${page}`)
        .then(res => res.json())
        .then(data => setMovieData(data.results))
    }

    
    useEffect(() => {
        if(searchQuery === "") {
            fetchMovies()
        }
        else{
            return(
                fetch(`${searchURL}${searchQuery}`)
                .then(res => res.json())
                .then(data => setMovieData(data.results))
            )
        }
    },[searchQuery, page  ])

    function handleSearch(e){
        e.preventDefault()
        setSearchQuery(searchText)
    }

    // const [randomMovie, setRandomMovie]=useState("")

    // function handleRando(movieData, randomMovie){
    //     Math.floor(Math.random)
    //     movieData.map((movie)=>(
    //         randomMovie===movie.id? setSearchQuery(movie.title): console.log(randomMovie)
    //     ))
    // }



    // function handleRandomMovie(max){
    //     Math.floor(Math.random())
    //     fetch("https://api.themoviedb.org/3/find/tt0087015?api_key=058b20ba9bda19035670479e41a673af&external_source=imdb_id")
    //     .then(res=>res.json())
    //     .then(data=>setRandomMovie(data.movie_results))
    //     handleRando()
    // }

    
    // console.log(randomMovie[0].title)

    function handlePreviousPage(){
    page===1? setPage(1): setPage(page-1)
    }

    function handleNextPage(){
    setPage(page+1)
    }

    function handleSearchText(e){
        setSearchText(e.target.value)
    //   const moviesToDisplay = movieData.filter((film)=>(film.title.toLowerCase().includes(searchText.toLowerCase()))) this works great but where do I put it??
        e.target.value!==""?setSearchText(e.target.value):setSearchQuery("")
    }

    



    const listMovies = movieData.map(movie => movie.genre_ids.includes(27)&&movie.poster_path!==null? <MovieCard key = {movie.id} movie = {movie}/>:null)

    return(
        <div style={{paddingBottom:"10%"}}>
            <div className="page-nav">
                <button className="page-button" onClick={handlePreviousPage} >Prev</button>
                <button className="page-button" onClick={handleNextPage} >Next</button>
                {/* <button onClick={handleRando}>Random Movie</button> */}
                <form className="search" onSubmit={handleSearch}>
                    <input className="search" style={{height:"90%", width:"250%"}} onChange={handleSearchText} placeholder="search" type="text"></input>
                </form>
                
            </div>
            <div style={{paddingTop:"5%"}}>
            <Grid style={{display:"flex", justifyContent:"center"}} >
                    {listMovies}
            </Grid>
            </div>
        </div>

    )
}
export default Movies