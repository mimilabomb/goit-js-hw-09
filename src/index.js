import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';
import { get } from './js/get';
import { fetchCountries } from './js/fetchCountries';
import {
  createMarkupArticleCountry,
  createMarkupListOfCountries,
  clearMarkupCountries,
} from './js/markupCountry';


const DEBOUNCE_DELAY = 300;
const refs = get();

refs.searchBox.addEventListener(
  'input',
  debounce(onSearchCountry, DEBOUNCE_DELAY)
);

function onSearchCountry(e) {
  const searchQuery = e.target.value.trim();

  clearMarkupCountries();

  if (!searchQuery) {
    return;
  }

  fetchCountries(searchQuery).then(renderSearchQuery).catch(onFetchError);
}

//funkcja tworząca: listę krajów, informacje o danym kraju oraz informacje o zbyt dużej liczbie zapytań

function renderSearchQuery(data) {
  if (data.length > 10) {
    return tooManyMatches();
  } else if (data.length > 1) {
    createMarkupListOfCountries(data);
  } else if (data.length === 1) {
    createMarkupArticleCountry(data);
  } else {
    createMarkupListOfCountries(data);
  }
}

function tooManyMatches() {
  return Notify.info(
    'Too many matches found. Please enter a more specific name.'
  );
}

function onFetchError(error) {
  return Notify.failure('Oops, there is no country with that name');
}