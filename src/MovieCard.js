function MovieCard({movie, setSelectedMovie}){

    let voteStars = "✩✩✩✩✩"

    const voteAverage = movie.vote_average

    // const movieTitle = movie.title

    const p1 = <img className="pumpkin-light" alt="pumpkin-light" src="https://d29fhpw069ctt2.cloudfront.net/icon/image/85188/preview.svg"></img>
    const p2 = <img className="pumpkin-dark" alt="pumpkin-dark" src="https://d29fhpw069ctt2.cloudfront.net/icon/image/85188/preview.svg"></img>

    function voteToStars(){
        if (voteAverage <3) return voteStars = <p>{p1}{p2}{p2}{p2}{p2}</p>
        if (voteAverage >=3 && voteAverage <5) return voteStars =  <p>{p1}{p1}{p2}{p2}{p2}</p>
        if (voteAverage >=5 && voteAverage <7) return voteStars =  <p>{p1}{p1}{p1}{p2}{p2}</p>
            if (voteAverage >=7 && voteAverage <9) return voteStars = <p>{p1}{p1}{p1}{p1}{p2}</p>
        if (voteAverage >=9) return voteStars = <p>{p1}{p1}{p1}{p1}{p1}</p>
        else return <p>{p2}{p2}{p2}{p2}{p2}</p>
        } //YUS!    

    return(
        <div className="movie-card" onClick={()=>setSelectedMovie([movie])}>
            <h1 className="movie-card-title">{movie.title}</h1>
            <img className="movie-card-poster" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title}>{movie.poster_url}</img>
            <h2 className="movie-card-overview">{movie.overview}</h2>
            <p className="movie-card-release">Released {movie.release_date.slice(0,4)}</p>
            <h2 className="movie-card-rating">{voteToStars(voteStars)}</h2>
            {/* <button className="movie-card-review">Review Movie</button> */}
        </div>
    )
}

export default MovieCard