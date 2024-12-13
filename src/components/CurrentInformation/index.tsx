import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
import { useWeather } from "@/src/contexts/WeatherContext";
import { useWeatherData } from "@/src/hooks/useWeatherData";
import { MoonPhase, moonPhases } from "@/src/constants/moonPhase";
import DetailCard from "@/src/components/DetailCard";

export default function CurrentInformation() {
  const { weatherData } = useWeather();
  const {
    uvLevel,
    humidityLevel,
    precipitationLevel,
    feelsLikeLevel,
    pressureLevel,
  } = useWeatherData();

  const moonPhaseKey = weatherData?.forecast.forecastday[0].astro
    .moon_phase as MoonPhase;

  if (!weatherData?.current) return null;

  return (
    <View style={styles.currentInformationContainer}>
      <DetailCard
        icon="sunny-outline"
        title="Índice UV"
        value={weatherData.current.uv}
        description={uvLevel}
      />
      <DetailCard
        icon="thermometer-outline"
        title="Sensação"
        value={`${Math.round(weatherData!.current.feelslike_c)}°`}
        description={feelsLikeLevel}
      />
      <DetailCard
        icon="water-outline"
        title="Umidade"
        value={weatherData.current.humidity}
        unit="%"
        description={humidityLevel}
      />
      <DetailCard
        icon="rainy-outline"
        title="Precipitação"
        value={weatherData.current.precip_mm}
        unit="mm"
        description={precipitationLevel}
      />
      <DetailCard
        icon="leaf-outline"
        title="Vento"
        value={weatherData.current.wind_kph}
        unit="km/h"
        description={weatherData.current.wind_dir}
      />
      <DetailCard
        icon="speedometer-outline"
        title="Pressão"
        value={weatherData.current.pressure_mb}
        unit="mb"
        description={pressureLevel}
      />
      <DetailCard
        icon="arrow-up-outline"
        title="Nascente"
        value={weatherData.forecast.forecastday[0].astro.sunrise.split(" ")[0]}
        unit="AM"
        description={`Poente: ${weatherData.forecast.forecastday[0].astro.sunset}`}
      />
      {moonPhaseKey === "Full Moon" ? (
        <DetailCard
          icon="moon-outline"
          title="Fase Lunar"
          value={<Ionicons name="ellipse" size={46} color="#f3f3f3" />}
          description={moonPhases[moonPhaseKey]}
          marginBottom={15}
        />
      ) : (
        <DetailCard
          icon="moon-outline"
          title="Fase Lunar"
          value={<Ionicons name="moon" size={46} color="#f3f3f3" />}
          description={moonPhases[moonPhaseKey]}
          marginBottom={15}
        />
      )}
    </View>
  );
}
