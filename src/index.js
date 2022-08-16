import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import './css/styles.css';
import { fetchCountries  } from './fetchCountries';
import { countryInfo,  markupCountryList } from './markup';

let limit = 10;
const DEBOUNCE_DELAY = 300;

const refs = {
    searchInput: document.querySelector("#search-box"),
    searchCountryList: document.querySelector(".country-list"),
    countryInfoContainer: document.querySelector(".country-info")
};

refs.searchInput.addEventListener("input", debounce(onSearch, DEBOUNCE_DELAY));

function onSearch() {
    const name = refs.searchInput.value;

    if(name === '') {
    clearMarkup();
    return;
}

fetchCountries(name)
.then(countryCard)
.catch(errorCountry)
}

function clearMarkup() {
    refs.countryInfoContainer.innerHTML = '';
    refs.searchCountryList.innerHTML = '';
}

function countryCard(countries) {
    if(countries.length > limit){
        tooManyMatches();
        clearMarkup();
        return;
    } else if(countries.length === 1) {
        refs.countryInfoContainer.innerHTML = countryInfo(countries[0]); 
        refs.searchCountryList.innerHTML = "";
    } else {
        let countriesListMarkup = '';
        countries.map(country => {
            countriesListMarkup += markupCountryList(country);
        }) ;
        refs.searchCountryList.insertAdjacentHTML('beforeend', countriesListMarkup);
        refs.countryInfoContainer.innerHTML = "";
    }
  
}

function errorCountry(error) {
    Notiflix.Notify.failure("Oops, there is no country with that name")
}
function tooManyMatches() {
    Notiflix.Notify.info("Too many matches found. Please enter a more specific name.")
}
