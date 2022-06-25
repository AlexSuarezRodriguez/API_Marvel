import React from "react";
import { Link } from "react-router-dom";
import { PERSONAJE_DETAILS } from "../../Constants/Routes";
import "./card.css";

function Card({ image, id, name, description, title }) {
  return (
    <div className="container-card">
      <img src={`${image.path}.${image.extension}`} alt="12" />
      <div className="container-card_paragraph">
        {name ? (
          <h3>
            <strong>{name}</strong>
          </h3>
        ) : (
          <h3>
            <strong>{title}</strong>
          </h3>
        )}
        {description && (
          <p style={{ fontSize: "10px" }}>{description.slice(0, 60)}...</p>
        )}
        <div>
          <Link to={`${PERSONAJE_DETAILS}/${id}`} className="btn-header-users">
            Go details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;

Card.defaultProps = {
  name: "",
  description: "...",
  title: "",
};
