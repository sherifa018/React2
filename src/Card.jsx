// import React from 'react';
import "./Card.css";

function Card({ cards }) {
  return (
    <div className="card-container">
      {cards.map((card, index) => (
        <div key={index} className="card">
          <img src={card.image} alt={card.title} className="card-image" />
          <h2 className="card-title">{card.title}</h2>
          <p className="card-description">{card.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Card;
