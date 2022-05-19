import { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import s from "../ContactForm/ContactForm.module.css"

export function ContactForm ({array, onSubmit}) {
  
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  
  const reset = () => {
    setName("");
    setNumber("")
  };
  const hundleChangeForName = event => {
    const { value } = event.target;    
    setName(value);
  };
  const hundleChangeForNumber = event => {
    const { value } = event.target;    
    setNumber(value);
  };
  const hundleSubmit = event => {
    event.preventDefault();
    const sameName = array.find(arr => arr.name === name);
    if (sameName) {
      return alert(`${name} is already in contacts`);
    }
    const nameObj = {
      id: nanoid(),
      name: name,
      number: number,
    };
    onSubmit(nameObj);
    reset();
  };
      return (
      <form className={s.form}>
        <label className={s.label}>
          Name
          <input
            className={s.input}
            value={name}
            onChange={hundleChangeForName}
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
            onChange={hundleChangeForNumber}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit" onClick={hundleSubmit} className={s.button} >
          Add contact
        </button>
      </form>
    );
  };
ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    array: PropTypes.arrayOf(PropTypes.object).isRequired
  };


