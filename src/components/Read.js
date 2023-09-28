import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showUsers } from "../features/userDetailSlice";
import { Link } from "react-router-dom";

function Read() {
  const dispatch = useDispatch();
  const {users, loading} = useSelector((state) => state?.user);
  console.log("All", users);

  useEffect(() => {
    dispatch(showUsers());
  }, []);

  if(loading){
    return <h2>Loading...</h2>
  }

  return (
    <div>
      <h2>All Users Data</h2>
     { users && users.map((user) => (

       <div>
        <div className="card w-50 mx-auto">
          <div className="card-body">
            <h5 className="card-title">{user?.name}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">
            {user?.email}
            </h6>
            <p className="card-text">
            {user?.age}
            </p>
            <Link to="/"  className="card-link">View</Link>
            <Link to="/"className="card-link">Edit</Link>
            <Link to="/" className="card-link">Delete</Link>
          </div>
        </div>
      </div>
      ))}
    </div>
  );
}

export default Read;
