import React from 'react';
import RatingStar from 'components/ratingStar/ratingStar';
import { useState } from 'react';
import { FaStar } from "react-icons/fa";




function PostReview (productId){

    const [review , setReview ] = useState({
        comentary:'',
        score:0,
        productId:'',
    });

    const [rating, setRating] = useState(null);
    const [hover, setHover]= useState(null);

    

    function changeComentary(e){
        setReview({
            comentary:e.target.value,
        });
    }

    function submitPost(e){
        setReview({
            ...review,
            score:rating,
            productId:productId,
        })
    }

    return (
        <div>
            <div>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                return (
                    <label>

                        <input 
                        className="input" 
                        type="radio" 
                        name="rating" 
                        value={ratingValue}
                        onClick={() => setRating(ratingValue)}
                        />
                        <FaStar 
                        className="star" 
                        color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                        onMouseEnter={() => setHover(ratingValue)}
                        onMouseLeave={() => setHover(null)}
                        size={15} 
                        />

                    </label>

                )
            })}
        </div>
            <input type="submit" onClick={submitPost} />
            <textarea onChange={changeComentary} />
        </div>

    )
};

export default PostReview;