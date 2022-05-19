import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  componentDidMount() {
    const contactsFromLocalStorrage = JSON.parse(localStorage.getItem("contacts"));
    if (contactsFromLocalStorrage) {
      this.setState({ contacts: contactsFromLocalStorrage })
    };
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts))
    }
  };
  submitHundler = obj => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, obj],
    }));
  };
  hundleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  deleteForList = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };
  render() {
    const { contacts, filter } = this.state;
    const filtredNames = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
    return (
      <div>
        <h1 style={{
          fontSize: 60,
          color:"green"
        }}>Phonebook</h1>
        <ContactForm onSubmit={this.submitHundler} array={contacts} />
        <h2 style={{
          fontSize: 45          
        }}>Contacts</h2>
        <Filter value={filter} onChange={this.hundleChange} />
        <ContactList array={filtredNames} deleteHundler={this.deleteForList} />
      </div>
    );
  }
}
