import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomeScreen from "./screens/homeScreen";
import RegisterScreen from "./screens/registerScreen/index.js";
import LoginScreen from "./screens/logInScreen";
import ProfileScreen from "./screens/profileScreen";
import EditProfileScreen from "./screens/editProfileScreen";
import ServiceStationsScreen from "./screens/serviceStationsScreen";
import UpdateKmsScreen from "./screens/updateKmsScreen";
import EditCarScreen from "./screens/editCarScreen";
import GarageScreen from "./screens/garageScreen";
import CreateCarScreen from "./screens/createCarScreen";
import CarDetailsScreen from "./screens/carDetailsScreen";

import Navbar from "./components/navbar";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="darkContainer">
        <Navbar />

        <Switch>
          <Route path="/register" component={RegisterScreen} />

          <Route path="/login" component={LoginScreen} />

          <Route path="/profile" component={ProfileScreen} />

          <Route path="/editProfile" component={EditProfileScreen} />

          <Route path="/createCar" component={CreateCarScreen} />

          <Route path="/updateKms" component={UpdateKmsScreen} />

          <Route path="/editCar" component={EditCarScreen} />

          <Route path="/garage/:id" component={CarDetailsScreen} />

          <Route path="/garage" component={GarageScreen} />

          <Route path="/serviceStations" component={ServiceStationsScreen} />

          <Route path="/" component={HomeScreen} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
