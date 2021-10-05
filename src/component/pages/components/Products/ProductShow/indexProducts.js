import { useEffect } from "react";
import useProduct from "./GetDataQueryProducts";
import ProductsShow from "./ProductsShow";
import '../../../../assets/css/Product.css'

function ProductsRow2() {
    const { product, loading, error, subscribeProduct } = useProduct();

    useEffect ( () => {
        subscribeProduct();
    });

    if (loading) {
        return <h3>Loading</h3>
    }

    if (error) {
        console.log(error);
        return null;
    }


    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-5"><h1 className="slider_title product-session-title">Products</h1></div>
                <div className="col-2"></div>
                <div className="col-5"><span className="news-search">
                    <input
                    placeholder='Search...'
                    name='text'
                    className='news-input product-session-input'
                    /><button className='news-button'>Submit</button></span></div>
            </div>
            <div className="catalog-card">
                {product.map((v, idx) => (
                    <ProductsShow
                        key={idx}
                        id={v.id}
                        type={v.type}
                        name={v.name}
                        image_url={v.image_url} 
                        price={v.price}
                    />
                    ))}
                </div>
        </div>
    )
}

export default ProductsRow2;