import { useEffect, useState } from "react"
import MovieCard from "./MovieCard"
import { Grid } from "semantic-ui-react"
import NavButtons from "./NavButtons"

function Shows({notify}){
    const searchURL = "https://api.themoviedb.org/3/search/tv?api_key=058b20ba9bda19035670479e41a673af&sort_by=popularity.desc&query="
    const [page, setPage] = useState(1)
    const [showsData, setShowsData] = useState([])
    const [searchQuery, setSearchQuery] = useState("")
    const [searchText, setSearchText] = useState("")
    const [sortBy, setSortBy] = useState("")
    const [genreData, setGenreData] = useState([])
    const [genre, setGenre] = useState("")
    const getGenres = `https://api.themoviedb.org/3/genre/tv/list?api_key=058b20ba9bda19035670479e41a673af&language=en-US`
    const browseTVURL = `https://api.themoviedb.org/3/discover/tv?api_key=058b20ba9bda19035670479e41a673af&language=en-US`

    useEffect(()=>{
        fetch(getGenres)
        .then(res => res.json())
        .then(data => setGenreData(data.genres))
    },[getGenres])

    useEffect(() => {
        if(searchQuery === "") {
            fetch(`${browseTVURL}&sortby=${sortBy}&with_genres=${genre}`)
            .then(res => res.json())
            .then(data => setShowsData(data.results))
        }
        else{
            return(
                fetch(`${searchURL}${searchQuery}`)
                .then(res => res.json())
                .then(data => setShowsData(data.results))
            )
        }
        setSortBy("popularity.desc")
    },[searchQuery, page, browseTVURL, sortBy, genre])

    const listShows = showsData.map(show => <MovieCard key={show.id} movie={show} isFlipped={false} />)

    return(
        <div className="movies-all">
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
            <div style={{display:"flex", justifyContent:"end"}}>
            </div>
            <Grid className="movie-grid" >
               
                    {listShows}
            </Grid>
        </div>

    )
}
export default Shows