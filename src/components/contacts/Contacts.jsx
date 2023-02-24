import React from "react";
import ContactsItem from "./ContactsItem";
import styles from "./Contacts.module.css";
const Contacts = ({ data, handleDelete }) => {
  const contactsElem = data.map((item) => {
    return <ContactsItem key={item.id} {...item} handleDelete={handleDelete} />;
  });
  return (
    <>
      <ul className={styles.list}>{contactsElem}</ul>
    </>
  );
};

export default Contacts;
