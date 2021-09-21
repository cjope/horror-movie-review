import MovieCard from "./MovieCard"

function Movies({movies, selectedMovie, setSelectedMovie, handleNextPage, handlePreviousPage, page}){

    const allMovies = movies.map(movie => <MovieCard key={movie.id} movie={movie} selectedMovie={selectedMovie} setSelectedMovie={setSelectedMovie} /> )

    return(
        <div className="movies">
            <div className="button-container">
            <span style={{}}>
                {page>1?
                <button className="button" style={{minWidth:"100px", float:"left"}}onClick={handlePreviousPage}>Prev</button>:
                <button className="button" style={{minWidth:"100px", float:"left"}}>Prev</button>}
                <button className="button" style={{minWidth:"100px", float:"right"}} onClick={handleNextPage}>Next</button>
                </span>
            </div>
            <h1>Movies!</h1>
            {allMovies}
        </div>
    )
}

export default Movies