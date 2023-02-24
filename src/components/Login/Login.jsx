import React from "react";
import Form from "../Form/Form";
import {
  getAuth,
  getRedirectResult,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (email, password) => {
    const auth = getAuth();
    console.log(password);
    // getRedirectResult(auth)
    //   .then((result) => {
    //     const credential = GoogleAuthProvider.credentialFromResult(result);
    //     const token = credential.accessToken;
    //     const user = result.user;
    //     console.log(result);
    //     dispatch(
    //       setUser({
    //         email: user.email,
    //         id: user.uid,
    //         token: token,
    //       })
    //     );
    //     navigate("/");
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     // const email = error.customData.email;
    //     const credential = GoogleAuthProvider.credentialFromError(error);
    //   });
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        // console.log(email);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        navigate("/");
      })
      .catch((error) => alert("Invalid User"));
  };

  return (
    <div>
      <Form title="sign in" handleClick={handleLogin} />
    </div>
  );
};

export default Login;
