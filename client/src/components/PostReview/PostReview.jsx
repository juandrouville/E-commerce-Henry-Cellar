import React from 'react';
import { useState } from 'react';
import { FaStar } from "react-icons/fa";
import { postReview } from "../../actions/index";
import { useDispatch } from 'react-redux';



function PostReview (productId){

    productId = productId.productId;

    const dispatch = useDispatch();

    const [review , setReview ] = useState({
        commentary:'',
        score:0,
        productId:'',
    });

    const [rating, setRating] = useState(null);
    const [hover, setHover]= useState(null);

    
    function changeComentary(e){
        setReview({
            ...review,
            productId:productId,
            commentary:e.target.value,
        });
    };

    function cleanForm(){
        setRating("");
        setHover("");
        document.getElementById("textarea").value = "";
    
    }

    function submitPost(e){
        setReview({
            ...review,
            score:rating,
        })
        dispatch(postReview(review));
        cleanForm();
    }

    return (
        <div className = "containerPostReview">
            <h1>Thanks for trust !</h1>
            <h3>Your opinion is important</h3>
            <div className = "containerStars">
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                return (
                    <label>

                        <input 
                        className="input" 
                        type="radio" 
                        name="rating" 
                        value={ratingValue}
                        onClick={() => {setReview({
                            ...review,
                            score:ratingValue});
                            setRating(ratingValue)}}
                        />
                        <FaStar 
                        className="star" 
                        color={ratingValue <= (hover || rating) ? "#e6b567" : "#e4e5e9"}
                        onMouseEnter={() => setHover(ratingValue)}
                        onMouseLeave={() => setHover(null)}
                        size={20} 
                        />

                    </label>

                )
            })}
        </div>
            <textarea className = "comentaryArea" id="textarea" placeholder="Your Opinion" onChange={changeComentary} />
            <input className = "submit" type="submit" onClick={submitPost} />
        </div>

    )
};

export default PostReview;