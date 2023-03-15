// API Rest Countries
const BASE_URL = 'https://restcountries.com/v3.1/name';
const FIELDS = ['name', 'capital', 'population', 'flags', 'languages'];

//funkcja korzystajac z API pobiera nam określone pola, które są wypisane jako wartość stała FIELDS

function fetchCountries(name) {
  return fetch(`${BASE_URL}/${name}?fields=${FIELDS}`)
    .then(response => response.json())
    .catch(error => console.log(error));
}
//export funkcji
export { fetchCountries };