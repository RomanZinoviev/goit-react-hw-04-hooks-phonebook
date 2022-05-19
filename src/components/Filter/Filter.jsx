import React from 'react';
import PropTypes from 'prop-types';
import s from '../Filter/Filter.module.css';

export function Filter({ value, onChange }) {
  return (
    <label className={s.label}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
        className={s.input}
      />
    </label>
  );
};
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange:PropTypes.func.isRequired
}
