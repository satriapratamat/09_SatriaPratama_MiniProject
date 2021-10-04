import React from "react";

function Minitron ({img, caption, id, caption2, img2, id2 }) {
    return (
        <>
        <div className="mini-content">
            <div className="minitron-content">
                <img className="minitron-img" src={img}/>
                <div className="minitron-caption">
                    <h5>{caption}</h5>
                </div>
            </div>
            <div className="half-minitron-content">
                    <img className="half-minitron-img" src={img2}/>
                    <div className="minitron-caption">
                        <h5>{caption2}</h5>
                    </div>
            </div>
        </div>
        </>
    )
}

export default Minitron;