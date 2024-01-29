const apikey = "66919627fe911c580935351dfb2db277";
const apiUrl = " https://api.openweathermap.org/data/2.5/weather?units=metric&q=nagpur";

async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apikey}`);
 var data = await response.json();

 console.log(data);



document.querySelector(".temp").innerHTML = data.main.temp;
document.querySelector(".humidity").innerHTML = data.main.humidity;
document.querySelector(".wind").innerHTML = data.wind.speed;
document.querySelector(".name").innerHtml = data.name;

}

checkWeather();
