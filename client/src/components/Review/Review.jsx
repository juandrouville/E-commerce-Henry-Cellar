import React from "react";
import img from "../../assets/images/user.png";
import { FaStar } from "react-icons/fa";

function Review(review) {
  // var review = review.review;
  var stars = review.score;
  var score = Array(1, 2, 3, 4, 5);
  score.length = stars;

  return (
    <div className="containerReview">
      <div className="contentReview">
        <img src={img} alt="this is an alt"></img>
        <div>
          <h5>
            {score.map(e => (
              <FaStar className="star" size={12} color="black" />
            ))}{" "}
            - Nombre de usuario
          </h5>
          <p className="comentaryArea">{review.review.commentary}</p>
          <h5>{review.review.createdAt.slice(0, 10)}</h5>
        </div>
      </div>
    </div>
  );
}

export default Review;
