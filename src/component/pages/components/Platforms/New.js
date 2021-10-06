import React from "react";
import"../../../assets/css/Platform.css";
import Card from "./Card";

function New({ author, title, image, url, description }) {
  return (
    <div className="list">
      <Card>
        <div className="contain1">
          <div className="img-wrapper1">
            <img src={image} alt="new" />
          </div>
          <div className="content-wrapper1">
            <h3>{title}</h3>
            <p className="author-content">Author : {author}</p>
            <p><span>{description}</span><a href={url} target="_blank" className="read-more">Read More</a></p>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default New