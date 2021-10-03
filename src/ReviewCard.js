function ReviewCard({review, onDeleteReview}){
    const voteAverage = review.rating
    const p1 = <img className="pumpkin-light" alt="pumpkin-light" src="https://d29fhpw069ctt2.cloudfront.net/icon/image/85188/preview.svg"></img>
    const p0 = <img className="pumpkin-dark" alt="pumpkin-dark" src="https://d29fhpw069ctt2.cloudfront.net/icon/image/85188/preview.svg"></img>
    const {id} = review

    function voteToStars(){
        if (voteAverage <3) return <>{p1}{p0}{p0}{p0}{p0}</>
        if (voteAverage >=3 && voteAverage <5) return <>{p1}{p1}{p0}{p0}{p0}</>
        if (voteAverage >=5 && voteAverage <7) return <>{p1}{p1}{p1}{p0}{p0}</>
        if (voteAverage >=7 && voteAverage <9) return <>{p1}{p1}{p1}{p1}{p0}</>
        if (voteAverage >=9) return <>{p1}{p1}{p1}{p1}{p1}</>
        else return <>{p0}{p0}{p0}{p0}{p0}</>
        }    

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
                    <div className="rc-rating" >{voteToStars(voteAverage)}</div>
                </div>
                <h2 className="rc-review" >"{review.reviewText}"</h2>
                <button type="button" onClick={onDeleteClick} className="rc-delete" >X</button>
        </div>
    )
}
export default ReviewCard