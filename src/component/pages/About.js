import React from "react";
import Footer from "./Footer";
import Header from "./Header"
import illustrasi from "../assets/img/Asset2.png"
import illustrasi2 from "../assets/img/Asset1.png"




function About() {
    return (
        <>
        <Header className="sticky-header"/>
        <h1 className="title-about" style={{"color" : "white"}}>About the App</h1>
        <p className="paragraph-about" style={{"color" : "white"}} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque dolores ipsam officiis consectetur molestiae, exercitationem similique id saepe doloremque veniam porro corporis ut earum dicta eius impedit nam repellat quos?</p>
        <div>
                <div className="row">
                    <img style={{"width" : "50%"}, {"height" : "50%"}} className="footer-about" src={illustrasi} alt="foto"></img>
                </div>
        </div>
        <h1 className="title-about" style={{"color" : "white"}} >About the Author</h1>
            <p className="paragraph-about" style={{"color" : "white"}} >This app was developed by Satria, a self-taught web developer and technical writer.</p>
            <div>
                <div className="row">
                    <img style={{"width" : "50%"}, {"height" : "50%"}} className="footer-about" src={illustrasi2} alt="foto2"></img>
                </div>
            </div>
        <Footer/>
        </>
    )
}

export default About;