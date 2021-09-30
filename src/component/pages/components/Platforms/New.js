import React from "react";
import"../../../assets/css/Platform.css";
import Card from "./Card";

function New({ author, title, image, urlLink }) {
  return (
    <li className="list">
      <Card>
        <div className="contain">
          <div className="wrapper">
            <img src={image} alt="new" />
          </div>
          <h3>{title}</h3>
          <p>Author : {author}</p>
        </div>
      </Card>
    </li>
  );
}

export default New