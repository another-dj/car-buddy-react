import React from "react";
import "./styles.css";

const CarCard = ({ name, img }) => {
  return (
    <div className="card">
        <img src={img} />
      
      <div className="carName">
        <p>{name}</p>
      </div>
    </div>
  );
};

export default CarCard;
