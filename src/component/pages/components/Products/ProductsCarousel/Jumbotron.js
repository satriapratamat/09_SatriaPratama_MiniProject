import React from "react";
import { Link } from "react-router-dom";

function Jumbotron ({img, title, subtitle, price, id_product }) {
    return (
        <Link to={`/products/details/${id_product}`} key={img}>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src={img}/>
                    <div className="carousel-caption d-none d-md-block text-jumbotron">
                        <h5>{title}</h5>
                        <p>{subtitle}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Jumbotron;