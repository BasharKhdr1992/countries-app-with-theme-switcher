import React from 'react';
import CountryCard from './CountryCard';
import './CountriesList.css';

const CountriesList = ({ countries, bg, color, handleCountryClick }) => {
  return (
    <div className="card-list">
      {countries.map((country, index) => {
        return (
          <CountryCard
            handleCountryClick={handleCountryClick}
            key={index}
            country={country}
            bg={bg}
            color={color}
          />
        );
      })}
    </div>
  );
};

export default CountriesList;
