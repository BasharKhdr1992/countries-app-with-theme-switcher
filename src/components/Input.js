import React from 'react';
import './Input.css';

const Input = ({ searchVal, handleChange, bg }) => {
  return (
    <input
      className={`form-input ${bg}`}
      value={searchVal}
      placeholder="e.g. ger"
      onChange={(e) => handleChange(e)}
    />
  );
};

export default Input;
