// API Rest Countries
const BASE_URL = 'https://restcountries.com/v3.1/name';
const FIELDS = ['name', 'capital', 'population', 'flags', 'languages'];
// const FIELDS = 'name,capital,population,flags,languages';

function fetchCountries(name) {
  return fetch(`${BASE_URL}/${name}?fields=${FIELDS}`)
    .then(response => response.json())
    .catch(error => console.log(error));
}

export { fetchCountries };