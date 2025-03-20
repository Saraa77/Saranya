document.getElementById("getWeather").addEventListener("click", async function () {
    const city = document.getElementById("city").value;
    const weatherInfo = document.getElementById("weather-info");

    if (city.trim() === "") {
        weatherInfo.innerHTML = "Please enter a city.";
        return;
    }

    const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            weatherInfo.innerHTML = `🌡️ ${data.main.temp}°C | ${data.weather[0].description}`;
        } else {
            weatherInfo.innerHTML = "City not found.";
        }
    } catch (error) {
        weatherInfo.innerHTML = "Error fetching weather data.";
    }
});
