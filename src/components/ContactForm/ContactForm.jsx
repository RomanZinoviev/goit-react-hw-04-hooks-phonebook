import { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import s from "../ContactForm/ContactForm.module.css"

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    array: PropTypes.arrayOf(PropTypes.object).isRequired
  };
  reset() {
    this.setState({
      name: '',
      number: '',
    });
  }
  hundleChange = event => {
    const { name, value } = event.target;    
    this.setState({ [name]: value });
  };
  hundleSubmit = event => {
    const { name, number } = this.state;
    event.preventDefault();
    const sameName = this.props.array.find(arr => arr.name === name);
    if (sameName) {
      return alert(`${name} is already in contacts`);
    }
    const nameObj = {
      id: nanoid(),
      name: name,
      number: number,
    };
    this.props.onSubmit(nameObj);
    this.reset();
  };
  render() {
    const { name, number } = this.state;
    return (
      <form className={s.form}>
        <label className={s.label}>
          Name
          <input
            className={s.input}
            value={name}
            onChange={this.hundleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={s.label}>
          Telephone
          <input
            className={s.input}
            type="tel"
            value={number}
            onChange={this.hundleChange}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit" onClick={this.hundleSubmit} className={s.button} >
          Add contact
        </button>
      </form>
    );
  }
};


