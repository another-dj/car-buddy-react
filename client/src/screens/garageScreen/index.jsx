import React, { useState, useEffect } from "react";
import CarCard from "../../components/carCard";
import { Link } from "react-router-dom";
import "./styles.css";

const Screen = () => {
  const cars = [
    {
      name: "ferrari",
      img:
        "https://res.cloudinary.com/dt2evehg4/image/upload/v1574941556/carBudy-pics/caravatar_mkcbm2.png",
    },
    {
      name: "bugati",
      img:
        "https://res.cloudinary.com/dt2evehg4/image/upload/v1574941556/carBudy-pics/caravatar_mkcbm2.png",
    },
    {
      name: "audi",
      img:
        "https://res.cloudinary.com/dt2evehg4/image/upload/v1574941556/carBudy-pics/caravatar_mkcbm2.png",
    },
    {
      name: "nissan",
      img:
        "https://res.cloudinary.com/dt2evehg4/image/upload/v1574941556/carBudy-pics/caravatar_mkcbm2.png",
    },
    {
      name: "VW",
      img:
        "https://res.cloudinary.com/dt2evehg4/image/upload/v1574941556/carBudy-pics/caravatar_mkcbm2.png",
    },
    {
      name: "BMW",
      img:
        "https://res.cloudinary.com/dt2evehg4/image/upload/v1574941556/carBudy-pics/caravatar_mkcbm2.png",
    },
    {
      name: "OPEL",
      img:
        "https://res.cloudinary.com/dt2evehg4/image/upload/v1574941556/carBudy-pics/caravatar_mkcbm2.png",
    },
    {
      name: "ford",
      img:
        "https://res.cloudinary.com/dt2evehg4/image/upload/v1574941556/carBudy-pics/caravatar_mkcbm2.png",
    },
    {
      name: "nissan",
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
          return <CarCard name={car.name} img={car.img} />;
        })}
      </div>
      <div className="">
        <Link className="footerButton" to="/createCar">
          Add new Car
        </Link>
      </div>
    </div>
  );
};

export default Screen;
