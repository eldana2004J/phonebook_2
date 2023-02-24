import React from "react";
import styles from "./BtnDelete.module.css";
import img from "../../assets/img.webp";
const BtnDelete = ({ handleDelete, id }) => {
  return (
    <div className={styles.delete}>
      <span onClick={() => handleDelete(id)}>
        <img width={20} src={img} alt="" />
      </span>
    </div>
  );
};

export default BtnDelete;
