import React from "react";
import SignUp from "../components/SignUp/SignUp";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div>
      <h1 className="h1">register</h1>
      <SignUp />
      <p>
        already have an account <Link to="/login">Sign in</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
