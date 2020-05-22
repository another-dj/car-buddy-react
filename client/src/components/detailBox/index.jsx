import React from "react";
import "./styles.css";

const DetailBox = ({
  fuelType,
  kms,
  oil,
  tyres,
  airFilter,
  brakes,
  coolant,
}) => {
  return (
    <div className="theGreatBox">
      <div className="topDetails">
        <div> Fuel: {fuelType} </div>
        <div> Car Kms: {kms} </div>
      </div>
      <div className="scrollDetails">
        <div className="drawer">
          Oil:{oil} alert-message <button className="buton">Reset</button>
        </div>
        <div className="drawer"> Tyres: {tyres}</div>
        <div className="drawer"> Air Filter: {airFilter}</div>
        <div className="drawer"> Brakes: {brakes}</div>
        <div className="drawer"> Coolant: {coolant}</div>
      </div>
    </div>
  );
};

export default DetailBox;
