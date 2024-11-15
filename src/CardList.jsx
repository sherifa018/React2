import React from "react";
import Card from "./Card";

const CardList = ({ cards }) => {
  return (
    <div className="card-container">
      {cards.map((item, index) => (
        <Card
          key={index}
          title={item.title}
          description={item.description}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default CardList;
