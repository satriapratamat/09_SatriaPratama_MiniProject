import React from "react";
import Header from "./Header"
import "../assets/css/Home.css"
import welcomePhone from "../assets/img/iPhone-12-PNG-Pic.png"
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
        <Header className="sticky-header"/>
        <div className="main-content">
            <div className="row row1">
                <div className="col-md-6 col-sm-6">
                    <div className="landing-message">
                        <div className="upper-landing">
                            <p>Your next gadget store</p>
                            <p className="not-so-upper-landing">is something<span className="white-stabilo">cool.</span></p>
                        </div>
                        <p className="down-landing">We work with various global brands* and have createn an smart gadget pair recomendations for you to easiest life. Just get in touch with us.</p>
                        <button className="btn btn-white" >Get Started</button>
                    </div>
                </div>
                <div className="col-md-6 col-sm-6">
                    <img src={welcomePhone} alt="logo" className="welcomePhone"/>
                </div>
            </div>
            <div className="row row2">
            {/* <!-- Carousel wrapper --> */}
                <div
                id="carouselBasicExample"
                className="carousel slide carousel-fade"
                data-mdb-ride="carousel"
                >
                {/* <!-- Indicators --> */}
                <div class="carousel-indicators">
                    <button
                    type="button"
                    data-mdb-target="#carouselBasicExample"
                    data-mdb-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                    ></button>
                    <button
                    type="button"
                    data-mdb-target="#carouselBasicExample"
                    data-mdb-slide-to="1"
                    aria-label="Slide 2"
                    ></button>
                    <button
                    type="button"
                    data-mdb-target="#carouselBasicExample"
                    data-mdb-slide-to="2"
                    aria-label="Slide 3"
                    ></button>
                </div>

                {/* <!-- Inner --> */}
                <div className="carousel-inner">
                    {/* <!-- Single item --> */}
                    <div className="carousel-item active">
                    <img
                        src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
                        className="d-block w-100"
                        alt="..."
                    />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </div>
                    </div>

                    {/* <!-- Single item --> */}
                    <div className="carousel-item">
                    <img
                        src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
                        className="d-block w-100"
                        alt="..."
                    />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    </div>

                    {/* <!-- Single item --> */}
                    <div className="carousel-item">
                    <img
                        src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
                        className="d-block w-100"
                        alt="..."
                    />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </div>
                    </div>
                </div>
                {/*<!-- Inner -->*/}

                {/* <!-- Controls --> */}
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-mdb-target="#carouselBasicExample"
                    data-mdb-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-mdb-target="#carouselBasicExample"
                    data-mdb-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
                {/* <!-- Carousel wrapper --> */}
            </div>
        </div>
        </>
    )
}

export default Home