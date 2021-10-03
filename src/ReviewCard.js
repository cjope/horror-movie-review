import VoteToStars from "./VotetoStars"

function ReviewCard({review, onDeleteReview}){
    const {id} = review

        function onDeleteClick(){
            fetch(`http://localhost:3001/reviewArray/${id}`,{
                method: "DELETE",
        })
            .then(res=>res.json())
            .then(()=>onDeleteReview(review))
        }   


    return(
        <div className="rc">
                <img className="rc-image"  src={review.image} alt={review.title}/>
                <div >
                    <h1 className="rc-title" key={review.id}>{review.title}</h1>
                    {/* <div className="rc-rating" >{voteToStars(voteAverage)}</div> */}
                    <div className="rc-rating" ><VoteToStars review={review}/></div>
                </div>
                <h2 className="rc-review" >"{review.reviewText}"</h2>
                <button type="button" onClick={onDeleteClick} className="rc-delete" >X</button>
        </div>
    )
}
export default ReviewCard