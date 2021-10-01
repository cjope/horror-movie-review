import { Card } from "semantic-ui-react"
function ReviewCard({review}){



    let voteStars = "✩✩✩✩✩"

    const voteAverage = review.rating

    const p1 = <img className="pumpkin-light" alt="pumpkin-light" src="https://d29fhpw069ctt2.cloudfront.net/icon/image/85188/preview.svg"></img>
    const p2 = <img className="pumpkin-dark" alt="pumpkin-dark" src="https://d29fhpw069ctt2.cloudfront.net/icon/image/85188/preview.svg"></img>

    function voteToStars(){
        if (voteAverage <3) return voteStars = <p>{p1}{p2}{p2}{p2}{p2}</p>
        if (voteAverage >=3 && voteAverage <5) return voteStars =  <p>{p1}{p1}{p2}{p2}{p2}</p>
        if (voteAverage >=5 && voteAverage <7) return voteStars =  <p>{p1}{p1}{p1}{p2}{p2}</p>
            if (voteAverage >=7 && voteAverage <9) return voteStars = <p>{p1}{p1}{p1}{p1}{p2}</p>
        if (voteAverage >=9) return voteStars = <p>{p1}{p1}{p1}{p1}{p1}</p>
        else return <p>{p2}{p2}{p2}{p2}{p2}</p>
        }    



    return(
        <div style={{width:"100%", paddingBottom:"5%" }}>
        {/* <div style={{backgroundImage: `url(${review.image})`, width:"500px"}} > */}
            {/* <Card> */}
                <div className="review-card">
                <h1 className="review-title" key={review.id}>{review.title}</h1>
                <p className="review-rating" >{voteToStars(voteAverage)}</p>
                {/* </div> */}
                {/* <div className="review-card"> */}
                <h2 className="review-review" >"{review.review}"</h2>
                {/* </div> */}
                {/* <div className="review-card" > */}
                <img className="review-image" src={review.image}/>
                {/* <img src={review.image}></img> */}
                </div>
            {/* </Card> */}
        </div>





        
    )
}
export default ReviewCard