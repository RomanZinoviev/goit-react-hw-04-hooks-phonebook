import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
export function App() {
  const [contacts, setContacts] = useState(contactsFromLs());
  const [filter, setFilter] = useState('');
  const filtredNames = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });
  function contactsFromLs  ()  {
    const contactsFromLocalStorrage = JSON.parse(
      localStorage.getItem('contacts')
    );
    if (contactsFromLocalStorrage) {
     return contactsFromLocalStorrage;
    };
    return [];
  };  
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  const submitHundler = obj => {
    setContacts([...contacts, obj]);
  };
  const hundleChange = event => {
    const { value } = event.target;
    setFilter(value);
  };
  const deleteForList = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };  
  return (
    <div>
      <h1
        style={{
          fontSize: 60,
          color: 'green',
        }}
      >
        Phonebook
      </h1>
      <ContactForm onSubmit={submitHundler} array={contacts} />
      <h2
        style={{
          fontSize: 45,
        }}
      >
        Contacts
      </h2>
      <Filter value={filter} onChange={hundleChange} />
      <ContactList array={filtredNames} deleteHundler={deleteForList} />
    </div>
  );
}
