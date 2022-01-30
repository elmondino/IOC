import searchWeather from "../helpers/searchWeather";
import addHtml from "../helpers/addHtml";

async function getWeather(city, apiKey) {
  const weatherData = await searchWeather(city, apiKey);
  let text = "";

  if (weatherData.cod === "404") {
    text = `Sorry ${weatherData.message}...`;
  } else {
    text = `Current weather in ${weatherData.name} is ${weatherData.main.temp}°`;
  }

  return weatherData ? addHtml(text, "h1") : addHtml("Something went wrong...");
}

export default getWeather;
