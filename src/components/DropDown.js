import React from 'react';
import './DropDown.css';

const DropDown = ({ bg, handleChange, color }) => {
  const regions = ['Africa', 'Europe', 'Asia', 'Americas', 'Oceania'];

  return (
    <select
      className={`drop-down ${bg} ${color}`}
      onChange={(e) => handleChange(e)}
      id="regions"
      name="regions"
    >
      <option value="-1">Filter by Region</option>
      {regions.map((region, index) => {
        return (
          <option style={{ color }} key={index} value={region}>
            {region}
          </option>
        );
      })}
    </select>
  );
};

export default DropDown;
