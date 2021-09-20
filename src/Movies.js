import MovieCard from "./MovieCard"

function Movies({movies, selectedMovie, setSelectedMovie}){

    const allMovies = movies.map(movie => <MovieCard key={movie.id} movie={movie} selectedMovie={selectedMovie} setSelectedMovie={setSelectedMovie} /> )

    return(
        <div className="movies">
            <h1>Movies!</h1>
            {allMovies}
        </div>
    )
}

export default Movies