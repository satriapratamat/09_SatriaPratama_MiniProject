import React from "react";
import { Link } from "react-router-dom";

function HalfMinitron ({img2, caption2, id2, id_product2}) {
    return (
        <Link to={`/products/details/${id_product2}`}>
        <div className="half-minitron-content">
            <img className="half-minitron-img" src={img2}/>
            <div className="minitron-caption">
                <h5>{caption2}</h5>
            </div>
        </div>
        </Link>
    )
}

export default HalfMinitron;