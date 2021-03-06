function VoteToStars({review}){
    const voteAverage = review.rating
    const p1 = <img className="pumpkin-light" alt="pumpkin-light" src="https://d29fhpw069ctt2.cloudfront.net/icon/image/85188/preview.svg"></img>
    const p0 = <img className="pumpkin-dark" alt="pumpkin-dark" src="https://d29fhpw069ctt2.cloudfront.net/icon/image/85188/preview.svg"></img>

    if (voteAverage ===1) return <>{p1}{p0}{p0}{p0}{p0}</>
    if (voteAverage ===2) return <>{p1}{p1}{p0}{p0}{p0}</>
    if (voteAverage ===3) return <>{p1}{p1}{p1}{p0}{p0}</>
    if (voteAverage ===4) return <>{p1}{p1}{p1}{p1}{p0}</>
    if (voteAverage ===5) return <>{p1}{p1}{p1}{p1}{p1}</>
    else return <>{p0}{p0}{p0}{p0}{p0}</>
    }    
export default VoteToStars