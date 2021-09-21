import { useState, useEffect } from "react";
import {Route, Switch} from "react-router-dom"
import NavBar from "./NavBar"
import Home from "./Home"
import Movies from "./Movies"
import ReviewForm from "./ReviewForm";
import './App.css';

function App() {

  const [page, setPage]=useState(1)
  const [movies, setMovies]=useState([])
  const [reviews, setReviews]=useState([])
  const [selectedMovie, setSelectedMovie]=useState(null)

  function fetchMovies(page){
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=058b20ba9bda19035670479e41a673af&sort_by=popularity.desc&release_date.lte=2000-01-01&release_date.gte=1960-01-01&with_genres=27&page=${page}`)
    .then(res => res.json())
    .then(movieData => setMovies(movieData.results))
}

  useEffect(()=>{
    fetch(`http://localhost:3000/reviews`)
      .then(res => res.json())
      .then(reviewData => setReviews(reviewData))
  },[])

  useEffect(()=>{
    fetchMovies(page)
    window.scrollTo(0,0)
  },[page])

  function handleNextPage(){
    setPage(page+1)
  }

  function handlePreviousPage(){
    setPage(page-1)
  }

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home reviews={reviews}/>
        </Route>
        <Route exact path="/movies">
          {selectedMovie? <ReviewForm exact path="/Movies/ReviewForm" selectedMovie={selectedMovie} setSelectedMovie={setSelectedMovie}/>:<></>}
          <Movies page={page} movies={movies} selectedMovie={selectedMovie} setSelectedMovie={setSelectedMovie} handleNextPage={handleNextPage} handlePreviousPage={handlePreviousPage}/>
        </Route>
        <Route exact path="/reviewForm">

          <ReviewForm/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
