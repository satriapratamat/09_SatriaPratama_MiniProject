import React from "react";
import Header from "./Header"
import ProductsRow1 from "./components/Products/ProductsCarousel/indexProductsRow1";
import '../assets/css/Product.css'
import Footer from "./Footer";
import ProductsRow2 from "./components/Products/ProductShow/indexProducts";


function Products() {
    return (
        <>
        <Header className="sticky-header"/>
        <div className="product-el">
            <ProductsRow1/>
        </div>
        <div className="product-el2">
            <ProductsRow2/>
        </div>       
        <Footer/>
        </>
    )
}

export default Products;