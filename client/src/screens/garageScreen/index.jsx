import React, { useState, useEffect } from "react";
import CarCard from "../../components/carCard";
import { Link } from "react-router-dom";
import "./styles.css";

const Screen = () => {
  const cars = [
    {
      name: "Alexis=Gay",
      km: 10,
      tyres: 10,
      airFilter: 10,
      brakes: 10,
      coolant: 10,
      id: 1,
      fueltype: "gas",
      img:
        "https://res.cloudinary.com/dt2evehg4/image/upload/v1574941556/carBudy-pics/caravatar_mkcbm2.png",
    },
    {
      name: "bugati",
      km: 10,
      tyres: 10,
      airFilter: 10,
      brakes: 10,
      coolant: 10,
      id: 2,
      fueltype: "petrol",
      img:
        "https://res.cloudinary.com/dt2evehg4/image/upload/v1574941556/carBudy-pics/caravatar_mkcbm2.png",
    },
    {
      name: "audi",
      km: 10,
      tyres: 10,
      airFilter: 10,
      brakes: 10,
      coolant: 10,
      id: 3,
      fueltype: "petrol",
      img:
        "https://res.cloudinary.com/dt2evehg4/image/upload/v1574941556/carBudy-pics/caravatar_mkcbm2.png",
    },
    {
      name: "nissan",
      km: 10,
      tyres: 10,
      airFilter: 10,
      brakes: 10,
      coolant: 10,
      id: 4,
      fueltype: "petrol",
      img:
        "https://res.cloudinary.com/dt2evehg4/image/upload/v1574941556/carBudy-pics/caravatar_mkcbm2.png",
    },
    {
      name: "VW",
      km: 10,
      tyres: 10,
      airFilter: 10,
      brakes: 10,
      coolant: 10,
      id: 5,
      fueltype: "diesel",
      img:
        "https://res.cloudinary.com/dt2evehg4/image/upload/v1574941556/carBudy-pics/caravatar_mkcbm2.png",
    },
    {
      name: "BMW",
      km: 10,
      tyres: 10,
      airFilter: 10,
      brakes: 10,
      coolant: 10,
      id: 6,
      fueltype: "petrol",
      img:
        "https://res.cloudinary.com/dt2evehg4/image/upload/v1574941556/carBudy-pics/caravatar_mkcbm2.png",
    },
    {
      name: "OPEL",
      km: 10,
      tyres: 10,
      airFilter: 10,
      brakes: 10,
      coolant: 10,
      id: 7,
      fueltype: "petrol",
      img:
        "https://res.cloudinary.com/dt2evehg4/image/upload/v1574941556/carBudy-pics/caravatar_mkcbm2.png",
    },
    {
      name: "ford",
      km: 10,
      tyres: 10,
      airFilter: 10,
      brakes: 10,
      coolant: 10,
      id: 8,
      fueltype: "petrol",
      img:
        "https://res.cloudinary.com/dt2evehg4/image/upload/v1574941556/carBudy-pics/caravatar_mkcbm2.png",
    },
    {
      name: "nissan",
      km: 10,
      tyres: 10,
      airFilter: 10,
      brakes: 10,
      coolant: 10,
      id: 9,
      fueltype: "diesel",
      img:
        "https://res.cloudinary.com/dt2evehg4/image/upload/v1574941556/carBudy-pics/caravatar_mkcbm2.png",
    },
  ];
  const link =
    "https://res.cloudinary.com/dt2evehg4/image/upload/v1574941556/carBudy-pics/caravatar_mkcbm2.png";
  return (
    <div className="garage">
      <h2>Garage Screen</h2>
      <div className="cards">
        {cars.map((car) => {
          return (
            <Link to={`/garage/${car.id}`}>
              <CarCard name={car.name} img={car.img} />;
            </Link>
          );
        })}
      </div>
      <div className="footer">
        <Link className="footerButton" to="/createCar">
          Add New Car
        </Link>
      </div>
    </div>
  );
};

export default Screen;
