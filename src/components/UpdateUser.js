import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../features/userDetailSlice";

function UpdateUser() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [updateData, setUpdateData] = useState({});
  const { users } = useSelector((state) => state.user);

  useEffect(() => {
    const singleuserData = users.filter((user) => user?.id === id);
    setUpdateData(singleuserData[0]);
  }, []);

  const handleUpdateChange = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUser(updateData));
    navigate("/read");
  };

  return (
    <div>
      <h3>Update the details </h3>
      <form onSubmit={handleUpdate}>
        <div className="w-50 mx-auto">
          <label for="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={updateData && updateData.name}
            className="form-control"
            aria-describedby="emailHelp"
            onChange={handleUpdateChange}
          />
        </div>

        <div className="w-50 mx-auto">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            value={updateData && updateData.email}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={handleUpdateChange}
          />
        </div>
        <div className="w-50 mx-auto">
          <label for="exampleInputEmail1" className="form-label">
            Age
          </label>
          <input
            type="number"
            name="age"
            value={updateData && updateData.age}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={handleUpdateChange}
          />
        </div>
        <div className="mb-3">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            value="Male"
            checked={updateData && updateData.gender === "Male"}
            id="flexRadioDefault1"
            onChange={handleUpdateChange}
          />
          <label className="form-check-label" for="flexRadioDefault1">
            Male
          </label>
        </div>
        <div className="mb-3">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            value="Female"
            checked={updateData && updateData.gender === "Female"}
            id="flexRadioDefault2"
            onChange={handleUpdateChange}
          />
          <label className="form-check-label" for="flexRadioDefault2">
            Female
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default UpdateUser;
