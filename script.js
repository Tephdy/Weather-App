async function getWeather() {
    const city = document.getElementById("city").value;
    const apiKey = "0eb56757d237b7f65bc6100f5f14ff45";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.cod !== 200) {
            document.getElementById("weather-info").innerHTML = `<p>${data.message}</p>`;
            document.getElementById("json-response").textContent = JSON.stringify(data, null, 2);
            return;
        }
        
        document.getElementById("weather-info").innerHTML = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <h4>(3 Hours Forecast)</h4>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Weather: ${data.weather[0].description}</p>
        `;
    } catch (error) {
        document.getElementById("weather-info").innerHTML = `<p>Error fetching data</p>`;
        document.getElementById("json-response").textContent = JSON.stringify({ error: "Failed to fetch data" }, null, 2);
    }
}
