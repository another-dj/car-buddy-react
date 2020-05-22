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
          <div>Oil:{oil}</div> <div>alert-message</div>
          <button className="buton">Reset</button>
        </div>
        <div className="drawer">
          <div>Tyres: {tyres}</div>
          <div>alert-message</div> <button className="buton">Reset</button>
        </div>
        <div className="drawer">
          <div>Air Filter: {airFilter}</div> <div>alert-message</div>
          <button className="buton">Reset</button>
        </div>
        <div className="drawer">
          <div>Brakes: {brakes}</div> <div>alert-message</div>
          <button className="buton">Reset</button>
        </div>
        <div className="drawer">
          <div>Coolant: {coolant}</div> <div>alert-message</div>
          <button className="buton">Reset</button>
        </div>
      </div>
    </div>
  );
};

export default DetailBox;
