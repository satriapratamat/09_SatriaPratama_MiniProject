import React from "react";

function Minitron ({img, caption, id }) {
    return (
        <>
        <div className="minitron-content">
            <img className="minitron-img" src={img}/>
            <div className="minitron-caption">
                <h5>{caption}</h5>
            </div>
        </div>
        </>
    )
}

export default Minitron;