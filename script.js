const apiKey = "223c4a59cf2289a95b0539dbca570e3e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weathericon")

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    
    if (response.status == 404) {
        alert("Invalid City Name")
        document.querySelector(".weather").style.display = "none";
        return;
    } 
    
         var data = await response.json();


    
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";

    if (data.weather[0].main == "Clouds") {
     weatherIcon.src = "clouds.png"
    }
    
    else if (data.weather[0].main == "Clear") {
     weatherIcon.src = "clear.png"
    }
    else if (data.weather[0].main == "Mist") {
     weatherIcon.src = "mist.png"
    }
    else if (data.weather[0].main == "Humidity") {
     weatherIcon.src = "humidity.png"
    }
    else if (data.weather[0].main == "Rain") {
     weatherIcon.src = "rain.png"
    }
    else if (data.weather[0].main == "Snow") {
     weatherIcon.src = "snow.png"
    }
    else if (data.weather[0].main == "Drizzle") {
     weatherIcon.src = "drizzle.png"
    }
    
    else {
        weatherIcon.src = "default.png"; // fallback
    }

    document.querySelector(".weather").style.display = "block"
   
    }
    
    



searchBtn.addEventListener("click" , () => {
    checkWeather(searchBox.value);
})

 

