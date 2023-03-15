import { get } from './get';
const refs = get();

//funkcja wyświetla dokładne informacje o "posukiwanym" kraju

function createMarkupArticleCountry(data) {
  const markup = data
    .map(({ name, capital, population, flags, languages }) => {
      return `<div class="country-info__title">
    <img class="country-info__img" src="${flags.svg}" alt="${
        name.official
      }" width="50">
    <h1 class="country-info__name">${name.official}</h1>
  </div>
  <ul class="country-info__list">
    <li class="country-info__feature"><b>Capital:</b> ${capital}</li>
    <li class="country-info__feature"><b>Population:</b> ${population}</li>
    <li class="country-info__feature"><b>Languages:</b> ${Object.values(
      languages
    )}</li>
  </ul>`;
    })
    .join('');
  refs.countryInfo.innerHTML = markup;
}

//fukcja wyświetla listę krajów poasujących do wpisu z pola input

function createMarkupListOfCountries(data) {
  const markup = data
    .map(({ name, flags }) => {
      return `<li class="country-list__item">
      <img class="country-list__img" src="${flags.svg}" alt="${name.official}" width="40">
      <p class="country-list__name">${name.official}</p>
    </li>`;
    })
    .join('');
  refs.countryList.innerHTML = markup;
}

// wyczyszczenie pól

function clearMarkupCountries() {
  refs.countryInfo.innerHTML = '';
  refs.countryList.innerHTML = '';
}

export {
  createMarkupArticleCountry,
  createMarkupListOfCountries,
  clearMarkupCountries,
};