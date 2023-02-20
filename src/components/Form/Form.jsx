import React from "react";

const Form = ({ title, handleClick }) => {
  return (
    <div>
      {/* <input type="email" placeholder="email" />
      <input type="password" placeholder="password" /> */}
      <button onClick={handleClick}>Войти с помощью Google account</button>
    </div>
  );
};

export default Form;
