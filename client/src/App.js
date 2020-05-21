import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomeScreen from "./screens/homeScreen";
import RegisterScreen from "./screens/registerScreen/index.js";
import LoginScreen from "./screens/logInScreen";
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

          <Route path="/createCar">
            <CreateCarScreen />
          </Route>
          
          <Route path="/garage">
            <GarageScreen />
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
