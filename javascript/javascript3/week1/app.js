const input = document.getElementById('input')
const btn = document.getElementById('btn')
const dataWeather = document.getElementById('weather')

/**
 * btn.addEventListener('click', function clickHandler(){
    const dataValue = input.value
 */

btn.addEventListener('click', () => {
    const dataValue = input.value
    getWeather(dataValue)
} )

function getWeather(city){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=ebe603975e3712b46356aea6df6a8a10&units=metric')
    .then(res => res.json())
    .then(json => {

        dataWeather.textContent = json.weather[0].description + ' the tem today: ' + json.main.temp 
    })

}

