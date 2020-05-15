import React from "react";
import HomeScreen from "./screens/homeScreen";
import "./App.css";
import Navbar from "./components/navbar";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="darkContainer">
        <Navbar />
        <HomeScreen />
      </div>
    </BrowserRouter>
  );
}

export default App;
