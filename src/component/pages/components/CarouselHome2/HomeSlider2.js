import React from 'react';
// import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "../../../assets/css/Carousel2.scss"


function ImageSlider2({id, ava, name, username, they_say}) {
    return (
        // <Slider {...settings}>
            <div className="card-wrapper2">
                <div className="card2">
                    <div className="content-card">
                        <div className="row">
                            <div className="col-4"></div>
                            <div className='col-4 card-ava'>
                                <img src={ava} alt="user"/>
                            </div>
                            <div className="col-4"></div>
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
                </div>
            </div>
        // </Slider>
    )
}

export default ImageSlider2;