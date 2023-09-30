import React from "react";
import "./CustomModel.css";
import { useSelector } from "react-redux";

function CustomModel({ id, setShowPopUp }) {
  const { users } = useSelector((state) => state.user);
  const singleData = users.filter((user) => user.id === id);

  return (
    <div className="modalBackGround">
      <div className="modalConatiner">
        <button onClick={() => setShowPopUp(false)}>Close</button>
        <h2>{singleData[0].name}</h2>
        <h3>{singleData[0].email}</h3>
        <h4>{singleData[0].gender}</h4>
        <h2>{singleData[0].age}</h2>
      </div>
    </div>
  );
}

export default CustomModel;
