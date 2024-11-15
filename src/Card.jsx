<<<<<<< HEAD:propsproject/src/Card.jsx
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
=======
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
>>>>>>> 40b4ea02b71351013b7d03bb688eb55f5fd6006b:src/Card.jsx
