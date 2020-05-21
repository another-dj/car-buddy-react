import React, { useState, useEffect } from "react";
import "./styles.css";

const Screen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /* useEffect(() => {}); */

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  
  return (
    <div>
      <form onSubmit={() => {}}>
        <div>
          <div>
            <span>Name</span>
          </div>
          <input type="text" value={name} onChange={handleName} />
        </div>

        <div>
          <div>
            <span>Email</span>
          </div>
          <input type="email" value={email} onChange={handleEmail} />
        </div>

        <div>
          <div>
            <span>Password</span>
          </div>
          <input type="password" value={password} onChange={handlePassword} />
        </div>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Screen;
