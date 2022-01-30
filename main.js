import getWeather from "./components/getWeather";
import { OPEN_WEATHER_API_KEY } from "./constants/weatherApi";

getWeather("London", OPEN_WEATHER_API_KEY);
getWeather("Oxford", OPEN_WEATHER_API_KEY);
getWeather("Bath", OPEN_WEATHER_API_KEY);
