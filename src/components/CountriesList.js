import React from 'react';
import CountryCard from './CountryCard';
import './CountriesList.css';

const CountriesList = ({
  countries,
  bg,
  color,
  handleCountryClick,
  keyword,
  darkMode,
}) => {
  return (
    <div className="card-list">
      {countries.map((country, index) => {
        return (
          <CountryCard
            handleCountryClick={handleCountryClick}
            keyword={keyword}
            key={index}
            darkMode={darkMode}
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
