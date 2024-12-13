import { useMemo } from "react";
import { useWeather } from "@/src/contexts/WeatherContext";
import {
  getUVLevel,
  getHumidityLevel,
  getPrecipitationLevel,
  getFeelsLikeLevel,
  getPressureLevel,
} from "@/src/utils/classificationUtils";

export const useWeatherData = () => {
  const { weatherData } = useWeather();

  const uvLevel = useMemo(() => {
    if (!weatherData?.current?.uv) return "Baixo";
    return getUVLevel(weatherData.current.uv);
  }, [weatherData?.current?.uv]);

  const humidityLevel = useMemo(() => {
    if (!weatherData?.current?.humidity) return "Moderada";
    return getHumidityLevel(weatherData.current.humidity);
  }, [weatherData?.current?.humidity]);

  const precipitationLevel = useMemo(() => {
    if (!weatherData?.current?.precip_mm) return "Sem precipitação";
    return getPrecipitationLevel(weatherData.current.precip_mm);
  }, [weatherData?.current?.precip_mm]);

  const feelsLikeLevel = useMemo(() => {
    if (!weatherData?.current?.feelslike_c) return "Agradável";
    return getFeelsLikeLevel(weatherData.current.feelslike_c);
  }, [weatherData?.current?.feelslike_c]);

  const pressureLevel = useMemo(() => {
    if (!weatherData?.current?.pressure_mb) return "Normal";
    return getPressureLevel(weatherData.current.pressure_mb);
  }, [weatherData?.current?.pressure_mb]);

  return {
    uvLevel,
    humidityLevel,
    precipitationLevel,
    feelsLikeLevel,
    pressureLevel,
  };
};
