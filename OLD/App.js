import { useState, useEffect } from "react";
import {Route, Switch} from "react-router-dom"
import NavBar from "./NavBar"
import Reviews from "./Reviews"
import Movies from "./Movies"
// import ReviewForm from "./ReviewForm";
import './App.css';

function App() {

  const [page, setPage]=useState(1)
  const [movies, setMovies]=useState([])
  const [reviews, setReviews]=useState([])
  const [searchQuery, setSearchQuery]=useState("")
  const [selectedMovie, setSelectedMovie]=useState("")

  let fetchMovies = (page) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=058b20ba9bda19035670479e41a673af&sort_by=popularity.desc&release_date.lte=2000-01-01&release_date.gte=1960-01-01&with_genres=27&page=${page}`)
    .then(res => res.json())
    .then(movieData => setMovies(movieData.results))
  }
    
  const searchURL = "https://api.themoviedb.org/3/search/movie?api_key=058b20ba9bda19035670479e41a673af&sort_by=popularity.desc&release_date.lte=2000-01-01&release_date.gte=1960-01-01&with_genres=27&query="
  


  console.log(selectedMovie)
  useEffect(()=>{
    if(searchQuery===""){
      return(
          fetchMovies(page)
      )
    }
    else{
      return(
        fetch(`${searchURL}'${searchQuery}`)
        .then(res=>res.json())
        .then(data=>{
          setMovies(data.results)
        })

      )
    }

  },[searchQuery, page])

  function handleNextPage(){
    setPage(page+1)
  }

  function handlePreviousPage(){
    setPage(page-1)
  }
  
  function handleNewReview(newReview){
      const newReviewArray = [...reviews, newReview]
      setReviews(newReviewArray)
    }


  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/Reviews">
          <Reviews reviews={reviews} selectedMovie={selectedMovie}/>
        </Route>
        <Route exact path="/">
          <Movies 
            page={page}
            movies={movies}
            setSearchQuery={setSearchQuery}
            fetchMovies={fetchMovies}
            searchQuery={searchQuery}
            selectedMovie={selectedMovie}
            setSelectedMovie={setSelectedMovie}
            handleNextPage={handleNextPage}
            handlePreviousPage={handlePreviousPage}/>
        </Route>
        {/* <Route exact path="/reviewForm">
          <ReviewForm movies={movies}  selectedMovie={selectedMovie} setReviews={setReviews} reviews={reviews} onNewReview={handleNewReview}/>
        </Route> */}
      </Switch>
    </div>
  );
}

export default App;
