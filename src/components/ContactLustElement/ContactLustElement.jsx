import React from "react";
import PropTypes from 'prop-types';
import s from "../ContactList/ContactList.module.css"

export function ContactLustElement({name,number,deleteHundler}) {
    return (        
               <li><span className={s.name}>{name}:</span> {number} <button onClick={deleteHundler} className={s.button}>Delete</button></li>
            )
    
};
ContactLustElement.propTypes = {      
    name: PropTypes.string.isRequired,
    number:PropTypes.string.isRequired,
    deleteHundler:PropTypes.func.isRequired
}