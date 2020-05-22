import React, { useState } from "react";
import "./styles.css";

const Screen = () => {
  const [newKms, setNewKms] = useState("");

  const handleNewKms = (event) => {
    setNewKms(event.target.value);
  };

  return (
    <div className="updateKms">
      <form onSubmit={() => {}}>
        <div>
          <div>
            <span>First Update Your Car's Kms</span>
          </div>
          <input type="number" value={newKms} onChange={handleNewKms} />
        </div>
        <input type="submit" value="Update Kms" />
      </form>
    </div>
  );
};

export default Screen;
