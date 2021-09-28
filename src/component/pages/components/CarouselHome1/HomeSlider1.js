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
        dot:true,
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
                    <ul className="social-icons">
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                    </ul>
                    <div className="details">
                        <h2>iPhone 12 <span className="product-vendor">Smartphone</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className='card-image'>
                        <img src={airpodsPro}/>
                    </div>
                    <ul className="social-icons">
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                    </ul>
                    <div className="details">
                        <h2>Airpods Pro <span className="product-vendor">Earphone</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className='card-image'>
                        <img src={iPhoneXR}/>
                    </div>
                    <ul className="social-icons">
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                    </ul>
                    <div className="details">
                        <h2>iPhone XR <span className="product-vendor">Smartphone</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className='card-image'>
                        <img src={iPhone11}/>
                    </div>
                    <ul className="social-icons">
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                    </ul>
                    <div className="details">
                        <h2>iPhone 11 <span className="product-vendor">Smartphone</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className='card-image'>
                        <img src={iPhoneX}/>
                    </div>
                    <ul className="social-icons">
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                    </ul>
                    <div className="details">
                        <h2>iPhone X <span className="product-vendor">Smartphone</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className='card-image'>
                        <img src={iPhoneSE}/>
                    </div>
                    <ul className="social-icons">
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                    </ul>
                    <div className="details">
                        <h2>iPhone SE 2020 <span className="product-vendor">Smartphone</span></h2>
                    </div>
                </div>
            </div>
        </Slider>
    )
}

export default ImageSlider;