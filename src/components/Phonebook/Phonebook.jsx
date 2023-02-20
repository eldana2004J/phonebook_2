import React, { useEffect, useState } from "react";
import moduleName from "../";
const Phonebook = () => {
  const [contacts, setContacts] = useState([]);
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
