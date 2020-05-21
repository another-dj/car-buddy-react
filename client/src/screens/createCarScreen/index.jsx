import React, { useState } from "react";
import "./styles.css";

const Screen = () => {
  const [fuel, setFuel] = useState("");
  const [kms, setKms] = useState("");
  const [name, setName] = useState("");
  const [oil, setOil] = useState("");
  const [picture, setPicture] = useState("");

  const handleFuel = (event) => {
    setFuel(event.target.value);
  };
  const handleKms = (event) => {
    setKms(event.target.value);
  };
  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleOil = (event) => {
    setOil(event.target.value);
  };
  const handlePicture = (event) => {
    setPicture(event.target.value);
  };

  return (
    <div>
      <form onSubmit={() => {}}>
        <div>
          <div>
            <span>Fuel Type</span>
          </div>
          <select value={fuel} onChange={handleFuel}>
            <option value="petrol">Petrol</option>
            <option value="diesel">Diesel</option>
          </select>
        </div>

        <div>
          <div>
            <span>Kilometers</span>
          </div>
          <input type="number" value={kms} onChange={handleKms} />
        </div>
        <div>
          <div>
            <span>Name</span>
          </div>
          <input type="text" value={name} onChange={handleName} />
        </div>
        <div>
          <div>
            <span>Last oil change</span>
          </div>
          <input type="number" value={oil} onChange={handleOil} />
        </div>
        <div>
          <div>
            <span>Picture</span>
          </div>
          <input type="text" value={picture} onChange={handlePicture} />
        </div>

        <input type="submit" value="Create car" />
      </form>
    </div>
  );
};

export default Screen;
