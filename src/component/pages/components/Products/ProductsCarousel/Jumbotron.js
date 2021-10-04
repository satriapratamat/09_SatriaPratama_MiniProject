import React from "react";

function Jumbotron ({img, title, subtitle, price, id }) {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" key={img} data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="" data-slide-to={id} className="active"></li>
                <li data-target="" data-slide-to={id+1}></li>
                <li data-target="" data-slide-to={id+2}></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src={img}/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>{title}</h5>
                        <p>{subtitle}</p>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}

export default Jumbotron;