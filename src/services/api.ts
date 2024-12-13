import axios from "axios";
import { Language, WeatherData } from "../types/weatherTypes";

export const fetchWeatherData = async (
  query: string,
  lang: Language = "pt"
): Promise<WeatherData> => {
  try {
    const response = await axios.get(
      "https://api.weatherapi.com/v1/forecast.json",
      {
        params: {
          key: process.env.EXPO_PUBLIC_WEATHER_API_KEY,
          q: query,
          lang,
          days: 3,
          aqi: "yes",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Não foi possível buscar dados meteorológicos");
  }
};
