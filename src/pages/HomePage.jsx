import React from "react";
import { useAuth } from "../hooks/use-auth";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { removeUser } from "../redux/slices/userSlice";
const HomePage = () => {
  const { isAuth, email } = useAuth();
  const dispatch = useDispatch();
  return isAuth ? (
    <div className="box">
      <h1>Welcome to Phonebook!!! </h1>

      <button className="btn-logout" onClick={() => dispatch(removeUser())}>
        Logout from {email}
      </button>
    </div>
  ) : (
    <>
      <Navigate to="/login" />
    </>
  );
};

export default HomePage;
