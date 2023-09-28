import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../features/userDetailSlice";
import { useNavigate } from "react-router-dom";

function Create() {
    const [users, setUsers] = useState({});
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setUsers({...users, [e.target.name] : e.target.value});
        
    }
  const handleSubmit = (e) => {
     e.preventDefault();
     console.log("U", users);
     dispatch(createUser(users));
     navigate("/read");
  }

  return (
    <div>
      <h3>Fill the Form </h3>
      <form onSubmit={handleSubmit}>
        <div className="w-50 mx-auto">
          <label for="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="form-control"
            aria-describedby="emailHelp"
            onChange={handleChange}
           
          />
        </div>

        <div className="w-50 mx-auto">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={handleChange}
          />
        </div>
        <div className="w-50 mx-auto">
          <label for="exampleInputEmail1" className="form-label">
            Age
          </label>
          <input
            type="number"
            name="age"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
            
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            value="Male"
            id="flexRadioDefault1"
            onChange={handleChange}
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
            id="flexRadioDefault2"
            onChange={handleChange}
            
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

export default Create;
