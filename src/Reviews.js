import ReviewForm from "./ReviewForm"

function Reviews({movieTitle}){

    const reviewPosts = <p>reviewPosts</p>

    return(
        <div>

            <ReviewForm movieTitle={movieTitle}/>
            <div>
                {reviewPosts}
            </div>

        </div>
    )
}
export default Reviews