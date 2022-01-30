import { OPEN_WEATHER_API_KEY } from "../../constants/weatherApi";
import searchWeather from "../searchWeather";

describe("Integration test utilising fetchData.js with searchWeather.js and API test for openweathermap.org", () => {
  const city = "London";
  const mispelledCity = "qwertyLondon";
  const invalidApiKey = "qwerty12345";

  it("should return 401 status as invalid API key has been passed", async () => {
    const weatherData = await searchWeather(mispelledCity, invalidApiKey);
    expect(weatherData.cod).toBe(401);
  });

  it("Should succesfully call openweathermap API and return an object containing city data", async () => {
    const weatherData = await searchWeather(city, OPEN_WEATHER_API_KEY);
    expect(weatherData.name).toBe("London");
    expect(weatherData.cod).toBe(200);
  });

  it("should return 404 status as invalid city name has been passed", async () => {
    const weatherData = await searchWeather(
      mispelledCity,
      OPEN_WEATHER_API_KEY
    );
    expect(weatherData.cod).toBe("404");
  });
});
