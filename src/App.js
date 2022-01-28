import { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import { nanoid } from "nanoid";

import { AppContainer } from "./App.styled";


export default function App(second) {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  });

  const [filter, setFilter] = useState('');
  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  }
  
  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  
 const getFilteredContacts = () => {
 const normalizedFilter = filter.toLocaleLowerCase();
return contacts.filter((contact) =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );
  };
  const filteredContacts = getFilteredContacts();
  console.log(filteredContacts);
  
  const addContact = ({ name, number }) => {
     const newContact = {
       id: nanoid(),
       name: name,
       number: number,
     };
     if (
       contacts.find(
         (contact) =>
           contact.name.toLocaleLowerCase() ===
           newContact.name.toLocaleLowerCase()
       )
     ) {
       alert(`${newContact.name} is already in contacts`);
     } else {
       setContacts((state) => 
          [newContact, ...state])
    };
  };
  
  const deleteContact = (contactId) => {
     setContacts(
        contacts.filter((contact)=>contact.id!==contactId),
     );
  };
  
  

  return (
    <AppContainer>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContact} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={changeFilter} />

        <ContactList
          contacts={getFilteredContacts()}
          onDelete={deleteContact}
        />
      </AppContainer>
  );
}



