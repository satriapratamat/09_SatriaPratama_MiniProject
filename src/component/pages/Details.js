import React from "react";
import Footer from "./Footer";
import Header from "./Header"
import '../assets/css/DetailsPage.css'
import DetailsProductRow from "./components/DetailsPage/indexProductDetails";


function Details() {
    return (
        <>
        <Header className="sticky-header"/>
        <div className="detail-product">
            <DetailsProductRow/>
        </div>
        <Footer/>
        </>
    )
}

export default Details;