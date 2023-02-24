import React, { useState } from "react";
import styles from "./Form.module.css";
const Form = ({ title, handleClick }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  return (
    <div className={styles.form}>
      <input
        type="email"
        placeholder="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        value={email}
      />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => {
          setPass(e.target.value);
        }}
        value={pass}
      />
      <button className={styles.btn} onClick={() => handleClick(email, pass)}>
        {title}
      </button>
    </div>
  );
};

export default Form;
