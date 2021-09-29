
function Reviews(){

    return(
        <div></div>
    )
}

export default Reviews






































// import { useEffect, useState } from "react"
// import ReviewForm from "./ReviewForm"

// function Reviews({selectedMovie}){
//     const [reviews, setReviews]=useState([])


//     useEffect(()=>{
//         fetch("http://localhost:3000/reviews")
//         .then(res=>res.json())
//         .then(data=>setReviews(data))
//     })
    
//     const reviewList = reviews.map((review)=>(
//             <div>
//                 <div key = {review.id} className="movie-card">
//                 <h1>{review.title}</h1>
//                 <h2 style={{margin:"5%"}}>{review.review}</h2>
//                 <h2>{review.likes}</h2>
//                 {/* <img className="movie-card-poster" src={`https://image.tmdb.org/t/p/w500/${review.banner_path}`} alt={review.title}>{review.banner_url}</img> */}
//             </div>
//         </div>
//     ))



//     return(
//         <div>
//             <ReviewForm selectedMovie={selectedMovie}/>
//         <div>
//             <h1>Reviews</h1>
//             <div>{reviewList}</div>
//         </div>
//         </div>
//     )
// }
// export default Reviews