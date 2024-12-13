import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";
import * as Location from "expo-location";
import { Language, WeatherData } from "../types/weatherTypes";
import { fetchWeatherData } from "../services/api";

interface WeatherContextType {
  weatherData: WeatherData | null;
  language: Language;
  loading: boolean;
  error: string | null;
  setLanguage: (lang: Language) => void;
  fetchData: (query?: string) => Promise<void>;
}

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

export const WeatherProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [language, setLanguage] = useState<Language>("pt");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async (query?: string) => {
    setLoading(true);
    setError(null);

    try {
      let searchQuery = query;

      if (!searchQuery) {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          throw new Error("Permissão de localização negada");
        }

        const location = await Location.getCurrentPositionAsync({});
        searchQuery = `${location.coords.latitude},${location.coords.longitude}`;
      }

      const data = await fetchWeatherData(searchQuery, language);
      setWeatherData(data);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Ocorreu um erro desconhecido"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (weatherData) {
      fetchData(`${weatherData.location.name}`);
    }
  }, [language]);

  return (
    <WeatherContext.Provider
      value={{
        weatherData,
        language,
        loading,
        error,
        setLanguage,
        fetchData,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => {
  const context = useContext(WeatherContext);

  if (context === undefined) {
    throw new Error("useWeather deve ser usado dentro de um WeatherProvider!");
  }
  return context;
};
