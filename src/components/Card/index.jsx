import React from "react";
import { Link } from "react-router-dom";
import { PERSONAJE_DETAILS } from "../../Constants/Routes";
import "./card.css";

function Card({ image, id, name, description }) {
  const descrip = description.slice(0, 60);
  return (
    <div className="container-card">
      <div className="container-card_img">
        <img src={`${image.path}.${image.extension}`} alt="12" />
      </div>
      <div className="container-card_paragraph">
        <div>
          <h3>{name}</h3>
        </div>
        <div>
          <p style={{ fontSize: "10px" }}>{descrip}...</p>
        </div>
        <div>
          <Link to={`${PERSONAJE_DETAILS}/${id}`}>Go details</Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
