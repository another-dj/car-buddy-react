import React, { useState } from "react";
import "./styles.css";

const Screen = () => {
  const [changeName, setChangeName] = useState("");
  const [changePassword, setChangePassword] = useState("");

  const handleChangeName = (event) => {
    setChangeName(event.target.value);
  };
  const handleChangePassword = (event) => {
    setChangePassword(event.target.value);
  };

  return (
    <div className="editContainer">
      <form onSubmit={() => {}}>
        <div>
          <div>
            <span>Change Name</span>
          </div>
          <input type="text" value={changeName} onChange={handleChangeName} />
        </div>

        <div>
          <div>
            <span>Change Password</span>
          </div>
          <input
            type="password"
            value={changePassword}
            onChange={handleChangePassword}
          />
        </div>

        <input type="submit" value="Confirm Changes" />
      </form>
    </div>
  );
};

export default Screen;
