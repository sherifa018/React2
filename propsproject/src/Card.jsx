// import React from 'react';
import "./Card.css";

function Card({ image, title, description }) {
  return (
    <div className="card-container">
      <div className="card">
        <img src={image} alt="imge" className="card-image" />
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
}

export default Card;
