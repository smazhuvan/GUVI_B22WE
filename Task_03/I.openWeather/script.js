// Print the current weather data in console- By geographical cordinates

var request = new XMLHttpRequest()
request.open('GET','http://api.openweathermap.org/data/2.5/weather?lat=13&lon=80&appid=e797bd8db8cbda9c5037be289699de0f' , true)
request.send()
request.onload = function () {

    var data = JSON.parse(this.response)
    console.log(data)
}