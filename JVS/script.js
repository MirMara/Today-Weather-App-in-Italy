
 let weather = {
    apiKey: "d02ddb731e38563e94ff98a2ef2e3077",
    fetchWeather: function (city) {
        fetch ("https://api.openweathermap.org/data/2.5/weather?q=" 
        + city 
        + "&units=metric&appid=" 
        + this.apiKey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    console.log(name, icon, description, temp, humidity, speed);
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText = "Wind speed: " + speed + "km/h";

    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-Bar").value);
    },
};

document.querySelector(".search button").addEventListener("click", function (){
    weather.search();
});

document.querySelector(".search-Bar").addEventListener("keyup", function (event){
    if (event.key == "Enter"){
        weather.search();
    }
});


/* Slide show*/

const body = document.querySelector("body");

function slideShow() {
  setTimeout(function () {
    body.style.backgroundImage = "url(https://images.unsplash.com/photo-1531352294718-fb57e1b4e148)";
    setTimeout(function () {
     body.style.backgroundImage = "url(https://images.unsplash.com/photo-1534425582704-65e021820688)";
      setTimeout(function () {
       body.style.backgroundImage = "url(https://images.unsplash.com/photo-1545148481-9b89ba700876?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80)";
       setTimeout(function () {
        body.style.backgroundImage = "url(https://www.pikon.com/wp-content/uploads/2020/03/How-to-make-your-SAP-system-compliant-with-the-Italian-SDI-E-Invoicing-updates-4-May-2020.png)";
        setTimeout(function () {
        body.style.backgroundImage = "url(https://images.unsplash.com/photo-1491383294311-b702fff30fc8)";
        setTimeout(function () {
        body.style.backgroundImage = "url(https://www.cosavedereagenova.it/wp-content/uploads/2020/07/aperitivo-a-genova.jpeg)";
        slideShow();
      }, 5000);
    }, 5000);
  }, 5000);
}, 5000);
}, 5000);
}, 5000);
}

slideShow();
