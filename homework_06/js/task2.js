var euro = Number(prompt('enter amount of EURO', 1));
var usd = Number(prompt('enter amount of USD', 1));

var usdExchangeRate = 27.1196;
var euroExchangeRate = 33.4602;

var usdToUah = parseFloat((usdExchangeRate * usd).toFixed(2));
var euroToUah = parseFloat((euroExchangeRate * euro).toFixed(2));
var euroToUsd = parseFloat((euroExchangeRate / usdExchangeRate).toFixed(2));

if (isNaN(euro) || isNaN(usd)) {
    console.log('incorrect data')
} else {
    console.log(euro + ' euros are equal ' + euroToUah + ' UAH, ' + usd + ' dollars are equal ' + usdToUah + ', one euro is equal ' + euroToUsd + ' dollars');
}