import { useEffect } from "react";
import ImageSlider2 from "./HomeSlider2";
import "../../../assets/css/Carousel2.scss"
import LoadingSvg from "../LoadingSvg";
import useTestimonial from "./GetDataQueryTesti";

function Row4() {
    const { testimonial, loading, error, subscribeTestimonial } = useTestimonial();

    useEffect ( () => {
        subscribeTestimonial();
    });

    if (loading) {
        return <LoadingSvg/>
    }

    if (error) {
        console.log(error);
        return null;
    }


    return(
        <div className="container carousel">
            <h1 className="slider_title">What Our Customer are Saying</h1>
                <div className="user-testi">
                {testimonial.map((v) => (
                    <ImageSlider2
                        key={v.id}
                        id={v.id}
                        ava={v.ava}
                        name={v.name}
                        username={v.username} 
                        they_say={v.they_say}
                    />
                    ))}
                </div>
        </div>
    )
}

export default Row4;