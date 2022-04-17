import React, { useState, useEffect } from 'react';
import CountriesList from './CountriesList';
import { useNavigate } from 'react-router-dom';
import Input from './Input';
import DropDown from './DropDown';

const Home = ({ darkMode }) => {
  let backGround, elementBg, color;

  if (darkMode) {
    color = 'dark-text';
    elementBg = 'dark-element';
    backGround = 'dark-bg';
  } else {
    color = 'light-text';
    elementBg = 'light-element';
    backGround = 'light-bg';
  }

  const navigate = useNavigate();

  const [searchVal, setSearchVal] = useState('');
  const [region, setRegion] = useState('');
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('countries') !== null) {
      setCountries(JSON.parse(localStorage.getItem('countries')));
    } else {
      fetch('https://restcountries.com/v3.1/all')
        .then((res) => res.json())
        .then((json) => {
          localStorage.setItem('countries', JSON.stringify(json));
          setCountries(json);
        })
        .catch((err) => console.error(err.message));
    }
  }, []);

  const handleChange = (e) => {
    const val = e.target.value;
    setSearchVal(val);
  };

  const selectRegion = (e) => {
    const region = e.target.value;
    setRegion(+region === -1 ? '' : region);
  };

  const handleCountryClick = (country) => {
    const { name, code } = country;
    navigate(`/${name}`, { state: code });
  };

  const filterByName = (countries) => {
    if (searchVal === '') return countries;
    else
      return countries.filter((country) =>
        country.name['common'].toLowerCase().includes(searchVal.toLowerCase())
      );
  };

  const filterByRegion = (countries) => {
    if (region === '') return countries;
    else return countries.filter((country) => country.region === region);
  };

  const filteredCountries = filterByName(filterByRegion(countries));

  return (
    <div className={backGround}>
      <div className="inputs-container">
        <Input
          searchVal={searchVal}
          handleChange={handleChange}
          bg={elementBg}
        />
        <DropDown handleChange={selectRegion} bg={elementBg} color={color} />
      </div>
      {countries.length > 0 && (
        <CountriesList
          handleCountryClick={handleCountryClick}
          countries={filteredCountries}
          darkMode={darkMode}
          keyword={searchVal}
          bg={elementBg}
          color={color}
        />
      )}
    </div>
  );
};

export default Home;
