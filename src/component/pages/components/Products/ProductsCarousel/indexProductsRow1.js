import { useState, useEffect } from "react";
import LoadingSvg from '../../LoadingSvg'
import useJumbotron from "./GetQueryJumbotron";
import Jumbotron from './Jumbotron'
import Minitron from "./Minitron";
import useHalfMinitron from "./GetQueryHalfMinitron";
import useMinitron from "./GetQueryMinitron";
import '../../../../assets/css/Product.css'

function ProductsRow1() {
    const { jumbotron, loading, error, subscribeJumbotron } = useJumbotron();

    useEffect ( () => {
        subscribeJumbotron();
    });

    const { minitron, loading1, error1, subscribeMinitron } = useMinitron();

    useEffect ( () => {
        subscribeMinitron();
    });

    const { half_minitron, loading2, error2, subscribeHalfMinitron } = useHalfMinitron();

    useEffect ( () => {
        subscribeHalfMinitron();
    });

    if (loading | loading1 | loading2) {
        return <LoadingSvg/>
    }

    if (error | error1 | error2) {
        console.log(error);
        return null;
    }

    return(
        <>
        <div className="content1">
            {jumbotron.map((v) => (
            <Jumbotron
                key={v.id}
                id={v.id}
                img={v.jumbo_img}
                subtitle={v.subtitle}
                title={v.title} 
                price={v.price}
            />
            ))}
        </div>
        <div className="content2">
        {minitron.map((a) => (
            <Minitron
                key={a.id}
                id={a.id}
                img={a.img}
                caption={a.caption}
            />
        ))}
        {half_minitron.map((b) => (
            <Minitron
                key={b.id}
                id2={b.id}
                img2={b.img}
                caption2={b.caption}
            />
        ))}
        </div>
        </>
    )
}

export default ProductsRow1;