import React from "react";
import { Link } from "react-router-dom";

function Minitron ({img, caption, id, id_product }) {
    return (
        <Link to to={`/products/details/${id_product}`}>
        <div className="minitron-content">
            <img className="minitron-img" src={img}/>
            <div className="minitron-caption">
                <h5>{caption}</h5>
            </div>
        </div>
        </Link>
    )
}

export default Minitron;