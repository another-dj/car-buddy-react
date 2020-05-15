import React, { useState, useEffect } from "react";
import "./styles.css";
import { Link } from "react-router-dom";

function Navbar() {
  let user = true;
  const [auth, setAuth] = useState(user);

  
  const signOutHandler = (user) => {
    setAuth(!user);
  };
  useEffect(() => {
  }, [auth]);

  return (
    <div className="navbar">
      <div className="routes">
        {user ? (
          <div>
            <Link to="/">Home</Link>
            <Link to="/garage">Garage</Link>
            <Link to="/profile">Profile</Link>
            <button onClick={signOutHandler}>Log Out</button>
          </div>
        ) : (
          <div>
            <Link to="/login">Log In</Link>
            <Link to="/register">Register</Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
