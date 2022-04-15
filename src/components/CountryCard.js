import React from 'react';
import Info from '../components/Info';
import './CountryCard.css';

const CountryCard = ({ bg, color, country, handleCountryClick }) => {
  return (
    <div
      className={`card ${bg}`}
      onClick={() =>
        handleCountryClick({ name: country.name.common, code: country.cca3 })
      }
    >
      <img
        className="card-img"
        src={country.flags['png']}
        alt={country.name['common']}
      />
      <div className="info-container">
        <h3 className={color}>{country.name['common']}</h3>
        <Info
          title="Population"
          color={color}
          text={country.population.toLocaleString()}
        />
        <Info title="Region" color={color} text={country.region} />
        <Info title="Capital" color={color} text={country.capital} />
      </div>
    </div>
  );
};

export default CountryCard;
