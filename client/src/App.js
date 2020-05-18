import React from "react";
import {
  BrowserRouter,
  Switch,
  Redirect,
  Route,
  Link,
  withRouter,
} from "react-router-dom";

import HomeScreen from "./screens/homeScreen";
import RegisterScreen from "./screens/registerScreen/index.js";
import GarageScreen from "./screens/garageScreen";

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
