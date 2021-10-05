import React from "react";
import '../../../assets/css/DetailsPage.css'

function ProductDetails ({id,
    name,
    type,
    price,
    in_stock,
    image_url,
    spec_list1,
    spec_list2,
    spec_list3,
    spec_list4,
    brand,
    capacity1,
    capacity2,
    capacity3,
    color1,
    color2,
    color3,
    desc_pic1,
    desc_title1,
    desc_title2,
    desc_pic2,
    desc_title3,
    desc_title4}) {
    return (
        <>
        <div className="container det-prod">
            <div className="nav-prods">
                <h6 className="nav-prod">{type}</h6>
                <h6 className="nav-prod">&gt;</h6>
                <h6 className="nav-prod-act">{name}</h6>
            </div>
            <div className="row det-prod1">
                <div className="col-5 product-photo">
                    <img src={image_url} alt="product-photo"/>
                </div>
                <div className="col-7">
                    <div className="row">
                        <div className="details-name-prod col-10">
                            <h6 className="prod-type">{type}</h6>
                            <h3 className="prod-name"><span>{brand}</span><span> {name}</span></h3>
                            <h6 className="prod-bool">Available in stock</h6>
                        </div>
                        <div className="wishlist-prod col-2">
                            <p>like</p>
                        </div>
                    </div>
                    <ul className="spec-lists">
                        <li><p className="spec-list">{spec_list1}</p></li>
                        <li><p className="spec-list">{spec_list2}</p></li>
                        <li><p className="spec-list">{spec_list3}</p></li>
                        <li><p className="spec-list">{spec_list4}</p></li>
                    </ul>
                    <div className="capacity-color-spec row">
                        <div className="col-4 spec-colors wrapper-radio">
                            <p>Choose color</p>
                            <form action="" className="form-detail-prod">
                                <label for="option-1-1" className="spec-color-black option option-1">
                                    <input type="radio" name="color" id="option-1-1" className="spec-color"/>{color1}</label>
                                <label for="option-2-1" className="spec-color-white option option-2">
                                    <input type="radio" name="color" id="option-2-1" className="spec-color"/>{color2}</label>
                                <label for="option-3-1" className="spec-color-special option-3">
                                    <input type="radio" name="color" id="option-3-1" className="spec-color"/>{color3}</label>
                            </form>
                        </div>
                        <div className="col-4 spec-capacities wrapper-radio">
                            <p>Choose the capacity</p>
                            <form action="" className="form-detail-prod">
                                <label for="option-1-2" className="spec-capacity-low option option-1">
                                    <input type="radio" name="capacity" id="option-1-2" className="spec-capacity"/>{capacity1}</label>
                                <label for="option-2-2" className="spec-capacity-mid option option-2">
                                    <input type="radio" name="capacity" id="option-2-2" className="spec-capacity"/>{capacity2}</label>
                                <label for="option-3-2" className="spec-capacity-mid option option-1">
                                    <input type="radio" name="capacity" id="option-3-2" className="spec-capacity"/>{capacity3}</label>
                            </form>
                        </div>
                        <div className="col-4 quantity-select">
                            <p>Quantity</p>
                            <select value = "quantity" className = "form-control form-quantity" name = "quantity" id = "exampleFormControlSelect1">
                                <option disabled selected> 0 </option>
                                <option> 1 </option> 
                                <option> 2 </option> 
                                <option> 3 </option>
                                <option> 4 </option>
                                <option> 5 </option> 
                            </select>
                        </div>
                    </div>
                    <h3 className="quantity-price col-6">{price}</h3>
                    <div className="button-click-product button-click-prod">
                            <button href="#" className="icon-buy1 icon-buy-prod">Buy</button>
                            <button href="#" className="icon-buy2 icon-buy-prod">Add to cart</button>
                    </div>
                </div>
            </div>
            <div className="kotak-description-spec">
                <div className="nav-prod-specs">
                    <h6 className="nav-prod-spec">Description</h6>
                    <h6 className="nav-prod-spec">Review</h6>
                    <h6 className="nav-prod-spec">Photo</h6>
                    <h6 className="nav-prod-spec">Video</h6>
                    <h6 className="nav-prod-spec">Accesories</h6>
                </div>
                <div className="row det-prods1">
                    <div className="col-6">
                        <h3>{desc_title1}</h3>
                        <p>{desc_title2}</p>
                    </div>
                    <div className="col-6 det-prod">
                        <img src={desc_pic1} className="det-prod-pic" alt="desc-product-photo"/>
                    </div>
                </div>
                <div className="row det-prods2">
                    <div className="col-6 det-prod">
                        <img src={desc_pic2} className="det-prod-pic" alt="desc-product-photo"/>
                    </div>
                    <div className="col-6">
                        <h3>{desc_title3}</h3>
                        <p>{desc_title4}</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ProductDetails;