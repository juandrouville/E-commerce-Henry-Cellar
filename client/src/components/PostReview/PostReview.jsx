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
    }

    function submitPost(e){
        setReview({
            ...review,
            score:rating,
        })
        console.log({...review});
        dispatch(postReview(review));
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
                        onClick={() => {setReview({
                            ...review,
                            score:ratingValue});
                            setRating(ratingValue)}}
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