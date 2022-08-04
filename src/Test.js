import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Reviews from "./Reviews";


function Test(){
    const [page, setPage] = useState(1)
    const [movieData, setMovieData] = useState([])
    const [searchQuery, setSearchQuery] = useState("")
    const [sortBy, setSortBy] = useState("popularity.desc")
    const [genreData, setGenreData] = useState([])
    const [genre, setGenre] = useState("")
    const [fakeRoute, setFakeRoute] = useState("")
    const browseURL = `https://api.themoviedb.org/3/discover/${fakeRoute}?api_key=058b20ba9bda19035670479e41a673af`
    const searchURL = `https://api.themoviedb.org/3/search/${fakeRoute}?api_key=058b20ba9bda19035670479e41a673af&sort_by=popularity.desc&query=`
    const getGenres = `https://api.themoviedb.org/3/genre/${fakeRoute}/list?api_key=058b20ba9bda19035670479e41a673af&language=en-US`

    useEffect(()=>{
        fetch(getGenres)
        .then(res => res.json())
        .then(data => setGenreData(data.genres))
    },[getGenres])

    useEffect(() => {
        if(fakeRoute !== ""){
        if(searchQuery === "") {
            console.log(`${browseURL}&sort_by=${sortBy}&with_genres=${genre}&page=${page}`)
            fetch(`${browseURL}&sort_by=${sortBy}&with_genres=${genre}&release_date.lte=${new Date().getFullYear()}&page=${page}`)
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
    }

    },[searchQuery, page, browseURL, sortBy, genre, searchURL, fakeRoute])

    const listMovies = movieData.map(movie => <MovieCard fakeRoute={fakeRoute} key = {movie.id} movie = {movie} isFlipped={false} />)

    function handlePreviousPage(){
        page===1? setPage(1): setPage(page-1)
    }
    function handleNextPage(){
        setPage(page+1)
    }
    
    function handleGenre(e){
        setGenre(e.target.value)
    }

    function handleSort(e){
        setSortBy(e.target.value)
    }

    function handleSearch(e){
        setSearchQuery(e.target.value)
    }

    function handleFakeRoute(e){
        setFakeRoute(e.target.value)
    }

    return(
        <div style={{display:"flex",flexDirection:"column", height:"100vh", backgroundColor:"rgb(25, 25, 25)"}}>
            <div style={{flex:3, display:"flex", justifyContent:"center", alignItems:"center"}}>
                <ToggleButtonGroup
                    color="primary"
                    value={fakeRoute}
                    exclusive
                    onChange={e=>setFakeRoute(e.target.value)}
                    sx={{flex:2}}
                >
                    <ToggleButton color="warning" sx={{flex:1, color:"white"}} value="">QUEUE</ToggleButton>
                    <ToggleButton color="warning" sx={{flex:1, color:"white"}}  value="movie">MOVIES</ToggleButton>
                    <ToggleButton color="warning" sx={{flex:1, color:"white"}}  value="tv">SHOWS</ToggleButton>
                </ToggleButtonGroup>
                <div style={{flex:2}}>
                    <TextField  disabled={fakeRoute === ""}  label="SEARCH" color="warning" sx={{ input: { color: 'orange' } }} variant="outlined" onChange={handleSearch} style={{ width:"90%"}} />
                </div> 
                <div style={{flex:1}}>
                    <FormControl disabled={fakeRoute === ""}  style={{ marginLeft:"2%", width:"90%"}}>
                        <InputLabel id="select-label" style={{color:"orange"}}>FILTER</InputLabel>
                            <Select defaultValue={""} style={{color:"white"}} onChange={handleGenre}>
                                <MenuItem style={{color:"white"}} value="">All</MenuItem>
                                {genreData.map(genre=><MenuItem style={{color:"white"}} value={genre.id}>{genre.name}</MenuItem>)}
                             </Select>
                    </FormControl>
                </div>
                <div style={{flex:1}}>
                    <FormControl disabled={fakeRoute === ""}  style={{ marginLeft:"2%",width:"90%"}}>
                        <InputLabel id="select-label" style={{color:"orange"}}>SORT</InputLabel>
                            <Select defaultValue={""} style={{color:"white"}} onChange={handleSort}>
                               <MenuItem style={{color:"white"}} value="popularity.desc">Popular</MenuItem> 
                               <MenuItem style={{color:"white"}} value="release_date.desc">Release</MenuItem> 
                               <MenuItem style={{color:"white"}} value="original_title.desc">Title</MenuItem>
                            </Select>
                    </FormControl>
                </div>
                <div style={{flex:1, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
                    <h1 style={{color:"orange", flex:5, margin:"unset"}}>ADD TO </h1>
                    <img style={{maxHeight:"45px", flex:1}} src="https://www.plex.tv/wp-content/themes/plex/assets/img/plex-logo.svg" alt="plex-logo" ></img>
                </div>
            </div>
            {
            fakeRoute !== "" ?
                <div style={{flex:15, display:"flex"   }}>
                    <Button onClick={handlePreviousPage} style={{color:"orange"}}><ArrowBackIosNewIcon/></Button>
                    <div style={{flex:15, display:"flex", overflow: "scroll"}}>
                        <Grid container className="movie-grid">
                            {listMovies}
                        </Grid>
                    </div>
                    <Button onClick={handleNextPage} style={{color:"orange"}}><ArrowForwardIosIcon/></Button>
                </div>
                :
                <div style={{flex:15, display:"flex"}}>
                    <Reviews></Reviews>
                </div>
            }
        </div>
    )
}
export default Test