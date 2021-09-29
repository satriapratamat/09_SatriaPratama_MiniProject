import React from 'react';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


function ImageSlider2({id, ava, name, username, they_say}) {
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
            <div className="card-wrapper2">
                <div className="card2">
                    <p>"</p>
                    <div className="content-card" data-key={id}>
                        <div className='card-ava'>
                            <img src={ava} alt="user"/>
                        </div>
                        <div className="card-name">
                            <p>{name}</p>
                        </div>
                        <div className="card-uname">
                            <p>{username}</p>
                        </div>
                        <div className="card-testi">
                            <p>{they_say}</p>
                        </div>
                    </div>
                    <p>"</p>
                </div>
            </div>
        </Slider>
    )
}

export default ImageSlider2;