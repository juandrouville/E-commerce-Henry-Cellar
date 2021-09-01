import React from "react";
import wine from '../../assets/images/wine.gif'

function Loading (){
return(
    <div className="loading-page">
        <div className="loading-container">
            <img className="gif" src={wine} alt='Loading...'/>
        </div>
    </div>
)
};

export default Loading;