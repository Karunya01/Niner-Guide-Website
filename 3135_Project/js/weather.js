const apiKey = 'ad573bad6ba12691035bf40142683e67'; // My OpenWeatherMap API Key

const weatherContainer = document.getElementById("weather");
const city = document.getElementById("city");
const error = document.getElementById('error');

const units = 'imperial'; 
let temperatureSymbol = units == 'imperial' ? "°F" : "°C";

async function fetchWeather() {
    try {
        weatherContainer.innerHTML = '';
        error.innerHTML = '';
        city.innerHTML = '';

        const cnt = 10;
        const cityInputtedByUser = document.getElementById('cityInput').value;

        if (!cityInputtedByUser) {
            error.innerHTML = 'Please input a city';
            return;
        }

        const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityInputtedByUser}&appid=${apiKey}&units=${units}&cnt=${cnt}`;

        const response = await fetch(apiUrl);
        const data = await response.json();


        if (data.cod === '400' || data.cod === '404') {
            error.innerHTML = 'Not a valid city. Please input another city';
            return;
        }

        data.list.forEach(hourlyWeatherData => {
            const hourlyWeatherDataDiv = createWeatherDescription(hourlyWeatherData);
            weatherContainer.appendChild(hourlyWeatherDataDiv);
        });

        city.innerHTML = `Hourly Weather for ${data.city.name}`;

    } 
    
    catch (err) {
        error.innerHTML = `Error fetching weather data: ${err.message}`;
    }
}

function convertToLocalTime(dt) {

    const date = new Date(dt * 1000);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours() % 12 || 12).padStart(2, '0'); 
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const period = date.getHours() >= 12 ? 'PM' : 'AM';

    
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds} ${period}`;
}

function createWeatherDescription(weatherData) {
    const { main, dt, weather } = weatherData;
    const description = document.createElement("div");
    description.className = 'weather_description';
    const convertedDateAndTime = convertToLocalTime(dt);

    // The Weather description
    const weatherDescription = weather[0].description;

    description.innerHTML = `
        <div>
            ${main.temp}${temperatureSymbol} - ${weatherDescription} - ${convertedDateAndTime.substring(10)} - ${convertedDateAndTime.substring(5, 10)}
        </div>
    `;
    return description;
}


/*Citation:
OpenWeatherMap.org. (n.d.). Weather API - OpenWeatherMap. https://openweathermap.org/api
Andy’s Tech Tutorials. (2023, November 8). Weather API Project Tutorial using HTML, CSS, and JavaScript | For Beginners [Video]. YouTube. 
https://www.youtube.com/watch?v=JubKY5p3qRc*/