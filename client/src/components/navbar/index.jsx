import React, { useState, useEffect } from "react";
import "./styles.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [auth, setAuth] = useState(true);

  const signOutHandler = () => {
    setAuth(!auth);
  };

  const logInHandler = () => {};

  useEffect(() => {}, [auth]);

  return (
    <div className="navbar">
      {auth ? (
        <div className="routes">
          <Link className="links" to="/">
            Home
          </Link>
          <Link className="links" to="/garage">
            Garage
          </Link>
          <div className="closequarters">
            <Link className="links" to="/profile">
              Profile
            </Link>
            <button onClick={signOutHandler}>Log Out</button>
          </div>
        </div>
      ) : (
        <div className="routes">
          <Link className="links" to="/login">
            Log In
          </Link>
          <Link className="links" to="/register">
            Register
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
