// Register the service worker
if('serviceWorker' in navigator){
    navigator.serviceWorker.register("./sw.js")
    .then((response) => console.log('Service worker registered', response))
}

// fetch list of currency from the api
let currencyApi = "https://free.currencyconverterapi.com/api/v5/currencies";

fetch(currencyApi)
.then((response => response.json()
))
.then((currencies => {
   //console.log('I am displaying some data here', currencies)
   let { currencyName, id } = currencies;
   // Display datas to the selects
   for(let currency in currencies.results){
       let optionElement1 = document.querySelector("#currency1");
       optionElement1.innerHTML += `<option value = ${ currency }> ${ currencies.results[currency].currencyName} </option>`;

       let optionElement2 = document.querySelector("#currency2");
       optionElement2.innerHTML += `<option value = ${  currency }> ${ currencies.results[currency].currencyName} </option>`;
      
   }

}))


// Conversion from
let amount = document.querySelector('#amount');
let currency1Option = document.querySelector('#currency1');
let currency2Option = document.querySelector('#currency2');
var strUser1 = currency1Option.options[currency1Option.selectedIndex].value;
var strUser2 = currency2Option.options[currency2Option.selectedIndex].value;

// conversion to


// Querying the API for the conversion and attach to the convert button
document.querySelector("#submit").addEventListener('click', (e) => {
    e.preventDefault();
    console.log('I am working here')
    let queryURL = `https://free.currencyconverterapi.com/api/v5/convert?q=${strUser1}_${strUser2},${strUser2}_${strUser1} &compact=ultra`;
    fetch(queryURL)
    .then(response => response.json()
    ).then((result) => {
        console.log(queryURL)
    })
});
