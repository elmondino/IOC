import fetchData from "./fetchData";

export class Weather {
  constructor(city, apiKey) {
    this.city = city;
    this.apiKey = apiKey;
    this.url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  }

  async getWeather() {
    const weatherData = await fetchData(this.url);
    return weatherData;
  }
}

async function searchWeather(city, apiKey) {
  const weather = new Weather(city, apiKey);
  const weatherData = await weather.getWeather();
  return weatherData;
}

export default searchWeather;
