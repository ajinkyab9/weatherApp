import {
  visualCrossingApiKey,
  giphyApiKey,
  pixabayApiKey,
} from "../env/env.js";
//import { searchInput } from "./index.js"; learnt dom parsing error and not to pass dom element in the url

export async function getWeatherInfo(city) {
  try {
    const weatherApiResponse = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${visualCrossingApiKey}&unitGroup=metric`,
    );

    const weatherData = await weatherApiResponse.json();
    const todayWeather = weatherData.days[0];

    const weatherDetails = {
      tempMax: todayWeather.tempmax,
      tempMin: todayWeather.tempmin,
      feelsLikeMax: todayWeather.feelslikemax,
      feelslikemin: todayWeather.feelslikemin,
      dew: todayWeather.dew,
      humidity: todayWeather.humidity,
      sunrise: todayWeather.sunrise,
      sunset: todayWeather.sunset,
      conditions: todayWeather.conditions,
      icon: todayWeather.icon,
      description: todayWeather.description,
      humidity: todayWeather.humidity,
      pressure: todayWeather.pressure,
      uvindex: todayWeather.uvindex,
      visibility: todayWeather.visibility,
      windspeed: todayWeather.windspeed,
      precip: todayWeather.precip 
    };

    return weatherDetails;
  } catch (error) {
    console.log("Failed to fetch weather", error);
  }
}

export async function getPixabayData(weatherCondition) {
  try {
    //const apiResponse = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${giphyApiKey}&s=${weatherCondition}`);
    const apiResponse = await fetch(
      `https://pixabay.com/api/videos/?key=${pixabayApiKey}&q=${weatherCondition}&editorschoice=yes&category=nature`,
    );
    const pixabayData = await apiResponse.json();

   // console.log(pixabayData);

   //loop to check the results
    if (pixabayData.hits.length > 0) {

      //to hit random video from pixabay i generated a random index to let it pass through the array
      const generateRandomIndex = Math.floor(Math.random() * pixabayData.hits.length);
      
      const randomVideoHit = pixabayData.hits[generateRandomIndex];

      //extracting the video
      const videoUrl = randomVideoHit.videos.medium.url;

      return videoUrl;
    }

    throw new Error("No videos found for this condition.");
  } catch (error) {
    console.log("Failed to fetch the Video", error);
  }
}
