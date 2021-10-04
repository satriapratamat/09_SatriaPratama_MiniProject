import React from 'react';


function ProductsShow({  id, type, name, image_url, price}) {
    // const settings = {
    //     dots:true,
    //     infinite:true,
    //     speed:500,
    //     slidesToShow:3,
    //     slidesToScroll:1,
    //     cssEase: 'linear'
    // }
    return (
        // <Slider {...settings}>
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
                        <ul className="cardtap-icons">
                            <li><a href="#"><p className="icon-buy">Buy</p></a></li>
                            <li><a href="#"><p className="icon-buy">Details</p></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        // </Slider>
    )
}

export default ProductsShow;