let weather = {
    apiKey: "d02ddb731e38563e94ff98a2ef2e3077",
    fetchWeather: function (city) {
        fetch ("https://api.openweathermap.org/data/2.5/weather?q=" 
        + city 
        + "&appid=d02ddb731e38563e94ff98a2ef2e3077="
        + this.apiKey
        )
        .then ((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
    const { name } = data;
    const { icon, description } = data.weather;
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    console.log(name, icon, description, temp, humidity, speed);
    }
};