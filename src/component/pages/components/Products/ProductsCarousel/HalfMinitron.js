import React from "react";

function HalfMinitron ({img2, caption2, id}) {
    return (
        <>
        <div className="half-minitron-content">
            <img className="half-minitron-img" src={img2}/>
            <div className="minitron-caption">
                <h5>{caption2}</h5>
            </div>
        </div>
        </>
    )
}

export default HalfMinitron;