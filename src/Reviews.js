import { useEffect, useState } from "react"
import ReviewCard from "./ReviewCard"
import { Grid } from "semantic-ui-react"
import { ToggleButton, ToggleButtonGroup } from "@mui/material"

function Reviews(){
    const [movies, setMovies]=useState([])
    const [shows, setShows]=useState([])
    const [type,setType]=useState(true)

    
    useEffect(()=>{
         fetch("https://gentle-wildwood-75759.herokuapp.com/movies")
        .then(res=>res.json())
        .then(data => setMovies(data))
    },[movies])

    useEffect(()=>{
        fetch("https://gentle-wildwood-75759.herokuapp.com/tvshows")
       .then(res=>res.json())
       .then(data => setShows(data))
   },[movies])

   function handleSwitch(e, newType){
    setType(newType)
   }
    


    const listMovies = movies.map((movie)=>(<ReviewCard key={movie.id} type={type} movie={movie} movies={movies} setMovies={setMovies}/> ))
    const listShows = shows.map((show)=>(<ReviewCard key={show.id} type={type} show={show} setShows={setShows}/> ))

    return(
        <div style={{width:"100%"}}>
            <ToggleButtonGroup
            fullWidth
         
            value={type}
            exclusive
            onChange={handleSwitch}
            >
            <ToggleButton color="warning" sx={{flex:1, color:"white"}} value={true}>Movie Queue</ToggleButton>
            <ToggleButton color="warning" sx={{flex:1, color:"white"}} value={false}>TV Queue</ToggleButton>
            </ToggleButtonGroup>
            <div className="reviews">

            {type?
                <Grid style={{display:"flex", justifyContent:"center"}} >
                    {listMovies}
                </Grid>
                :
                <Grid style={{display:"flex", justifyContent:"center"}} >
                    {listShows}    
                </Grid>
            }
        </div>
        </div>
    )
}
export default Reviews