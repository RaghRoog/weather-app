import cloudsIcon from './imgs/clouds.svg'
import clearIcon from './imgs/clear.svg'
import drizzleIcon from './imgs/drizzle.svg'
import fogIcon from './imgs/fog.svg'
import rainIcon from './imgs/rain.svg'
import snowIcon from './imgs/snow.svg'
import thunderstormIcon from './imgs/thunderstorm.svg'
export default function displayData(data){
    console.log(data)
    let locationDisplayer = document.querySelector('.location-displayer')
    locationDisplayer.innerHTML = data.location
    let countryDisplayer = document.querySelector('.country-displayer')
    countryDisplayer.innerHTML = data.country
    let currentTemp = document.querySelector('.current-temp')
    currentTemp.innerHTML = 'Temperature: ' + data.temp.toFixed(1) + '°C'
    let minTemp = document.querySelector('.min-temp')
    minTemp.innerHTML = 'min: ' + data.temp_min.toFixed(1) + '°C'
    let maxTemp = document.querySelector('.max-temp')
    maxTemp.innerHTML = 'max: ' + data.temp_max.toFixed(1) + '°C'
    let weatherDescription = document.querySelector('.weather-description')
    weatherDescription.innerHTML = data.weather_description
    let pressure = document.querySelector('.pressure')
    pressure.innerHTML = 'pressure: ' + data.pressure + 'hPa'
    let humidity = document.querySelector('.humidity')
    humidity.innerHTML = 'humidity: ' + data.humidity + '%'
    let wind = document.querySelector('.wind')
    wind.innerHTML = 'wind: ' + data.wind + 'km/h'
    let icon = document.querySelector('.icon')
    switch(data.weather){
        case 'Clouds':
            icon.src = cloudsIcon
            break;
        case 'Clear':
            icon.src = clearIcon
            break;
        case 'Drizzle':
            icon.src = drizzleIcon
            break;
        case 'Thunderstorm':
            icon.src = thunderstormIcon
            break;
        case 'Rain':
            icon.src = rainIcon
            break;
        case 'Snow':
            icon.src = snowIcon
            break;
        default:
            icon.src = fogIcon
    }
}