let locationInput = document.getElementById('location-input')
let takeInputButton = document.querySelector('.take-input')
export let gettingData = function(){
    takeInputButton.addEventListener('click', () => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${locationInput.value}&APPID=6a8d637ce337cd8502a64bec7d68c377&units=metric`, {mode: 'cors'})
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
            console.log(requiredData)
            let locationDisplayer = document.querySelector('.location-displayer')
            locationDisplayer.innerHTML = requiredData.location
            let countryDisplayer = document.querySelector('.country-displayer')
            countryDisplayer.innerHTML = requiredData.country
            let currentTemp = document.querySelector('.current-temp')
            currentTemp.innerHTML = requiredData.temp.toFixed(1) + '°C'
            let minTemp = document.querySelector('.min-temp')
            minTemp.innerHTML = 'min: ' + requiredData.temp_min.toFixed(1) + '°C'
            let maxTemp = document.querySelector('.max-temp')
            maxTemp.innerHTML = 'max: ' + requiredData.temp_max.toFixed(1) + '°C'
            let weatherDescription = document.querySelector('.weather-description')
            weatherDescription.innerHTML = requiredData.weather_description
            let pressure = document.querySelector('.pressure')
            pressure.innerHTML = 'pressure: ' + requiredData.pressure + 'hPa'
            let humidity = document.querySelector('.humidity')
            humidity.innerHTML = 'humidity: ' + requiredData.humidity + '%'
            let wind = document.querySelector('.wind')
            wind.innerHTML = 'wind: ' + requiredData.wind + 'km/h'
            let icon = document.querySelector('.icon')
            if(requiredData.weather === 'Clouds'){
                icon.src = '../src/imgs/clouds.svg'
            }else if(requiredData.weather === 'Clear'){
                icon.src = '../src/imgs/clear.svg'
            }else if(requiredData.weather === 'Drizzle'){
                icon.src = '../src/imgs/drizzle.svg'
            }else if(requiredData.weather === 'Thunderstorm'){
                icon.src = '../src/imgs/thunderstorm.svg'
            }else if(requiredData.weather === 'Rain'){
                icon.src = '../src/imgs/rain.svg'
            }else if(requiredData.weather === 'Snow'){
                icon.src = '../src/imgs/snow.svg'
            }else{
                icon.src = '../src/imgs/fog.svg'
            }
        })   
        .then(locationInput.value = '') 
        .catch(()=> {
            alert('Location not found')
          });
    })
}