import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { MdKeyboardBackspace } from 'react-icons/md';
import Button from './UI/Button';
import './Country.css';
import Info from './Info';
import { getCountryByCode } from '../api/api';

const Country = ({ darkMode }) => {
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

  const location = useLocation();

  const { cname } = useParams();
  const code = location.state;

  const [country, setCountry] = useState();
  const [borderCountries, setBorderCountries] = useState([]);

  useEffect(() => {
    fetch(`https://restcountries.com/v2/alpha/${code}`)
      .then((res) => res.json())
      .then((json) => setCountry(json))
      .catch((err) => console.error(err.message));
  }, [code]);

  let currencies, languages, borders;

  if (country) {
    currencies = country.currencies.map((currency) => currency.code).join(', ');
    languages = country.languages.map((lang) => lang.name).join(', ');

    borders = country.borders && country.borders.join(',');
  }

  useEffect(() => {
    country &&
      borders &&
      getCountryByCode(borders)
        .then((json) => {
          setBorderCountries(
            json.map((c) => {
              const borderCountry = {
                name: c.name,
                code: c.alpha3Code.toLowerCase(),
              };

              return borderCountry;
            })
          );
        })
        .catch((err) => console.error(err));
  }, [country]);

  const goBack = () => {
    navigate('/');
  };

  const CountryInfo = () => {
    return (
      <div className="country-info">
        <Info
          title="Native Name"
          color={color}
          styles={{ marginRight: '8px' }}
          text={country.nativeName}
        />
        <Info
          title="Population"
          color={color}
          text={country.population.toLocaleString()}
        />
        <Info title="Region" color={color} text={country.region} />
        <Info title="Sub Region" color={color} text={country.subregion} />
        <Info title="Capital" color={color} text={country.capital} />
        <Info
          title="Top Level Domain"
          color={color}
          text={country.topLevelDomain}
        />
        <Info title="Currencies" color={color} text={currencies} />
        <Info title="Langauges" color={color} text={languages} />
      </div>
    );
  };

  const borderCountryClicked = (data) => {
    navigate(`/${data.name}`, { state: data.code });
  };

  const BorderCountries = () => {
    return (
      <div className="border-countries">
        <p className={color} id="title">
          Border Countries
        </p>
        <div className="btn-list">
          {borderCountries.length > 0 ? (
            borderCountries.map((c, index) => {
              return (
                <Button
                  key={index}
                  code={c.code}
                  styles={{
                    display: 'inline-block',
                    fontWeight: '300',
                  }}
                  onClick={borderCountryClicked}
                  className={`btn-shadows ${elementBg} ${color}`}
                  text={c.name}
                />
              );
            })
          ) : (
            <p style={{ color: 'hsl(0, 0%, 52%)', fontWeight: '600' }}>
              {cname} has no borders with nay country
            </p>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className={`main ${backGround}`}>
      <div className="btn-section">
        <Button
          styles={{
            width: '10%',
            marginBottom: '20px',
            fontWeight: '600',
          }}
          className={`btn-shadows ${elementBg} ${color}`}
          icon={<MdKeyboardBackspace className="icon" />}
          onClick={goBack}
          text={'Back'}
        />
      </div>
      {country && (
        <div className="country-container">
          <div className="country-flag-section">
            <img
              className="details-img"
              src={country.flags['png']}
              alt={country.name['common']}
            />
          </div>
          <div className="country-info-section">
            <h2 className={color}>{cname}</h2>
            <CountryInfo />
            <BorderCountries />
          </div>
        </div>
      )}
    </div>
  );
};

export default Country;
