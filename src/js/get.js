// funkcja pobiera nam określone pola z dokumentu

export function get() {
    return {
      searchBox: document.querySelector('input#search-box'),
      countryList: document.querySelector('ul.country-list'),
      countryInfo: document.querySelector('div.country-info'),
    };
  }