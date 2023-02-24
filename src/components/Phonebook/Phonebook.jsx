import React, { useEffect, useState } from "react";
import shortid from "shortid";
import FormBook from "../FormBook/FormBook";
import Contacts from "../contacts/Contacts";
import Filter from "../Filter/Filter";
import styles from "./Phonebook.module.css";
const Phonebook = () => {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);
  useEffect(() => {
    const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);
  useEffect(() => {
    if (contacts) {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    }
  }, [contacts]);

  const [filter, setFilter] = useState("");

  const addContacts = ({ name, number }) => {
    let isExists = false;
    contacts.forEach((item) => {
      if (item.name === name) {
        alert(`This contact ${name} already exists`);

        isExists = true;
      }
    });

    const newContact = {
      id: shortid.generate(),
      name,
      number,
    };

    !isExists && setContacts((prevState) => [...prevState, newContact]);
  };

  const changeFilter = (e) => {
    setFilter(e.target.value);
  };

  const FILTER = filter.toLowerCase();
  const filtredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(FILTER)
  );

  const handleDelete = (contactId) => {
    setContacts((prevState) =>
      prevState.filter((item) => item.id !== contactId)
    );
  };

  return (
    <>
      <div>
        <FormBook onSubmit={addContacts} />
        <div className={styles.wrapper}>
          <Contacts data={filtredContacts} handleDelete={handleDelete} />
          {contacts.length > 0 ? (
            <Filter changeFilter={changeFilter} value={filter} />
          ) : (
            "Contacts list empty"
          )}
        </div>
      </div>
    </>
  );
};

export default Phonebook;
