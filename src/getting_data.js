import displayData from './displayData.js'
let locationInput = document.getElementById('location-input')
let takeInputButton = document.querySelector('.take-input')
export let gettingData = function(){
    takeInputButton.addEventListener('click', () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locationInput.value}&APPID=6a8d637ce337cd8502a64bec7d68c377&units=metric`, {mode: 'cors'})
        .then(function(response){
            return response.json()
        })
        .then(function(response){
            let requiredData = {
                location: response.name,
                country: response.sys.country,
                temp: response.main.temp,
                temp_max: response.main.temp_max,
                temp_min: response.main.temp_min,
                weather: response.weather[0].main,
                weather_description: response.weather[0].description,
                wind: response.wind.speed,
                humidity: response.main.humidity,
                pressure: response.main.pressure
            }
            displayData(requiredData)
        })   
        .then(locationInput.value = '') 
        .catch(()=> {
            alert('Location not found')
          });
    })
}