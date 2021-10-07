import React from "react";
import Header from "./Header"
import "../assets/css/Home.css"
import welcomePhone from "../assets/img/iPhone-12-PNG-Pic.png"
import { Link } from "react-router-dom";
import Row2 from "./components/CarouselHome1/indexHomeSlide1";
import Row3 from "./components/GadgetToday/GadgetToday"
import Row4 from "./components/CarouselHome2/indexHomeSlide2"
import Footer from "./Footer";

function Home() {
    return (
        <>
        <Header className="sticky-header"/>
        <div className="main-content">
            <div className="row row1">
                <div className="col-md-6">
                    <div className="landing-message">
                        <div className="upper-landing">
                            <p>Your next gadget store</p>
                            <p className="not-so-upper-landing">is something<span className="white-stabilo">cool.</span></p>
                        </div>
                        <p className="down-landing">We work with various global brands* and have createn an smart gadget pair recomendations for you to easiest life. Just get in touch with us.</p>
                        <button className="btn btn-white" href="#row2" >Get Started</button>
                    </div>
                </div>
                <div className="col-md-6">
                    <img src={welcomePhone} alt="logo" className="welcomePhone"/>
                </div>
            </div>
        </div>
        <div id="row2"className="row2">
            <Row2/>
        </div>
        <div id="row3"className="row3">
            <Row3/>
        </div>
        <div id="row4"className="row4">
            <Row4/>
        </div>
        <div id="footer"className="footer">
            <Footer/>
        </div>
        </>
    )
}

export default Home