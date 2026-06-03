export function setDefaultBg() {
  const bgVideo = document.getElementById("bgVideo");
  const defaultBgVid  = "https://cdn.pixabay.com/video/2021/07/08/80724-573496156_medium.mp4";

  bgVideo.src = defaultBgVid;
}

export function showLoadingState() {
  document.getElementById("welcomeMessage").style.display = "none";
  document.getElementById("weatherDetails").style.display = "none";
  document.getElementById("dispSRS").style.display = "none";
  document.getElementById("loadingState").style.display = "flex";
}

const weatherDetails = document.getElementById("weatherDetails");
const welcomeMessage = document.getElementById("welcomeMessage");
const sunriseSunset = document.getElementById("dispSRS");

export function renderWeatherUI(weatherData, videoUrl) {
    //console.log(weatherData);
    //console.log(videoUrl);

    const bgVideo = document.getElementById("bgVideo");

  if (videoUrl) {
    bgVideo.src = videoUrl;
  }

  if (weatherData) {
    document.getElementById("tempDisp").textContent = weatherData.tempMax;
    document.getElementById("dispCondition").textContent = weatherData.description;
    document.getElementById("feelsLikeDisp").textContent = weatherData.feelsLikeMax;
    document.getElementById("dispHumidity").textContent = weatherData.humidity;
    document.getElementById("dispPrecipitation").textContent = weatherData.precip;
    document.getElementById("dispDew").textContent = weatherData.dew;
    document.getElementById("dispWind").textContent = weatherData.windspeed;
    document.getElementById("dispUvIndex").textContent = weatherData.uvindex;
    document.getElementById("dispSr").textContent = weatherData.sunrise;
    document.getElementById("dispSs").textContent = weatherData.sunset;

    loadingState.style.display = "none";
    welcomeMessage.style.display = "none";
    weatherDetails.style.display = "flex";
    sunriseSunset.style.display = "block";
  } else {
    loadingState.style.display = "none";
    welcomeMessage.style.display = "block";
    weatherDetails.style.display = "none";
    sunriseSunset.style.display = "none";
  }
   
  
}

export function updateDateTime() {
  const dateToday = new Date();

  const getDateOptions = {weekday: "long", month: "long", day: "numeric"};
  const dateFormatted = `Its ${dateToday.toLocaleDateString('en-us', getDateOptions)}`;

  const nowHour = dateToday.getHours();

  let greetingText = "Good Evening";

  if(nowHour >= 5 && nowHour < 12) {
    greetingText = "Good Morning";
  } else if(nowHour >= 12 && nowHour < 18) {
    greetingText = "Good Afternoon";
  } else if (nowHour >= 18 && nowHour < 24){
    greetingText = "Good Evening";
  }

  document.getElementById("dispGreet").textContent = greetingText;
  document.getElementById("dispTime").textContent = dateFormatted;
}