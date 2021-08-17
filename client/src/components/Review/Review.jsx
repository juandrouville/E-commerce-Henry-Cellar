import React from "react";
import img from '../../assets/images/user.png'

function Review(){
    return (
        <div className="containerReview">
            <div className="contentReview" >
                <img src = {img} ></img>
                <div>  
                    <h5>Nombre de usuario</h5>
                    <h5>Estrellas</h5>
                    <p className="comentaryArea">
                        kdjsfhjhsdjfhjdshakhfjdhjkhjkfhdjssdfsd
                    </p>
                    <h5>Fecha </h5>
                </div>
            </div>
        </div>
    )
};

export default Review;
                    