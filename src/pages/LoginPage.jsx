import React from "react";
import { Link } from "react-router-dom";
import Login from "../components/Login/Login";
const LoginPage = () => {
  return (
    <div>
      <div className="wrapper">
        <h1 className="title-login">Login</h1>
        <Login />
        <p>
          or
          <Link className="link-register" to="/register">
            register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
