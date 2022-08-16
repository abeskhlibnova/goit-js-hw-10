export function countryInfo ( { 
    name,
    flags,
    capital,
    population,
    languages,
} ) {
    return`
    <div class="country-info__card">
    <div class="country-info__wrapper">
    <img src="${flags.svg}" width="30" clas="country-info__img"  alt="${name.common}">
    <h2 class="country-info__title_wrapper">${name.common}</h2>
    </div>
    <ul class="country-info_list">
      <li class="country-info__title">
        <h3>Capital:&nbsp;&nbsp; </h3>
        <p class="country-info_description">${capital}</p>
      </li>
      <li class="country-info__title">
        <h3>Population:&nbsp;&nbsp; </h3>
        <p class="country-info_description">${population}</p>
      </li>
      <li class="country-info__title">
        <h3>Languages:&nbsp;&nbsp; </h3>        
        <p class="country-info_description">${Object.values(languages)}</p>
      </li>
    </ul>
  </div>
    `
}

export function markupCountryList ( { name, flags } ) {
    return `
    <li class="country-list__item list">
    <img src=${flags.svg} width="30" height="15">
    <p class="country-list__item_title">${name.common}</p>
    </li>
    `
}