import React from "react";
import styles from "./Filter.module.css";
const Filter = ({ changeFilter, value }) => {
  return (
    <>
      <input
        className={styles.Filter}
        type="text"
        name="text"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        placeholder="Filter"
        onChange={changeFilter}
        value={value}
      />
    </>
  );
};

export default Filter;
