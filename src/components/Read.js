import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, showUsers } from "../features/userDetailSlice";
import { Link } from "react-router-dom";
import CustomModel from "./CustomModel";

function Read() {
  const dispatch = useDispatch();
  const [id, setId] = useState();
  const [showPopUp, setShowPopUp] = useState(false);
  const { users, loading, search } = useSelector((state) => state?.user);

  useEffect(() => {
    dispatch(showUsers());
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      {showPopUp && <CustomModel id={id} setShowPopUp={setShowPopUp} />}
      <h2>All Users Data</h2>
      {users &&
        users.filter((user) => {
           if(!search){
            return user;
           }else{
            return user.name.toLowerCase().includes(search.toLowerCase());
           }
        })
        .map((user) => (
          <div key={user.id}>
            <div className="card w-50 mx-auto">
              <div className="card-body">
                <h5 className="card-title">{user?.name}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  {user?.email}
                </h6>
                <p className="card-text">{user?.gender}</p>
                <button
                  className="card-link"
                  onClick={() => [setId(user.id), setShowPopUp(true)]}
                >
                  View
                </button>
                <Link to={`/update/${user.id}`} className="card-link">
                  Edit
                </Link>
                <Link
                  onClick={() => dispatch(deleteUser(user.id))}
                  className="card-link"
                >
                  Delete
                </Link>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Read;
