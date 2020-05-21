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

import Navbar from "./components/navbar";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="darkContainer">
        <Navbar />
        <Switch>
          <Route path="/register">
            <RegisterScreen />
          </Route>

          <Route path="/login">
            <LoginScreen />
          </Route>

          <Route path="/profile">
            <ProfileScreen />
          </Route>

          <Route path="/editProfile">
            <EditProfileScreen />
          </Route>

          <Route path="/createCar">
            <CreateCarScreen />
          </Route>

          <Route path="/updateKms">
            <UpdateKmsScreen />
          </Route>

          <Route path="/editCar">
            <EditCarScreen />
          </Route>
          
          <Route path="/garage">
            <GarageScreen />
          </Route>

          <Route path="/serviceStations">
            <ServiceStationsScreen />
          </Route>


          <Route path="/">
            <HomeScreen />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
