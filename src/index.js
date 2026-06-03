import {
  visualCrossingApiKey,
  giphyApiKey,
  pixabayApiKey,
} from "../env/env.js";
import { getWeatherInfo, getPixabayData } from "./apiHandler.js";
import { renderWeatherUI, setDefaultBg, updateDateTime, showLoadingState } from "./ui_handler.js";
import "./styles.css";

setDefaultBg();
updateDateTime();

export const searchInput = document.getElementById("searchCity");
const searchButton = document.getElementById("submitGifKeyword");

searchButton.addEventListener("click", async (e) => {
  e.preventDefault();

 const searchKeyword = searchInput.value;

 if (!searchKeyword) return;
 showLoadingState();

 const finalWeatherData = await getWeatherInfo(searchKeyword);
 // console.log(finalWeatherData);

  if (finalWeatherData) {
     const pixabayUrl = await getPixabayData(finalWeatherData.conditions);
    //console.log("GIF URL:", pixabayUrl);

    renderWeatherUI(finalWeatherData, pixabayUrl);
  }
});
