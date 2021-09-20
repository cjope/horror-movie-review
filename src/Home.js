function Home({reviews}){

    const reviewList = reviews.map((review)=>(
            <div key = {review.id} className="review-card">
            <h1>{review.title}</h1>
            <h2>{review.review}</h2>
            <h2>{review.likes}</h2>
            {/* <img className="movie-card-poster" src={`https://image.tmdb.org/t/p/w500/${review.banner_path}`} alt={review.title}>{review.banner_url}</img> */}
        </div>
    ))

    return(
        <div>
            <h1>Reviews</h1>
            <div  tabIndex="0">{reviewList}</div>
        </div>
    )
}
export default Home