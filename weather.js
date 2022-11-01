let data;
async function getData() {
  let city = document.getElementById("city").value;

  try {
    let res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9f2cdeac46226db5cf00f231687934a1&units=metric`
    );

    data = await res.json();
    console.log(data.message);
    if(data.message == "city not found"){
        alert("City Not Found")
    }

    displayTable(data);
  } catch (err) {
    console.log(err);
  }
}

function displayTable(data) {
  //document.querySelector("#container").innerHTML = "";

  let london = document.getElementById("london");
  london.innerText = ` ${data.name} ${data.sys.country}`;

  let temp = document.getElementById("temp");
  temp.innerText = `${data.main.temp}°C`;

  let feels = document.getElementById("feels");
  feels.innerText = `Feels like ${data.main.feels_like}°C.`;

  let map = document.querySelector("#gmap_canvas");

  map.src = `https://maps.google.com/maps?q= ${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

  let visibility = document.getElementById("visibility");
  visibility.innerText = `Visibility: ${data.visibility}`;

  let humidity = document.getElementById("humidity");
  humidity.innerText = `Humidity: ${data.main.humidity}`;

  let mintemp = document.getElementById("mintemp");
  mintemp.innerText = `Min Temp. : ${data.main.temp_min}°C`;

  let maxtemp = document.getElementById("maxtemp");
  maxtemp.innerText = `Max Temp. : ${data.main.temp_max}°C`;

  let clouds = document.getElementById("clouds");
  clouds.innerText = `Clouds: ${data.clouds.all}`;

  let windspeed = document.getElementById("windspeed");
  windspeed.innerText = `wind Speed: ${data.wind.speed}`;



  
  document.querySelector("desc")
    .append(visibility, humidity, mintemp, maxtemp, clouds, windspeed);
    document.querySelector("#container").append(london, temp);
}