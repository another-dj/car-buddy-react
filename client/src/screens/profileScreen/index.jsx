import React from "react";
import "./styles.css";

const Screen = () => {
  const user = { name: "RandomGuy" };

  return (
    <div className="theProfile">
      <div className="userName">
        <h2>{user.name}</h2>
      </div>
      <div className="editButtons">
        <button>Edit Profile</button>
        <button>Edit Your Cars</button>
      </div>
    </div>
  );
};

export default Screen;
