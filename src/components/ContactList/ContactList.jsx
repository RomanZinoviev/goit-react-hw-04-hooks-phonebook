import React from "react";
import { ContactLustElement } from "components/ContactLustElement/ContactLustElement";
import s from "../ContactList/ContactList.module.css";
import PropTypes from 'prop-types';

export function ContactList({array, deleteHundler}){
    return (
        <ul className={s.list}>
           { array.map(({id, name, number})=> <ContactLustElement key={id} name={name} number={number} deleteHundler={()=>deleteHundler(id)}/>)}
          </ul>
    )
};
ContactList.propTypes = {
     array: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number:PropTypes.string.isRequired
  })),
  deleteHundler:PropTypes.func.isRequired
}

