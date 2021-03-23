//1. create an instance xml http  
var request = new XMLHttpRequest();
//2.create a connection// open a connection
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);
//3.send the request
request.send();
//4. Load the response this function is triggered only when the data is retrived
request.onload = function () {
    var data = JSON.parse(this.response);
    for (var i in data)
        console.log(data[i].name)
}