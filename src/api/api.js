export const getCountryByCode = (borders) => {
  return fetch(`https://restcountries.com/v2/alpha?codes=${borders}`).then(
    (res) => res.json()
  );
};
