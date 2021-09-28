import React from 'react';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import iPhone12 from '../../../assets/img/iPhone12.jpg'
import airpodsPro from '../../../assets/img/airpods.jpg'
import iPhoneXR from '../../../assets/img/iPhoneXR.jpg'
import iPhone11 from '../../../assets/img/iPhone11.jpg'
import iPhoneX from '../../../assets/img/iPhoneX.jpg'
import iPhoneSE from '../../../assets/img/iPhoneSE.png'

function ImageSlider() {
    const settings = {
        dots:true,
        infinite:true,
        speed:500,
        slidesToShow:3,
        sliddesToScroll:1,
        cssEase: 'linear'
    }
    return (
        <Slider {...settings}>
            <div className="card-wrapper">
                <div className="card">
                    <div className='card-image'>
                        <img src={iPhone12}/>
                    </div>
                    <ul className="cardtap-icons">
                        <li><a href="#"><p className="icon-buy">Buy</p></a></li>
                        <li><a href="#"><p className="icon-buy">Details</p></a></li>
                    </ul>
                    <div className="details">
                        <h2><span className="product-type">Smartphone</span><span className="product-vendor">iPhone 12</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className='card-image'>
                        <img src={airpodsPro}/>
                    </div>
                    <ul className="cardtap-icons">
                        <li><a href="#"><p className="icon-buy">Buy</p></a></li>
                        <li><a href="#"><p className="icon-buy">Details</p></a></li>
                    </ul>
                    <div className="details">
                        <h2><span className="product-type">Earphone</span><span className="product-vendor">Airpods Pro</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className='card-image'>
                        <img src={iPhoneXR}/>
                    </div>
                    <ul className="cardtap-icons">
                        <li><a href="#"><p className="icon-buy">Buy</p></a></li>
                        <li><a href="#"><p className="icon-buy">Details</p></a></li>
                    </ul>
                    <div className="details">
                        <h2><span className="product-type">Smartphone</span><span className="product-vendor">iPhone XR</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className='card-image'>
                        <img src={iPhone11}/>
                    </div>
                    <ul className="cardtap-icons">
                        <li><a href="#"><p className="icon-buy">Buy</p></a></li>
                        <li><a href="#"><p className="icon-buy">Details</p></a></li>
                    </ul>
                    <div className="details">
                        <h2><span className="product-type">Smartphone</span><span className="product-vendor">iPhone 11</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className='card-image'>
                        <img src={iPhoneX}/>
                    </div>
                    <ul className="cardtap-icons">
                        <li><a href="#"><p className="icon-buy">Buy</p></a></li>
                        <li><a href="#"><p className="icon-buy">Details</p></a></li>
                    </ul>
                    <div className="details">
                        <h2><span className="product-type">Smartphone</span><span className="product-vendor">iPhone X</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className='card-image'>
                        <img src={iPhoneSE}/>
                    </div>
                    <ul className="cardtap-icons">
                        <li><a href="#"><p className="icon-buy">Buy</p></a></li>
                        <li><a href="#"><p className="icon-buy">Details</p></a></li>
                    </ul>
                    <div className="details">
                        <h2><span className="product-type">Smartphone</span><span className="product-vendor">iPhone SE 2020</span></h2>
                    </div>
                </div>
            </div>
        </Slider>
    )
}

export default ImageSlider;