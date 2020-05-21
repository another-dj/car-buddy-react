import React, { useState } from "react";
import "./styles.css";

const Screen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Screen;
