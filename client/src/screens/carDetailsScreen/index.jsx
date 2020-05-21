import React from "react";
import CarImg from "../../Images/transparent_car-removebg-preview.png";
import DetailBox from "../../components/detailBox";
import "./styles.css";

const Screen = () => {
  const car = {
    name: "O Ganda-Bote",
    km: 100000,
    tyres: 100,
    airFilter: 100,
    brakes: 100,
    coolant: 100,
    id: 1,
    fuelType: "gas",
    img:
      "https://res.cloudinary.com/dt2evehg4/image/upload/v1574941556/carBudy-pics/caravatar_mkcbm2.png",
  };
  return (
    <div className="container">
      <div className="title">
        <h2>{car.name}</h2>
      </div>

      <div className="splitScreen">
        <div className="theCar">
          <img src={CarImg} alt="" />
        </div>
        <div className="theBox">
          <DetailBox
            kms={car.km}
            tyres={car.tyres}
            airFilter={car.airFilter}
            brakes={car.brakes}
            coolant={car.coolant}
            fuelType={car.fuelType}
          />
        </div>
      </div>
    </div>
  );
};

export default Screen;
