import React from 'react';
import { Link } from 'react-router-dom';

function ProductsShow({  id, type, name, image_url, price}) {
    return (
            <div className="card-wrapper3">
                <div className="card3">
                    <div className="content-card3">
                        <div className="details2">
                            <h2><span className="product-type2">{type}</span><span className="product-vendor2">{name}</span></h2>
                        </div>
                        <div className="card-products">
                            <img src={image_url} alt="user"/>
                        </div>
                        <div className="product-price">
                            <p>{price}</p>
                        </div>
                        <div className="button-click-product row container-fluid">
                            <button href="#" className="icon-buy1 col-6">Buy</button>
                            <Link to={`/products/details/${id}`} className="col-6"><button href="#" className="icon-buy2">Details</button></Link>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default ProductsShow;