import React from 'react';
import Info from '../components/Info';
import './CountryCard.css';
import HighlightedText from './UI/HighlightedText';

const CountryCard = ({
  bg,
  color,
  darkMode,
  country,
  keyword,
  handleCountryClick,
}) => {
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
        <HighlightedText
          color={color}
          darkMode={darkMode}
          country_name={country.name.common}
          keyword={keyword}
        />
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
