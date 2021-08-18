import React from "react";
import img from '../../assets/images/user.png'

function Review(review){
    var review = review.review;
    console.log(review);
    return (
        <div className="containerReview">
            <div className="contentReview" >
                <img src = {img} ></img>
                <div>  
                    <h5>Nombre de usuario</h5>
                    <h5>Puntuacion : {review.score} </h5>
                    <p className="comentaryArea">
                        {review.commentary}
                    </p>
                    <h5>{review.createdAt.slice(0,10)}</h5>
                </div>
            </div>
        </div>
    )
};

export default Review;
                    