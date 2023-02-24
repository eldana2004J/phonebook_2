import React from "react";
import BtnDelete from "../BtnDelete/BtnDelete";
import styles from "./Contacts.module.css";
const ContactsItem = ({ name, number, id, handleDelete }) => {
  return (
    <li className={styles.item}>
      <p className={styles.text}>
        {name} : {number} <BtnDelete handleDelete={handleDelete} id={id} />
      </p>
    </li>
  );
};

export default ContactsItem;
