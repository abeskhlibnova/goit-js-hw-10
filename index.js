import './css/styles.css';

const DEBOUNCE_DELAY = 300;

// const BASE_URL = "https://restcountries.com/v3.1";
// const URL = `${BASE_URL}/name/united`;

// fetch(URL)
// .then((response) => response.json())
// .then((data) => {
//     console.log("data", data);
// })
// .catch((error) => {
//     console.log("error", error)
// });
fetch("https://restcountries.com/v3.1/name/united").then(response => {
       return response.json();
}).then(united => {
    console.log(united);
})