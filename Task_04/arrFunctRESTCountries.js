// API Call

var request = new XMLHttpRequest()
request.open('GET', 'https://restcountries.eu/rest/v2/all', true)
request.send()
request.onload = function () {

    var data = JSON.parse(this.response) //Actual data

    // 1. All countries in Asian continent using Filter
    var asianCountries = data.filter((val) => val.region == 'Asia')
    console.log(asianCountries)

    // 2. Print population below 2 lakhs countires using Filter
    var popBelow2L = data.filter((val) => val.population < 200000)
    console.log(popBelow2L)

    // 3. Print name,capital,flag using forEach
    var nameCapFlag = data.forEach((val) => {
        console.log(val.name);
        console.log(val.capital);
        console.log(val.flag);
    })

    // 4. Print total population of countries using Reduce
    var populationSum = data.reduce((val2, val) => val2 + val.population, 0)
    console.log(populationSum)

    // 5. Print countries which use USD as currency
    var dollarCountries = data.filter((val) => val.currencies.code == 'USD')
    console.log(dollarCountries)
}