import ImageSlider from "./HomeSlider1";
import "../../../assets/css/Carousel.scss"

function Row2() {
    return(
        <div className="container mt-5 carousel">
            <h1 className="slider_title">Featured on our store</h1>
            <ImageSlider/>
        </div>
    )
}

export default Row2;