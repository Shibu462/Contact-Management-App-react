import React, { useState, useEffect } from 'react'
import { v4 as uuid } from 'uuid';
import './App.css';
import Header from './Header'
import AddContact from './AddContact'
import ContactList from './ContactList'

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))??[]
    );
  
  
  
  const addContactHandler = (contact) => {
    setContacts([...contacts, {id:uuid(),...contact}]); //...contacts means keep previous contacts as it is and contact means add it to them
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    })
    setContacts(newContactList);
  };

  // useEffect(() => {
  //   const retriveContacts = 
  //   if (retriveContacts)
  //     setContacts(retriveContacts);
  // },[])
  
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    console.log(contacts);
  }, [contacts])
  

  return (
    <div className='ui container'>
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={ removeContactHandler} />
    </div>
  );
}

export default App;
