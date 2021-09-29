import MovieCard from "./MovieCard"

function Movies({movies, setSearchQuery, selectedMovie, setSelectedMovie, handleNextPage, handlePreviousPage, page}){

    function handleSearch(e){
        e.preventDefault()
    }

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
                <form onSubmit={handleSearch}>
                <input className="search" onChange={e=>{setSearchQuery(e.target.value)}} placeholder="Search" type="text" ></input>
                {/* <button className="button" onClick={handleCancel}>Cancel</button> */}
            </form>
            </div> 

            
            {allMovies}


        </div>
    )
}

export default Movies