function ReviewCard({review}){
    const voteAverage = review.rating
    const p1 = <img className="pumpkin-light" alt="pumpkin-light" src="https://d29fhpw069ctt2.cloudfront.net/icon/image/85188/preview.svg"></img>
    const p0 = <img className="pumpkin-dark" alt="pumpkin-dark" src="https://d29fhpw069ctt2.cloudfront.net/icon/image/85188/preview.svg"></img>

    function voteToStars(){
        if (voteAverage <3) return <>{p1}{p0}{p0}{p0}{p0}</>
        if (voteAverage >=3 && voteAverage <5) return <>{p1}{p1}{p0}{p0}{p0}</>
        if (voteAverage >=5 && voteAverage <7) return <>{p1}{p1}{p1}{p0}{p0}</>
        if (voteAverage >=7 && voteAverage <9) return <>{p1}{p1}{p1}{p1}{p0}</>
        if (voteAverage >=9) return <>{p1}{p1}{p1}{p1}{p1}</>
        else return <>{p0}{p0}{p0}{p0}{p0}</>
        }    

    return(
        <div className="review-card">
                <img className="review-card-image"  src={review.image} alt={review.title}/>
                <div >
                    <h1 className="review-card-title" key={review.id}>{review.title}</h1>
                    <div className="review-card-rating" >{voteToStars(voteAverage)}</div>
                </div>
                <h2 className="review-card-review" >"{review.review}"</h2>
        </div>
    )
}
export default ReviewCard